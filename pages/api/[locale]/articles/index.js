import prisma from "helpers/prisma";

export async function getArticles(locale_ref, category_id = null) {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  const where = { locale_id: parseInt(locale.id), status_id: 3 };

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
}

export default async (req, res) => {
  const { locale_ref, category_id } = req.query;

  const articles = await getArticles(locale_ref);

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(articles);
};
