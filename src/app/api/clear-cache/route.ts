import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET() {
  try {
    await revalidateTag("datocms");
    return NextResponse.json({ message: "Кеш оновлено!" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Не вдалося оновити кеш" },
      { status: 500 }
    );
  }
}
