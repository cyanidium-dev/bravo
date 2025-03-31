import { NextResponse } from "next/server";
import axios from "axios";
import { DATOCMS_URL } from "@/constants/constants";
import { unstable_cache } from "next/cache";

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || "";

// Функція для кешування запитів
const fetchDatoCMS = unstable_cache(
  async (query: string, variables, includeDrafts: boolean) => {
    const response = await axios.post(
      DATOCMS_URL,
      { query, variables },
      {
        headers: {
          Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
          "Content-Type": "application/json",
          ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        },
      }
    );
    return response.data;
  },
  ["datocms"], // Унікальний ключ кешу
  { revalidate: 3600, tags: ["datocms"] } // Оновлення кешу раз на годину
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
