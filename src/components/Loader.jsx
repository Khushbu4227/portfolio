import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="text-3xl font-bold text-white mt-8"
        >
          Khushbu Mukati
        </motion.h1>

        <p className="text-gray-400 mt-3">
          Loading Portfolio...
        </p>

      </div>
    </div>
  );
}

export default Loader;