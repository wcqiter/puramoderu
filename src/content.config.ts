import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    // 主題依賴的基礎欄位（大多可選，避免舊文章報錯）
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    lang: z.enum(['zh', 'en']).default('zh'),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
    toc: z.boolean().default(false),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    translationKey: z.string().optional(),
    ogImage: z.string().optional(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),

    // 外部連結
    xUrl: z.string().url().optional(),
    hpoiUrl: z.string().url().optional(),

    // 你的結構化欄位
    parts: z.array(z.object({
      location: z.string(),
      source: z.string(),
      type: z.enum(['原裝', '殺肉', '第三方改件', '膠板/補土自制', '3D打印', '其他']),
      note: z.string().optional(),
    })).default([]),

    paints: z.array(z.object({
      location: z.string(),
      brand: z.string(),
      code: z.string(),
      name: z.string().optional(),   // ← 補回 name，PostLayout 在用
      base: z.string().optional(),
      shadow: z.string().optional(),
      topcoat: z.string().optional(),
      note: z.string().optional(),
    })).default([]),
  }),
});

const friends = defineCollection({
  loader: glob({ pattern: '**/*.{md,json,yaml,yml}', base: './src/content/friends' }),
  schema: z.object({
    name: z.string(),
    href: z.string().url(),
    avatar: z.string().optional(),
  }),
});

export const collections = { models, friends };