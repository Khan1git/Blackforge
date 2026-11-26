"use client";

import { useEffect, useState } from "react";
import { ChatPanel } from "@/components/chat/ChatPanel";
import {
  BotIcon,
  CloseIcon,
  WhatsAppIcon,
} from "@/components/chat/icons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi BlackForge — I'd like to talk about a project.",
)}`;

const chatTips = [
  "Ask about our services",
  "Got a project in mind?",
  "Need a quick answer?",
  "Curious about our process?",
  "Want to see the work?",
  "Chat with BlackForge",
  "How can we help?",
];

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [tipVisible, setTipVisible] = useState(true);

  useEffect(() => {
    if (open) {
      setTipVisible(false);
      return;
    }

    setTipVisible(true);

    const rotate = window.setInterval(() => {
      setTipVisible(false);

      window.setTimeout(() => {
        setTipIndex((current) => {
          let next = Math.floor(Math.random() * chatTips.length);
          if (next === current && chatTips.length > 1) {
            next = (current + 1) % chatTips.length;
          }
          return next;
        });
        setTipVisible(true);
      }, 220);
    }, 4500);

    return () => window.clearInterval(rotate);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        aria-label="Close chat backdrop"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[70] bg-[#0b1220]/45 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      <ChatPanel open={open} onClose={() => setOpen(false)} />

      <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-[#071a0f] shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-14 sm:w-14"
        >
          <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>

        <div className="relative flex flex-col items-end gap-2">
          {!open ? (
            <div
              aria-live="polite"
              className={cn(
                "pointer-events-none absolute right-full bottom-1/2 mr-3 hidden w-max max-w-none translate-y-1/2 whitespace-nowrap rounded-2xl rounded-tr-md border border-line bg-bg px-4 py-2.5 text-left text-sm leading-none text-ink shadow-lg shadow-black/15 transition-all duration-300 lg:block",
                tipVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1 opacity-0",
              )}
            >
              {chatTips[tipIndex]}
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="site-chat"
            aria-label={open ? "Close chat" : "Open chat"}
            title={open ? "Close chat" : "Open chat"}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-contrast shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:h-14 sm:w-14"
          >
            {open ? (
              <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <BotIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
