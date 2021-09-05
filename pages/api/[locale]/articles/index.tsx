import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "helpers/prisma";

export const getArticles = async (
  locale_ref: string,
  category_id: number | null = null
) => {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  if (!locale) return [];

  const where = { locale_id: Number(locale.id), status_id: 3 };

  // @ts-ignore
  if (category_id) where.category_id = category_id;

  const articles = await prisma.articles.findMany({
    where,
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

  return articles;
};

const getArticlesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  let { locale_ref, category_id } = req.query;

  locale_ref = Array.isArray(locale_ref) ? locale_ref[0] : locale_ref;
  category_id = Array.isArray(category_id) ? category_id[0] : category_id;

  const articles = await getArticles(locale_ref, parseInt(category_id));

  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(articles);
};

export default getArticlesApi;
