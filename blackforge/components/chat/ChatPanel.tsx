"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { site } from "@/data/site";
import {
  CHAT_MAX_INPUT_LENGTH,
  CHAT_MAX_MESSAGES,
  chatSuggestions,
  chatWelcome,
  findGuardrailReply,
  type ChatTurn,
} from "@/lib/chatbot";
import { cn } from "@/lib/utils";
import {
  BotIcon,
  CloseIcon,
  ResetIcon,
  SendIcon,
  WhatsAppIcon,
} from "./icons";

type ChatMessage = {
  id: number;
  from: "bot" | "user";
  text: string;
  tone?: "error";
};

type ChatApiResponse = {
  reply?: unknown;
  source?: unknown;
  error?: unknown;
  code?: unknown;
};

type ChatPanelProps = {
  open: boolean;
  onClose: () => void;
};

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi BlackForge — I'd like to talk about a project.",
)}`;

const initialMessages: ChatMessage[] = [
  { id: 1, from: "bot", text: chatWelcome },
];

function BotAvatar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-accent text-accent-contrast",
        className,
      )}
    >
      <BotIcon className="h-4 w-4" />
    </span>
  );
}

function TypingDots() {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-muted" />
      <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-muted" />
      <span className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-muted" />
    </span>
  );
}

function getErrorMessage(status: number, code?: string): string {
  if (status === 429 || code === "rate_limited") {
    return "I'm getting a lot of requests right now. Try again in a moment, or use WhatsApp or the contact page.";
  }

  if (code === "not_configured") {
    return "The assistant isn't connected yet. Please use WhatsApp or the contact page for now.";
  }

  if (status === 503) {
    return "The assistant is unavailable right now. Try again, or use WhatsApp or the contact page.";
  }

  return "I couldn't reach the assistant just now. Try again, or use WhatsApp or the contact page.";
}

function resizeTextarea(element: HTMLTextAreaElement) {
  element.style.height = "auto";
  element.style.height = `${Math.min(element.scrollHeight, 120)}px`;
}

export function ChatPanel({ open, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const loadingRef = useRef(false);
  const nextIdRef = useRef(2);

  function makeMessage(
    from: ChatMessage["from"],
    text: string,
    tone?: ChatMessage["tone"],
  ): ChatMessage {
    return { id: nextIdRef.current++, from, text, tone };
  }

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const container = messagesRef.current;

    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading, open]);

  async function sendText(raw: string) {
    const text = raw.trim();

    if (!text || loadingRef.current) {
      return;
    }

    // Only block unsafe prompts locally. Normal questions go to the API so
    // OpenRouter can answer when a key is configured.
    const guardrailReply = findGuardrailReply(text);
    const userMessage = makeMessage("user", text);

    if (guardrailReply) {
      const botMessage = makeMessage("bot", guardrailReply);
      setMessages((current) => [...current, userMessage, botMessage]);
      setValue("");

      if (inputRef.current) {
        inputRef.current.style.height = "auto";
        inputRef.current.focus();
      }

      return;
    }

    const history = [...messages, userMessage];
    setMessages(history);
    setValue("");
    loadingRef.current = true;
    setIsLoading(true);

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // Skip the welcome bubble and error toasts — OpenRouter expects the
      // first non-system turn to be from the user, with alternating roles.
      const turns: ChatTurn[] = [];

      for (const message of history) {
        if (message.tone === "error") {
          continue;
        }

        if (message.from === "bot" && turns.length === 0) {
          continue;
        }

        const role = message.from === "user" ? "user" : "assistant";
        const previous = turns[turns.length - 1];

        if (previous?.role === role) {
          previous.content = `${previous.content}\n\n${message.text}`;
          continue;
        }

        turns.push({ role, content: message.text });
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: turns.slice(-CHAT_MAX_MESSAGES),
        }),
        signal: controller.signal,
      });
      const data = (await response.json().catch(() => ({}))) as ChatApiResponse;

      if (!response.ok) {
        const code = typeof data.code === "string" ? data.code : undefined;
        throw new Error(getErrorMessage(response.status, code));
      }

      if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error(getErrorMessage(502));
      }

      if (controller.signal.aborted) {
        return;
      }

      const replyMessage = makeMessage("bot", data.reply.trim());
      setMessages((current) => [...current, replyMessage]);
    } catch (error) {
      if (controller.signal.aborted) {
        return;
      }

      const message =
        error instanceof Error && error.message
          ? error.message
          : getErrorMessage(500);
      const errorMessage = makeMessage("bot", message, "error");
      setMessages((current) => [...current, errorMessage]);
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        loadingRef.current = false;
        setIsLoading(false);
      }
    }
  }

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
    resizeTextarea(event.currentTarget);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!loadingRef.current) {
        void sendText(value);
      }
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendText(value);
  }

  function resetChat() {
    abortRef.current?.abort();
    abortRef.current = null;
    loadingRef.current = false;
    setIsLoading(false);
    nextIdRef.current = 2;
    setMessages(initialMessages);
    setValue("");

    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.focus();
    }
  }

  return (
    <div
      id="site-chat"
      role="dialog"
      aria-label="BlackForge assistant"
      aria-hidden={!open}
      className={cn(
        "fixed inset-x-4 bottom-36 z-[80] h-[min(32rem,calc(100dvh-9rem))] flex-col overflow-hidden rounded-2xl border border-line bg-bg shadow-2xl shadow-black/20 sm:inset-x-auto sm:bottom-40 sm:right-5 sm:w-[24rem]",
        open ? "flex" : "hidden",
      )}
    >
      <header className="flex shrink-0 items-center gap-3 bg-inverse px-4 py-3.5 text-inverse-foreground">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-contrast">
          <BotIcon className="h-5 w-5" />
          <span
            className={cn(
              "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-inverse bg-highlight",
              isLoading && "animate-pulse",
            )}
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold tracking-[-0.02em]">
            BlackForge assistant
          </p>
          <p className="label mt-0.5 flex items-center gap-1.5 text-inverse-foreground/60">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full bg-highlight",
                isLoading && "animate-pulse",
              )}
            />
            {isLoading ? "Typing..." : "AI assistant"}
          </p>
        </div>
        <button
          type="button"
          onClick={resetChat}
          aria-label="Start a new chat"
          title="Start a new chat"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-inverse-foreground/60 transition-colors hover:bg-inverse-foreground/10 hover:text-inverse-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ResetIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          title="Close chat"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-inverse-foreground/60 transition-colors hover:bg-inverse-foreground/10 hover:text-inverse-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </header>

      <div
        ref={messagesRef}
        role="log"
        aria-live="polite"
        aria-busy={isLoading}
        className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain bg-bg p-4"
      >
        {messages.map((message, index) => {
          const isBot = message.from === "bot";
          const previous = messages[index - 1];
          const showBotLabel = isBot && previous?.from !== "bot";
          const bubbleTone =
            message.tone === "error"
              ? "rounded-bl-md border border-highlight/50 bg-highlight/10 text-ink"
              : isBot
                ? "rounded-bl-md border border-line bg-surface text-ink"
                : "rounded-br-md bg-accent text-accent-contrast";

          return (
            <div
              key={message.id}
              className={cn(
                "flex min-w-0 items-end gap-2",
                isBot ? "justify-start" : "justify-end",
              )}
            >
              {isBot ? <BotAvatar className="h-7 w-7" /> : null}
              <div className="min-w-0 max-w-[85%]">
                <div
                  className={cn(
                    "min-w-0 rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    bubbleTone,
                  )}
                >
                  <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                    {message.text}
                  </p>
                </div>
                {showBotLabel ? (
                  <p className="label mt-1.5 px-1 text-muted/70">
                    BlackForge assistant
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}

        {isLoading ? (
          <div className="flex min-w-0 items-end gap-2">
            <BotAvatar className="h-7 w-7" />
            <div className="rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3 shadow-sm">
              <span className="sr-only">
                BlackForge assistant is typing
              </span>
              <TypingDots />
            </div>
          </div>
        ) : null}

        {messages.length === 1 && !isLoading ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {chatSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => void sendText(suggestion)}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-left text-xs text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="shrink-0 border-t border-line bg-surface">
        <div className="flex items-center justify-between gap-2 px-3 pt-2.5">
          <span className="label text-muted/70">Need a person?</span>
          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="label flex items-center gap-1 text-muted transition-colors hover:text-ink"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="label flex items-center gap-1 text-muted transition-colors hover:text-ink"
            >
              Contact
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-2 px-3 pb-3 pt-2"
        >
          <div className="min-w-0 flex-1 rounded-xl border border-line bg-bg px-3 py-2 transition-colors focus-within:border-accent">
            <textarea
              ref={inputRef}
              value={value}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              rows={1}
              maxLength={CHAT_MAX_INPUT_LENGTH}
              wrap="soft"
              placeholder="Ask about our work..."
              aria-label="Message"
              className="block max-h-[7.5rem] min-h-6 w-full resize-none overflow-y-auto bg-transparent text-sm leading-relaxed text-ink outline-none placeholder:text-muted"
            />
          </div>
          <button
            type="submit"
            disabled={!value.trim() || isLoading}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-contrast shadow-sm transition-all hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-40"
          >
            <SendIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
