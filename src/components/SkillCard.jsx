import { motion } from "framer-motion";

function SkillCard({ Icon, name, color }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-lg p-8 flex flex-col items-center justify-center hover:border-cyan-400 duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 duration-300"></div>

      <Icon
        className={`${color} text-6xl group-hover:scale-125 duration-300 relative z-10`}
      />

      <h3 className="text-white font-semibold text-lg mt-6 relative z-10">
        {name}
      </h3>
    </motion.div>
  );
}

export default SkillCard;