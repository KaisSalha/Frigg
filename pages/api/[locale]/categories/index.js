import prisma from "helpers/prisma";

export async function getCategories(locale_ref) {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  const categories = await prisma.categories.findMany({
    where: { locale_id: parseInt(locale.id) }
  });

  return categories;
}

export default async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const { locale_ref } = req.query;

  const categories = await getCategories(locale_ref);

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(categories);
};
