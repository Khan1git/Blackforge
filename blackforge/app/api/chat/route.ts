import { NextResponse } from "next/server";
import { ChatError, createChatReply, parseChatRequest } from "@/lib/chat";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 60;

const NO_STORE_HEADERS = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(data, {
    status,
    headers: { ...NO_STORE_HEADERS, ...headers },
  });
}

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  const limit = checkRateLimit(getClientKey(request));

  if (!limit.allowed) {
    return json(
      {
        error: "Too many requests. Please try again shortly.",
        code: "rate_limited",
      },
      429,
      { "Retry-After": String(limit.retryAfter) },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (Number.isFinite(contentLength) && contentLength > 32_000) {
    return json({ error: "Request is too large.", code: "invalid" }, 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body.", code: "invalid" }, 400);
  }

  const parsed = parseChatRequest(body);

  if (!parsed.ok) {
    return json({ error: parsed.error, code: "invalid" }, 400);
  }

  try {
    const result = await createChatReply(parsed.messages);
    return json({ reply: result.reply, source: result.source });
  } catch (error) {
    if (error instanceof ChatError) {
      return json({ error: error.message, code: error.code }, error.status);
    }

    console.error(
      "[chat] Unhandled error:",
      error instanceof Error ? error.message : "unknown error",
    );
    return json(
      { error: "The assistant is unavailable.", code: "internal" },
      500,
    );
  }
}
