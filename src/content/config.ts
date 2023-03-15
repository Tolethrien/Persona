import { z, defineCollection } from "astro:content";
export const contentCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    done: z.boolean(),
  }),
});

export const collections = {
  games: contentCollection,
  projects: contentCollection,
};
