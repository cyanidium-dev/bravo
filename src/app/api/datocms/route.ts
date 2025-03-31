import { NextResponse } from "next/server";
import { DATOCMS_URL } from "@/constants/constants";

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || "";

// Функція для отримання даних з DatoCMS з підтримкою кешування через fetch
const fetchDatoCMS = async (
  query: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: any,
  includeDrafts: boolean
) => {
  const response = await fetch(DATOCMS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
      "Content-Type": "application/json",
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600, tags: ["datocms"] }, // Вказуємо тег для кешування
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from DatoCMS");
  }

  return response.json();
};

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
    return NextResponse.json(
      { error: "Failed to fetch data from DatoCMS" },
      { status: 500 }
    );
  }
}
