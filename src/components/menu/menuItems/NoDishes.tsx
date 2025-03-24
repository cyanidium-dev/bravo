interface NoDishesProps {
  children: string;
}

export default function NoDishes({ children }: NoDishesProps) {
  return (
    <div className="mx-auto pt-[200px] pb-[120px]">
      <p className="xl:w-full text-24bold leading-[123%] text-black/50 uppercase text-center">
        {children}
      </p>
    </div>
  );
}
