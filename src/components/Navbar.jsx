import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Github", id: "github" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobile(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 duration-300 ${
        scroll
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <a
  href="#home"
  className="text-3xl font-extrabold"
>
  <span className="text-purple-500">&lt;</span>

  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
    Khushbu Mukati
  </span>

  <span className="text-purple-500">/&gt;</span>
</a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-300 hover:text-cyan-400 duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 duration-300"
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMobile(!mobile)}
          className="lg:hidden text-white text-3xl"
        >
          {mobile ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden bg-[#0B1120] border-t border-white/10">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="px-6 py-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 duration-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mx-6 mt-4 text-center py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;