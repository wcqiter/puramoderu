import type { Locale } from "@/i18n/config";
import userConfig from "../../sorapaper";
import { mergeConfig } from "@/config/merge";
import type { UiConfig } from "@/config/types";

export const defaultUi = {
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
    home: {
      latestPosts: "最新文章",
      viewAll: "查看全部"
    },
    sidebar: {
      tags: "主題",
      browseAllTags: "瀏覽所有主題",
      now: "興趣",
      listening: "持續遊玩",
      reading: "專業",
      working: "下一件作品"
    },
    article: {
      back: "返回",
      updated: "更新於",
      share: "分享",
      shareDescription: "複製連結、下載分享圖，或分享到常用平台。",
      copyLink: "複製連結",
      copied: "已複製",
      nativeShare: "系統分享",
      downloadSvg: "下載 SVG",
      downloadPng: "下載 PNG",
      shareToX: "分享到 X",
      shareToWeibo: "分享到微博",
      shareToTelegram: "分享到 Telegram",
      wechat: "微信",
      wechatHint: "微信掃碼開啟文章後，可繼續轉寄給朋友或朋友圈。",
      translationUnavailable: "目前文章暫無對應譯文，語言切換會保留在目前頁面。",
      postNavigation: "鄰近文章",
      previousPost: "上一篇",
      nextPost: "下一篇",
      seriesLabel: "文章系列",
      seriesProgress: "第 {current} 篇，共 {total} 篇",
      licenseLabel: "授權協議",
      licenseDescription: "本文採用 {license} 授權。",
      licenses: {
        "cc-by-4.0": "知識共享署名 4.0 國際授權協議",
        "cc-by-nc-4.0": "知識共享署名—非商業性使用 4.0 國際授權協議"
      },
      copyright: "使用 SoraPaper 寫作。轉載時請保留原文連結。",
      browseArchive: "瀏覽歸檔"
    },
   pages: {
    archiveTitle: "以年份瀏覽所有文章",
    archiveDescription: "已發布的文章。",
    tagsTitle: "按主題找筆記",
    tagsDescription: "柔和的內容索引。",
    taggedDescription: "這個標籤下收錄的文章。",
    seriesTitle: "按系列連續閱讀",
    seriesDescription: "有順序地瀏覽相互關聯的文章。",
    seriesPosts: "篇文章",
    seriesEmpty: "這個語言下還沒有系列文章。",
    aboutTitle: "關於",
    friendsTitle: "網路花園裡的鄰居",
    friendsDescription: "一些值得訪問的連結。",
    travelTitle: "遊記",
    travelDescription: "未來會在這裡記錄旅行路線、城市印象和地圖足跡。",
    travelEmptyTitle: "旅行地圖即將展開",
    travelEmptyDescription: "這個頁面暫時獨立於部落格系統，後續可以存取地圖、地點資料和旅遊記錄服務。"
  },
  search: {
    label: "搜尋文章",
    placeholder: "Astro、設計、生活...",
    empty: "輸入關鍵字搜尋標題、摘要及內文。",
    noResults: "暫時沒有符合的文章。",
    ariaOpen: "搜尋"
  },
  footer: {
    builtWith: "使用 Astro 建構。",
    runningSince: "本站已經運行了 {time}",
    runtimeDays: "{count} 天",
    runtimeHours: "{count} 小時",
    runtimeMinutes: "{count} 分鐘",
    runtimeSeconds: "{count} 秒"
  },
  mermaid: {
    dialog: "Mermaid 圖表預覽",
    open: "點擊放大圖表",
    close: "關閉圖表預覽"
  },
    readingTime: "{minutes} 分鐘閱讀"
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
    home: {
      latestPosts: "Latest Posts",
      viewAll: "View all"
    },
    sidebar: {
      tags: "Tags",
      browseAllTags: "Browse all tags",
      now: "Now",
      listening: "Listening",
      reading: "Reading",
      working: "Working on"
    },
    article: {
      back: "Back",
      updated: "Updated",
      share: "Share",
      shareDescription: "Copy the link, download the social image, or share to common platforms.",
      copyLink: "Copy link",
      copied: "Copied",
      nativeShare: "System share",
      downloadSvg: "Download SVG",
      downloadPng: "Download PNG",
      shareToX: "Share to X",
      shareToWeibo: "Share to Weibo",
      shareToTelegram: "Share to Telegram",
      wechat: "WeChat",
      wechatHint: "Scan with WeChat to open this post, then forward it to chats or Moments.",
      translationUnavailable: "This post is not available in the other language yet. Switching language will keep you here.",
      postNavigation: "Adjacent posts",
      previousPost: "Previous",
      nextPost: "Next",
      seriesLabel: "Article series",
      seriesProgress: "Part {current} of {total}",
      licenseLabel: "License",
      licenseDescription: "This work is licensed under the {license}.",
      licenses: {
        "cc-by-4.0": "Creative Commons Attribution 4.0 International License",
        "cc-by-nc-4.0": "Creative Commons Attribution-NonCommercial 4.0 International License"
      },
      copyright: "Written with SoraPaper. Please keep the original link when reposting.",
      browseArchive: "Browse archive"
    },
    pages: {
      archiveTitle: "All writing, grouped by year",
      archiveDescription: "Published posts in the garden.",
      tagsTitle: "Find notes by topic",
      tagsDescription: "A soft index for the garden.",
      taggedDescription: "Posts collected under this tag.",
      seriesTitle: "Read in series",
      seriesDescription: "Browse connected posts in their intended order.",
      seriesPosts: "posts",
      seriesEmpty: "There are no series posts in this language yet.",
      aboutTitle: "About",
      friendsTitle: "Neighbors in the web garden",
      friendsDescription: "A small collection of links worth visiting.",
      travelTitle: "Travel",
      travelDescription: "A future home for routes, city notes and map-based travel records.",
      travelEmptyTitle: "The travel map will unfold here",
      travelEmptyDescription: "This page is separate from the blog system, ready for maps, place data and a dedicated travel service later."
    },
    search: {
      label: "Search posts",
      placeholder: "Astro, design, life...",
      empty: "Type to search titles, descriptions and post content.",
      noResults: "No matching posts yet.",
      ariaOpen: "Search"
    },
    footer: {
      builtWith: "Built with Astro.",
      runningSince: "Running for {time}",
      runtimeDays: "{count}d",
      runtimeHours: "{count}h",
      runtimeMinutes: "{count}m",
      runtimeSeconds: "{count}s"
    },
    mermaid: {
      dialog: "Mermaid diagram preview",
      open: "Open diagram in full size",
      close: "Close diagram preview"
    },
    readingTime: "{minutes} min read"
  }
} satisfies UiConfig;

export const ui = mergeConfig(defaultUi, userConfig.ui);

export function getUi(locale: Locale) {
  return ui[locale];
}
