---
pubDatetime: 2024-09-01T22:50:00Z
title: Learn Astro Project Structure
description: TBD
draft: false
tags:
  - docs
---

## Required things

### Pages for Route

[pages](https://docs.astro.build/en/basics/project-structure/#srcpages) is the required sub-directory cause Astro is [file-based routing](https://docs.astro.build/en/basics/astro-pages/#file-based-routing)

> components, layouts and styles are all conventional but **not required** sub-directories. They are used to decorate the content
>
> layouts are used for layouting each type of pages rendering.
> components and styles are used for flexible customizing pages.

### Markdown content files

src/contents sub-directory is used for contents. Once [defining collections](https://docs.astro.build/en/guides/content-collections/#defining-collections), markdown file is required to match schema

## Astro Advantages

- Frontend Development Friendly
- Flexible and Highly Customized
- Great Ecosystem and Fast Growth Community
- Well Organized Documentaries

## Others Things

- Tailwind CSS Using

## Some tricks

If there has some logic in script depending styles, than the `<script>` need to be placed after the `<style>` part, otherwise, the logic in script cannot manipulate the styles

## TODO

There are something can be optimized, such as:

- Use a CLI to create content with auto frontmatters generating

There are something to be clarified, such as:

- How to set correct datetime
