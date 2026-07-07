import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

import profile from "../assets/images/profile.png";

import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import FloatingTech from "../components/FloatingTech";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center pt-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-xl">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-8xl font-black mt-5 leading-tight text-white">
            Khushbu
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Mukati
            </span>
          </h1>

          <div className="text-3xl font-semibold mt-8 h-16 text-white">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 leading-8 mt-8 max-w-xl">
            Passionate Java Full Stack Developer specializing in Java,
            Spring Boot, React, MySQL and REST APIs. I build secure,
            scalable and modern web applications with clean architecture
            and responsive user interfaces.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <Button primary href="#projects">
              View Projects
            </Button>

            <Button href="/resume.pdf" target="_blank">
              Download Resume
            </Button>
          </div>

          {/* Social Icons */}

          <div className="mt-10">
            <SocialIcons />
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.03}
            perspective={1200}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-purple-600 blur-[90px] opacity-40"></div>

              {/* Rotating Border */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
              />

              {/* Profile */}

              <div className="relative w-[390px] h-[390px] rounded-full p-[5px] bg-[#050816]">
                <img
                  src={profile}
                  alt="Khushbu Mukati"
                  className="w-full h-full rounded-full object-cover border-4 border-white/10"
                />
              </div>

              {/* Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute -top-2 right-0 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl text-sm font-semibold"
              >
                Available for Work
              </motion.div>

              <FloatingTech />
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 rounded-full border-2 border-purple-500 flex justify-center">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;