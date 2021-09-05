import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "helpers/prisma";

export const getArticle = async (locale_ref: string, slug: string) => {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  if (!locale) return;

  const article = await prisma.articles.findFirst({
    where: { locale_id: Number(locale.id), slug },
    include: {
      category: true,
      assets: {
        include: {
          asset_type: true
        }
      },
      author: true
    }
  });

  return article;
};

const getArticleApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  let { locale_ref, slug } = req.query;

  locale_ref = Array.isArray(locale_ref) ? locale_ref[0] : locale_ref;
  slug = Array.isArray(slug) ? slug[0] : slug;

  const article = await getArticle(locale_ref, slug);

  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(article);
};

export default getArticleApi;
