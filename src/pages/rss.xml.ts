import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { SiteDescription, SiteTitle } from '../consts.ts'

const parser = new MarkdownIt()

export async function GET(context: { site: string }) {
  const posts = await getCollection('posts')
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())

  return rss({
    customData: `<language>en-us</language>`,
    description: SiteDescription,
    items: posts.map((post) => ({
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
      }),
      description: post.data.description,
      link: `/posts/${encodeURIComponent(post.id)}`,
      pubDate: post.data.pubDate,
      title: post.data.title,
    })),
    site: context.site,
    title: SiteTitle,
    trailingSlash: true,
  })
}
