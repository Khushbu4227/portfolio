import { motion } from "framer-motion";

function TimelineCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-3 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

      <div className="bg-white/5 border border-purple-500/20 backdrop-blur-lg rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 duration-300">

        <h3 className="text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="text-cyan-400 mt-2">
          {item.company}
        </p>

        <p className="text-purple-400 mt-1">
          {item.duration}
        </p>

        <p className="text-gray-400 mt-5 leading-8">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
}

export default TimelineCard;