import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Github() {
  return (
    <section
      id="github"
      className="py-28 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-purple-400">
            GitHub
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Coding Profile
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            I regularly build Java Full Stack projects and upload them to GitHub.
            Explore my repositories, source code and development journey.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
        >

          <FaGithub className="text-8xl mx-auto text-white" />

          <h3 className="text-3xl font-bold text-white mt-6">
            Khushbu4227
          </h3>

          <p className="text-gray-400 mt-4">
            Passionate about Java, Spring Boot, React and Backend Development.
          </p>

          <a
            href="https://github.com/Khushbu4227"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
          >
            Visit GitHub
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Github;