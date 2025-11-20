import { rssSchema } from '@astrojs/rss'
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: () =>
    z.intersection(
      rssSchema,
      z.object({
        categories: z.array(z.string()),
        pubDate: z.date({ coerce: true }),
      }),
    ),
})

export const collections = { posts }
