import { z } from "zod";

export const ArticleFrontmatterSchema = z.object({
  slug: z.string(),
  title: z.string(),
  /** Two-part display title for the Cover. `before` + italic `emphasis`. */
  titleAccent: z.object({
    before: z.string(),
    emphasis: z.string(),
  }),
  subtitle: z.string(),
  category: z.string(),
  author: z.object({
    name: z.string(),
    role: z.string().optional(),
    initial: z.string(),
  }),
  publishedAt: z.string(),
  updatedAt: z.string().optional(),
  language: z.enum(["fr", "en"]),
  description: z.string(),
  tags: z.array(z.string()),
  takeaways: z.array(z.string()).min(3).max(7),
  centralCitation: z
    .object({
      arabic: z.string(),
      translation: z.string(),
      reference: z.string(),
    })
    .optional(),
  ogImage: z.string().optional(),
});

export type ArticleFrontmatter = z.infer<typeof ArticleFrontmatterSchema>;
