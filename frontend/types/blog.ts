// Block-based content (prebuilt components)
export type HeadingLevel = 1 | 2 | 3;

export interface BlogBlockHeading {
  type: "heading";
  level: HeadingLevel;
  text: string;
}

export interface BlogBlockParagraph {
  type: "paragraph";
  text: string;
}

export interface BlogBlockImage {
  type: "image";
  url: string;
  alt?: string;
  caption?: string;
}

export interface BlogBlockQuote {
  type: "quote";
  text: string;
  author?: string;
}

export interface BlogBlockList {
  type: "list";
  items: string[];
  ordered: boolean;
}

export interface BlogBlockCode {
  type: "code";
  code: string;
  language?: string;
}

export interface BlogBlockDivider {
  type: "divider";
}

export type CalloutVariant = "info" | "warning" | "success";

export interface BlogBlockCallout {
  type: "callout";
  text: string;
  variant: CalloutVariant;
}

/** Carousel of multiple images */
export interface BlogBlockCarousel {
  type: "carousel";
  images: { url: string; alt?: string; caption?: string }[];
}

/** Image on left, heading + description on right (or reversed) */
export interface BlogBlockImageContent {
  type: "imageContent";
  imageUrl: string;
  imageAlt?: string;
  heading: string;
  description: string;
  reverse?: boolean; // if true: heading left, image right
}

export type BlogContentBlock =
  | BlogBlockHeading
  | BlogBlockParagraph
  | BlogBlockImage
  | BlogBlockQuote
  | BlogBlockList
  | BlogBlockCode
  | BlogBlockDivider
  | BlogBlockCallout
  | BlogBlockCarousel
  | BlogBlockImageContent;

/** SEO meta overrides */
export interface BlogMetaTags {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

/** Service tag links */
export type BlogServiceTag = "ninexFold" | "ninexDevOps" | "ninexConnect" | "ninexScale";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** Legacy: raw HTML. Use contentBlocks for new posts. */
  content?: string;
  /** Block-based content (preferred). */
  contentBlocks?: BlogContentBlock[];
  coverImageUrl?: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  /** SEO meta overrides (optional) */
  metaTags?: BlogMetaTags;
  /** Service tags linking to NineX brands */
  tags?: BlogServiceTag[];
}

export type BlogPostInput = Omit<BlogPost, "createdAt" | "updatedAt"> & {
  createdAt?: string;
  updatedAt?: string;
};
