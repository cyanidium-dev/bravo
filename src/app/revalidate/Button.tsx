"use client";

import { useTransition } from "react";
import revalidateDatoCMS from "../actions";
export default function ButtonComponent() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      revalidateDatoCMS();
    });
  };

  return (
    <button onClick={handleClick} disabled={isPending}>
      {isPending ? "Оновлення..." : "Оновити кеш"}
    </button>
  );
}
