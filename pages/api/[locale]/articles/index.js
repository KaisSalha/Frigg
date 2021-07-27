import prisma from "helpers/prisma";

export async function getArticles(locale_ref) {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  const articles = await prisma.articles.findMany({
    where: { locale_id: parseInt(locale.id), status_id: 3 },
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
  const { locale_ref } = req.query;

  const articles = await getArticles(locale_ref);

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(articles);
};
