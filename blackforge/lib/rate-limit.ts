type Bucket = {
  count: number;
  resetAt: number;
};

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfter: number };

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 1_000;

/**
 * Small in-memory fixed-window limiter. It is intentionally dependency-free.
 * On multi-instance deployments, replace this with a shared store (for example
 * Redis or a hosted rate limiter) so limits apply across instances.
 */
export function checkRateLimit(
  key: string,
  limit = 30,
  windowMs = 10 * 60 * 1_000,
): RateLimitResult {
  const now = Date.now();
  const bucketKey = key || "unknown";

  if (buckets.size > MAX_BUCKETS) {
    for (const [bucketId, bucket] of buckets) {
      if (bucket.resetAt <= now) {
        buckets.delete(bucketId);
      }
    }

    while (buckets.size > MAX_BUCKETS) {
      const oldestKey = buckets.keys().next().value;

      if (oldestKey === undefined) {
        break;
      }

      buckets.delete(oldestKey);
    }
  }

  const current = buckets.get(bucketKey);

  if (!current || current.resetAt <= now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
    };
  }

  current.count += 1;
  return { allowed: true };
}
