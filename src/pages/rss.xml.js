import rss from "@astrojs/rss";
import config from "../../blog.config.js";
import { getPosts, withBase } from "../lib/blog";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: config.title,
    description: config.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: withBase(`/posts/${post.id}/`)
    }))
  });
}
