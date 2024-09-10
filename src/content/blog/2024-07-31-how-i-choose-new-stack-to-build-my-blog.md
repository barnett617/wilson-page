---
pubDatetime: 2024-07-31T11:49:00.000+08:00
title: How I choose new stack to build my blog
featured: false
tags: 
  - notes
description: Some thinking about refactoring my blog with refresh tech stack
---

At first, I just to want to use [Hugo](https://gohugo.io/) with a new theme to setup my new blog, but when I want to customize some layout, I found that I need to learn [html/template](https://pkg.go.dev/html/template) first, it seems like a Go's Standard library.

But I work as a frontend developer now, so I'm more familiar with frontend stack such as Vue or React.

So to learn a template parser which only used by [Go](https://go.dev/) is not worth for me. Then I decided to switch the stack back to frontend ecosystem.

The first words came into my mind is [Astro](https://astro.build/) and [Next.js](https://nextjs.org/) which are really popular frameworks nowadays, so I started to get to investigate them deeper.

[nextjs vs astro](https://www.reddit.com/r/nextjs/comments/13194x5/nextjs_vs_astro_for_static_sites/)

[astro vs vitepress](https://dev.to/kevinbism/coding-the-perfect-documentation-deciding-between-vitepress-and-astro-starlight-2i11_)

<https://onebite.dev/hugo-vs-astro-which-static-site-generator-to-choose-in-2023/>

## Final decisions

- Astro: for more flexible framework choice and more suitable for managing content with MDX
- Vercel: trending deployment platform with great maintaining teams
- Cloudflare: bandwitdh controlling and domain management
