import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCubes,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

import {
  TbLetterC,
  TbHierarchy,
} from "react-icons/tb";

const skills = [
  {
    name: "Java",
    icon: FaJava,
    color: "text-orange-500",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "text-green-500",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-600",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-400",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "text-indigo-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
  },
  {
    name: "C",
    icon: TbLetterC,
    color: "text-sky-400",
  },
  {
    name: "OOPS",
    icon: FaCubes,
    color: "text-pink-400",
  },
  {
    name: "DSA",
    icon: TbHierarchy,
    color: "text-purple-400",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[7px] text-purple-400">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Technical
            <span className="text-cyan-400"> Skills</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable,
            secure and modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              Icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
// import { motion } from "framer-motion";
// import SkillCard from "../components/SkillCard";

// import {
//   FaJava,
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaGithub,
//   FaDatabase,
//   FaCode,
// } from "react-icons/fa";

// import {
//   SiSpringboot,
//   SiMysql,
//   SiJavascript,
// } from "react-icons/si";

// const skills = [
//   {
//     name: "Java",
//     icon: FaJava,
//     color: "text-orange-500",
//   },
//   {
//     name: "Spring Boot",
//     icon: SiSpringboot,
//     color: "text-green-500",
//   },
//   {
//     name: "React",
//     icon: FaReact,
//     color: "text-cyan-400",
//   },
//   {
//     name: "JavaScript",
//     icon: SiJavascript,
//     color: "text-yellow-400",
//   },
//   {
//     name: "HTML5",
//     icon: FaHtml5,
//     color: "text-orange-600",
//   },
//   {
//     name: "CSS3",
//     icon: FaCss3Alt,
//     color: "text-blue-500",
//   },
//   {
//     name: "MySQL",
//     icon: SiMysql,
//     color: "text-blue-400",
//   },
//   {
//     name: "SQL",
//     icon: FaDatabase,
//     color: "text-indigo-400",
//   },
//   {
//     name: "Git",
//     icon: FaGitAlt,
//     color: "text-red-500",
//   },
//   {
//     name: "GitHub",
//     icon: FaGithub,
//     color: "text-white",
//   },
//   {
//     name: "C",
//     icon: FaCode,
//     color: "text-sky-400",
//   },
//   {
//     name: "OOPS",
//     icon: FaCode,
//     color: "text-pink-400",
//   },
//   {
//     name: "DSA",
//     icon: FaCode,
//     color: "text-purple-400",
//   },
// ];

// function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-28 bg-[#050816]"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >

//           <p className="uppercase tracking-[7px] text-purple-400">
//             MY SKILLS
//           </p>

//           <h2 className="text-5xl font-bold text-white mt-4">
//             Technical
//             <span className="text-cyan-400"> Skills</span>
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
//             Technologies and tools I use to build scalable,
//             secure and modern web applications.
//           </p>

//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">

//           {skills.map((skill) => (
//             <SkillCard
//               key={skill.name}
//               Icon={skill.icon}
//               name={skill.name}
//               color={skill.color}
//             />
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;