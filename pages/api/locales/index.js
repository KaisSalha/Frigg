import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLocales() {
  const locales = await prisma.locales.findMany();

  return locales;
}

export default async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const locales = await getLocales();

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(locales);
};
