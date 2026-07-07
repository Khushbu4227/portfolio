import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profile from "../assets/images/profile.png";
import InfoCard from "../components/InfoCard";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[5px]">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-3 text-white">
            Know Me Better
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Khushbu Mukati"
              className="w-80 rounded-3xl shadow-[0_0_50px_#7c3aed] border border-purple-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white">
              Khushbu Mukati
            </h3>

            <p className="text-purple-400 mt-2 text-xl">
              Java Full Stack Developer
            </p>

            <p className="text-gray-400 leading-8 mt-8">
              Passionate Java Full Stack Developer with knowledge of
              Java, Spring Boot, React, MySQL and REST APIs. I enjoy
              building secure, scalable and modern web applications.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <InfoCard
                icon={<FaGraduationCap />}
                title="Education"
                value="B.Tech CSE • CGPA 8.18"
              />

              <InfoCard
                icon={<FaBriefcase />}
                title="Internship"
                value="MP Online & Codec Technologies"
              />

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Khargone, Madhya Pradesh"
              />

              <InfoCard
                icon="💼"
                title="Experience"
                value="Java | Spring Boot | React"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;