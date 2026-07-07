import { motion } from "framer-motion";

function Button({
  children,
  href = "#",
  primary = false,
  target = "_self",
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold transition-all duration-300
      ${
        primary
          ? "bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 text-white shadow-lg hover:shadow-purple-500/50"
          : "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#050816]"
      }`}
    >
      {children}
    </motion.a>
  );
}

export default Button;