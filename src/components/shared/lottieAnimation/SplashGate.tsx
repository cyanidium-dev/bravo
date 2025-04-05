"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieSplashScreen = dynamic(() => import("./LottieSplashScreen"), {
  ssr: false,
});

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("splashPlayed", "true");
      setShowSplash(false);
    }, 1500); // тривалість анімації

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <LottieSplashScreen />;
  }

  return <>{children}</>;
}
