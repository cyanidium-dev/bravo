"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/helpers/bravoAnimation.json";
import { motion, AnimatePresence } from "framer-motion";

export default function LottieSplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("splashPlayed");

    if (alreadyPlayed) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splashPlayed", "true");
    }, 2000); // тривалість анімації

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-greenDark"
        >
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
