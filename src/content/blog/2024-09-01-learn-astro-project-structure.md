---
pubDatetime: 2024-09-01T22:50:00.000+08:00
title: About Astro Learning
description: Some records during setup this blog about using Astro
draft: false
tags:
  - notes
---

## Required things

### Pages for Route

[pages](https://docs.astro.build/en/basics/project-structure/#srcpages) is the required sub-directory cause Astro is [file-based routing](https://docs.astro.build/en/basics/astro-pages/#file-based-routing)

> components, layouts and styles are all conventional but **not required** sub-directories. They are used to decorate the content
>
> layouts are used for layouting each type of pages rendering.
> components and styles are used for flexible customizing pages.

### Markdown content files

src/contents sub-directory is used for contents. Once [defining collections](https://docs.astro.build/en/guides/content-collections/#defining-collections), markdown files are required to match schema

## Astro Advantages

- Frontend Development Friendly
- Flexible and Highly Customized
- Great Ecosystem and Fast Growth Community
- Well Organized Documentaries

## Others Things

- [Tailwind](https://tailwindcss.com/docs/utility-first) Using

[@apply](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply) is using to extract repeated utility patterns to custom CSS classes which is simply naming a group of styles into a class

> tip: avoid premature abstraction

## Some tricks

If there has some logic in script depending styles, than the `<script>` need to be placed after the `<style>` part, otherwise, the logic in script cannot manipulate the styles

## TODO

There are something can be optimized, such as:

- Use a CLI to create content with auto frontmatters generating

There are something to be clarified, such as:

- How to set correct datetime
