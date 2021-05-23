import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const locales = await prisma.locales.findMany();

  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  return res.json(locales);
};
