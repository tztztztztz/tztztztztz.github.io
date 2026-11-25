import fs from "node:fs";
import path from "node:path";
const title = process.argv.slice(2).join(" ") || "新文章";
const slug = title.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || `post-${Date.now()}`;
const date = new Date().toISOString().slice(0, 10);
const file = path.resolve(import.meta.dirname, "..", "content", `${slug}.md`);
if (fs.existsSync(file)) throw new Error(`文章已存在：${file}`);
fs.writeFileSync(file, `---\ntitle: "${title.replaceAll('"', '\\"')}"\ndate: ${date}\ndescription: "用一句话介绍这篇文章。"\ntags: [笔记]\ndraft: true\n---\n\n从这里开始写。\n`);
console.log(file);
