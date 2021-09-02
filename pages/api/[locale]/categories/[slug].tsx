import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "helpers/prisma";

export const getCategory = async (locale_ref: string, slug: string) => {
  const locale = await prisma.locales.findFirst({
    where: { ref: locale_ref }
  });

  if (!locale) return;

  const category = await prisma.categories.findFirst({
    where: { locale_id: Number(locale.id), slug }
  });

  return category;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  let { locale_ref, slug } = req.query;

  locale_ref = Array.isArray(locale_ref) ? locale_ref[0] : locale_ref;
  slug = Array.isArray(slug) ? slug[0] : slug;

  const category = await getCategory(locale_ref, slug);

  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(category);
};
