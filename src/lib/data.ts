"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createShortURL(url: string) {
  const shortUrl = Math.random().toString(36).substring(2, 8);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    });
    const result = data.shortUrl;
    return result;
  } catch (error) {
    console.log("Error");
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
