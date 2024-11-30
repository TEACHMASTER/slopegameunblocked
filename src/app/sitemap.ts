import { locales,defaultLocale } from "@/src/i18n/config";
import { getBlogs ,getGames} from "@/src/i18n/get-dictionary";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const sitemapEntries = [];

  // 为每个语言版本添加基础页面
  for (const locale of locales) {
    const games = await getGames(locale)
    //const blogs = await getBlogs(locale)
    // 添加主页
    sitemapEntries.push({
      url: `${baseUrl}/${locale==defaultLocale? '':locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });

    // 添加游戏目录页面
    // sitemapEntries.push({
    //   url: `${baseUrl}/${locale}/cargamesunblocked`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // });

    //添加游戏页面
    for (const game of games) {
      if (game.showname) {
        sitemapEntries.push({
          url: `${baseUrl}${locale==defaultLocale? '':'/'+locale}/${game.showname}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    }
    // 添加博客文章页面
    // for (const post of blogs) {
    //   if (post.title) {
    //     sitemapEntries.push({
    //       url: `${baseUrl}/${locale}/blog/${post.title?.replaceAll(' ', '-')}`,
    //       lastModified: post.publishedAt?new Date(post.publishedAt as string):new Date(),
    //       changeFrequency: "monthly",
    //       priority: 0.6,
    //     });
    //   }
    // }
  }

  return sitemapEntries;
}
