import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "helpers/prisma";

export const getCategories = async (locale_ref: string) => {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  if (!locale) return [];

  const categories = await prisma.categories.findMany({
    where: { locale_id: Number(locale.id) }
  });

  return categories;
};

const getCategoriesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  let { locale_ref } = req.query;

  locale_ref = Array.isArray(locale_ref) ? locale_ref[0] : locale_ref;

  const categories = await getCategories(locale_ref);

  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(categories);
};

export default getCategoriesApi;
