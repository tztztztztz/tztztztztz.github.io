import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const [owner, repository] = (process.env.GITHUB_REPOSITORY || "/").split("/");
const isUserSite = repository === `${owner}.github.io`;
const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : "http://localhost:4321");
const base = process.env.BASE_PATH || (repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { theme: "github-light" }
  }
});
