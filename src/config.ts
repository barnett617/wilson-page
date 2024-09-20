import type { GiscusProps } from "@giscus/react";
import type { Site, SocialConfig } from "./types";

export const SITE: Site = {
  website: "https://wilsonpage.com/", // replace this with your deployed domain
  author: "Wilson",
  profile: "https://wilsonpage.com/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Wilson's Blog",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  editPost: {
    url: "https://github.com/barnett617/wilsonpage/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const HOME_INFO = {
  title: "Hi there 👋",
  content: `
      Welcome to Wilson's Blog
      <br>
      I write blogs and keep notes here
    `,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: Array<SocialConfig & { active: boolean }> = [
  {
    name: "Github",
    href: "https://github.com/barnett617/wilson-page",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/W1lson712",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];

export const GISCUS: GiscusProps = {
  repo: "barnett617/wilson-page",
  repoId: "R_kgDOMdii9g",
  category: "Announcements",
  categoryId: "DIC_kwDOMdii9s4CiTW_",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "en",
  loading: "lazy",
};
