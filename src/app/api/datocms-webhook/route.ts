import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  // Додай захист від несанкціонованого доступу
  if (secret !== process.env.DATO_CMS_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Очищаємо кеш
  revalidateTag("datocms");

  return NextResponse.json({ message: "Cache cleared" });
}
