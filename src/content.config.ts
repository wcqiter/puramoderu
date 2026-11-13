import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }), // 注意目录改名
  schema: z.object({
    title: z.string(), // 套件名称，主题列表页依赖
    pubDate: z.coerce.date(), // 保留，主题可能用于排序
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),

    // 你的核心结构化字段
    parts: z.array(z.object({
      location: z.string(),
      source: z.string(),
      type: z.enum(['原裝','殺肉', '第三方改件', '膠板/補土自制', '3D打印','其他']),
      note: z.string().optional(),
    })).default([]),

    paints: z.array(z.object({
      location: z.string(),
      brand: z.string(),
      code: z.string(),
      base: z.string().optional(),
      shadow: z.string().optional(),
      topcoat: z.string().optional(),
      note: z.string().optional(),
    })).default([]),

    lang: z.enum(['zh', 'en']).default('zh'),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    translationKey: z.string().optional(),
    xUrl: z.string().url().optional(),
    hpoiUrl: z.string().url().optional(),
  }),
});

export const collections = { models }; // 导出名为 models