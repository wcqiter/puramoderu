import type { SoraPaperUserConfig } from "./src/config/types";

const config = {
  site: {
    name: "Puramoderu",
    description: "一個機娘模型愛好者的記錄日誌",
    url: "https://puramoderu.dennisiter.cc",
    base: "/",
    ogImage: "",
    defaultLocale: "zh",
  },
  author: {
    name: "天虹",
    title: "機娘模型愛好者",
    bio: "程序員、模型愛好者、3D打印愛好者、米哈遊玩家",
    avatar: "/profile.jpg",
    location: "香港",
    links: [
      { label: "GitHub", href: "https://github.com/wcqiter" },
      { label: "X", href: "https://x.com/dennisiter" },
      { label: "Hpoi", href: "https://www.hpoi.net/user/209327" },
      { label: "Email", href: "mailto:dennisiter@gmail.com" }
    ]
  },
  now: {
    listening: "米哈遊遊戲[原神、崩壞：星穹鐵道、絕區零、崩壞3]、少女前線2：追放、明日方舟：終末地、碧藍航線",
    reading: "網頁全端、雲端、架構",
    working: "异世界旅行手帐03 新手铁匠 海莉·史密斯"
  },
  featureFlags: {
    travel: false
  },
  codeBlocks: {
    copyButton: true,
    lineNumbers: false
  },
  article: {
    license: "cc-by-4.0"
  },
  footer: {
    startedAt: "2026-11-13T10:00:00+08:00",
    // Fill these after the corresponding registrations are approved.
    icp: {
      number: ""
    },
    publicSecurity: {
      number: "",
      href: "",
      icon: "/assets/beian-gongan.png"
    }
  },
  colorSchemes: ["paper", "sakura", "moon", "ocean"],
  ui: {
    zh: {
      nav: {
        home: "首頁",
        archive: "製作記錄",
        tags: "主題",
        series: "系列",
        about: "關於",
        friends: "友情鏈接",
        travel: "遊記"
      },
      hero: {
        eyebrow: "歡迎來到我的日誌",
        title: "一個機娘模型愛好者的記錄日誌",
        description: "享受DIY的樂趣",
        chips: []
      },
      article: {
        translationUnavailable: "當前文章尚未提供其他語言版本，切換語言將保持在當前頁面。",
        postNavigation: "相鄰文章",
        previousPost: "上一篇",
        nextPost: "下一篇"
      },
      mermaid: {
        dialog: "Mermaid 圖表預覽",
        open: "點擊放大圖表",
        close: "關閉圖表預覽"
      }
    },
    en: {
      nav: {
        home: "Home",
        archive: "Moderling Records",
        tags: "Tags",
        series: "Series",
        about: "About",
        friends: "Friends Sites",
        travel: "Travel"
      },
      hero: {
        eyebrow: "Welcome to my space",
        title: "A record blog of a plastic model maker",
        description: "Enjoy the fun of DIY",
        chips: []
      },
      article: {
        translationUnavailable: "This post is not available in the other language yet. Switching language will keep you here.",
        postNavigation: "Adjacent posts",
        previousPost: "Previous",
        nextPost: "Next"
      },
      mermaid: {
        dialog: "Mermaid diagram preview",
        open: "Open diagram in full size",
        close: "Close diagram preview"
      }
    }
  }
} satisfies SoraPaperUserConfig;

export default config;
