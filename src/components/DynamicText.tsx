"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = [
  "Build, Bond & Break Barriers",
  "Innovate & Inspire",
  "Lead with Excellence",
];

const DynamicText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 w-full overflow-hidden">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center font-garamond text-2xl font-semibold text-dark-purple"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DynamicText;