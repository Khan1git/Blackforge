"use client";

import { useState } from "react";
import { ChatPanel } from "@/components/chat/ChatPanel";
import {
  BotIcon,
  CloseIcon,
  WhatsAppIcon,
} from "@/components/chat/icons";
import { site } from "@/data/site";

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi BlackForge — I'd like to talk about a project.",
)}`;

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatPanel open={open} onClose={() => setOpen(false)} />

      <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-center gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
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
    </>
  );
}
