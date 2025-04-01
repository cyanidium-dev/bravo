import { NextResponse } from "next/server";
import { DATOCMS_URL } from "@/constants/constants";
import { unstable_cache } from "next/cache";

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || "";

// Функція для кешування запитів
const fetchDatoCMS = unstable_cache(
  async (query: string, variables, includeDrafts: boolean) => {
    const response = await fetch(DATOCMS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
        "Content-Type": "application/json",
        ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from DatoCMS");
    }

    return response.json();
  },
  ["datocms"],
  { tags: ["datocms"] }
);

export async function POST(req: Request) {
  try {
    const { query, variables, includeDrafts } = await req.json();

    if (!query) {
      return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    // Використання кешованої функції
    const data = await fetchDatoCMS(query, variables, includeDrafts);

    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch data from DatoCMS",
    });
  }
}
