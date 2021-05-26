import prisma from "helpers/prisma";

export async function getCategory(locale_ref, slug) {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  const category = await prisma.categories.findFirst({
    where: { locale_id: parseInt(locale.id), slug }
  });

  return category;
}

export default async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const { locale_ref, slug } = req.query;

  const category = await getCategory(locale_ref, slug);

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(category);
};
