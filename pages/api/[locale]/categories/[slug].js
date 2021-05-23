import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const { locale_ref, slug } = req.query;

  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  const category = await prisma.categories.findFirst({
    where: { locale_id: parseInt(locale.id), slug }
  });

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(category);
};
