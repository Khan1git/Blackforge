import type { Review } from "@/lib/types";

// Add real, attributable client reviews here when they are available. Do not
// add invented quotes or company names.
export const reviews: Review[] = [];

export const featuredReviews = reviews.filter((review) => review.featured);
