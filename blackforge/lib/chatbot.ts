import chatbotData from "@/data/chatbot.json";

export const CHAT_MAX_INPUT_LENGTH = 2_000;
export const CHAT_MAX_MESSAGES = 12;
export const CHAT_MAX_REQUEST_MESSAGES = 20;
export const CHAT_MAX_TOTAL_LENGTH = 24_000;

export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

type RawRule = {
  id: string;
  patterns: string[];
  reply: string;
};

type ChatbotData = {
  welcome: string;
  suggestions: string[];
  guardrails: RawRule[];
  quickReplies: RawRule[];
};

type CompiledRule = {
  id: string;
  reply: string;
  patterns: RegExp[];
};

const data = chatbotData as ChatbotData;

function compileRules(rules: RawRule[]): CompiledRule[] {
  return rules.map((rule) => ({
    id: rule.id,
    reply: rule.reply,
    patterns: rule.patterns.map((pattern) => new RegExp(pattern, "i")),
  }));
}

const guardrails = compileRules(data.guardrails);
const quickReplies = compileRules(data.quickReplies);

export const chatWelcome = data.welcome;
export const chatSuggestions = data.suggestions;

export function normalizeChatInput(input: string): string {
  return input.toLowerCase().replace(/\s+/g, " ").trim();
}

function matchRule(rules: CompiledRule[], input: string): string | null {
  const normalized = normalizeChatInput(input);

  if (!normalized) {
    return null;
  }

  for (const rule of rules) {
    if (rule.patterns.some((pattern) => pattern.test(normalized))) {
      return rule.reply;
    }
  }

  return null;
}

/** Check for prompt injection, malicious security requests, and obvious off-topic messages. */
export function findGuardrailReply(input: string): string | null {
  return matchRule(guardrails, input);
}

/** Return an instant answer for common questions before calling the AI. */
export function findQuickReply(input: string): string | null {
  return matchRule(quickReplies, input);
}
