import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-purple-400">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Looking for a Java Full Stack Developer? Feel free to connect
            with me through email, LinkedIn or GitHub.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
              <FaEnvelope className="text-3xl text-cyan-400" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">mukatikhushboo47@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
              <FaPhoneAlt className="text-3xl text-purple-400" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+91 7803864718</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6">
              <FaMapMarkerAlt className="text-3xl text-pink-400" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">
                  Khargone, Madhya Pradesh
                </p>
              </div>
            </div>

          </div>

          {/* Right */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl text-white font-bold">
              Connect With Me
            </h3>

            <p className="text-gray-400 mt-3">
              Follow me on my professional platforms.
            </p>

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/Khushbu4227"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#161B22] flex items-center justify-center text-3xl hover:bg-cyan-500 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/khushbu-mukati-004657284"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-full bg-[#0A66C2] flex items-center justify-center text-3xl hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href="mailto:mukatikhushboo47@gmail.com"
              className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;