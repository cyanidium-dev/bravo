export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic"; // Гарантує, що роут не кешується на Vercel

export async function GET() {
  try {
    // Відправка запиту на оновлення кешу
    revalidateTag("datocms");

    return new NextResponse(JSON.stringify({ message: "Кеш оновлено!" }), {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate", // Оновлення кешу
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Не вдалося оновити кеш" },
      { status: 500 }
    );
  }
}
