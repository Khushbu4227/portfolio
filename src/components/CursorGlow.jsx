import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0"
    />
  );
}

export default CursorGlow;