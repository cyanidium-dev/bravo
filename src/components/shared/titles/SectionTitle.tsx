interface SectionTitleProps {
  children: string;
  className?: string;
  variant: "white" | "black";
}

export default function SectionTitle({
  children,
  className = "",
  variant = "black",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-28bold lg:text-48bold leading-[130%] uppercase ${
        variant === "black" ? "text-black" : "text-white"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
