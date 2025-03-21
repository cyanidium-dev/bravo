import { Paragraph } from "@/types/article";

interface ContentListProps {
  content: Paragraph[];
}

export default function ContentList({ content }: ContentListProps) {
  return (
    <ul className="flex flex-col gap-y-12">
      {content.map((item, idx) => (
        <p key={idx}>{item.paragraph}</p>
      ))}
    </ul>
  );
}
