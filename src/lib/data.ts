"use server";

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createShortURL(url: string) {
  const shortUrl = Math.random().toString(36).substring(2, 8);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    });
    const result = "localhost:3000/" + data.shortUrl;
    return { result, error: "" };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return { result: "", error: "Error. Link already shorted!" };
      }
    }
    return { result: "", error: "Something went wrong!" };
  }
}

export async function getUrl(shortId: string) {
  const prisma = new PrismaClient();
  const link = await prisma.link.findUnique({
    where: {
      shortUrl: shortId,
    },
  });

  return link;
}
