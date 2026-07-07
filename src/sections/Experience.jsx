import { motion } from "framer-motion";
import experience from "../data/experience";
import TimelineCard from "../components/TimelineCard";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1120] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-purple-400">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            My Journey
          </h2>

        </motion.div>

        <div className="relative mt-20">

          <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">

            {experience.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;