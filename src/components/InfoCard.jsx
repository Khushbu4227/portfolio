import { motion } from "framer-motion";

function InfoCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg"
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400">
        {value}
      </p>
    </motion.div>
  );
}

export default InfoCard;