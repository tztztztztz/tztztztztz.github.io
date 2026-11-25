# 栈外笔记

一个基于 Astro 的 Markdown 个人技术博客，支持 Shiki 代码高亮、KaTeX 数学公式、深浅色主题、内容集合、RSS、Sitemap 和 GitHub Pages 自动部署。

## 开始写作

```bash
npm run new -- "文章标题"
npm run dev
```

打开 `http://localhost:4321/`。新文章会出现在 `content/`，Astro 会在保存后自动热更新。把 front matter 里的 `draft: true` 改为 `draft: false`（或删除该行）即可发布。

## 个性化

编辑 `blog.config.js`：

- `title`：博客名
- `author`：作者名
- `description`：博客简介
- `socials`：社交链接

页面样式在 `public/style.css`，关于页在 `content/about.md`。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，把本目录提交并推送到 `main` 分支。
2. 在仓库 **Settings → Pages → Build and deployment** 中把 Source 设为 **GitHub Actions**。
3. 推送代码。Astro 会从 GitHub 环境自动识别用户名、仓库名和 Pages 子路径，官方工作流会完成构建与发布。

## Markdown 示例

行内公式写作 `$E=mc^2$`，块级公式使用独占行的 `$$` 包裹。代码块使用标准 fenced code block 并标注语言。

## 常用命令

```bash
npm run dev      # 本地开发与热更新
npm run check    # Astro/TypeScript 检查
npm run build    # 生成 dist/
npm run preview  # 预览生产构建
```
