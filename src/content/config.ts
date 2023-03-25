import { z, defineCollection } from "astro:content";
export const contentCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.string()),
    done: z.boolean(),
    links: z.object({ source: z.string(), app: z.string() }),
  }),
});

export const collections = {
  games: contentCollection,
  projects: contentCollection,
};
