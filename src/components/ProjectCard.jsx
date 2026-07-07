import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500 duration-300 shadow-xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden h-60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

        <div className="absolute top-5 left-5">
          <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-5 leading-8">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Button */}

        <div className="mt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/40"
          >
            <FaGithub size={22} />
            View Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;