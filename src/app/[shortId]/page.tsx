import { getUrl } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

export default async function Page({
  params: { shortId },
}: {
  params: { shortId: string };
}) {
  const link = await getUrl(shortId);

  if (!link) {
    notFound();
  }
  redirect(link.url);
}
