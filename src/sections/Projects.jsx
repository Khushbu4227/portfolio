import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-purple-400">
            MY WORK
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            These are the projects that best demonstrate my experience in
            full-stack development, backend engineering, responsive UI
            design, REST API development and database management.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;