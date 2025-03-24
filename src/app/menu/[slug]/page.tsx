import Menu from "@/components/menu/Menu";

interface MenuCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MenuCategoryPage({
  params,
}: MenuCategoryPageProps) {
  const { slug } = await params;
  return (
    <>
      <main className="flex-1">
        <Menu slug={slug} />
      </main>
    </>
  );
}
