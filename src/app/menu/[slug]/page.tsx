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
      <Menu slug={slug} />
    </>
  );
}
