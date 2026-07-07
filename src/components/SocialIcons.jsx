import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/Khushbu4227",
  },
  {
    icon: FaLinkedin,
    link: "linkedin.com/in/khushbu-mukati-004657284",
  },
  {
    icon: FaEnvelope,
    link: "mailto:mukatikhushboo47@gmail.com",
  },
];

function SocialIcons() {
  return (
    <div className="flex gap-5 mt-8">
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] duration-300"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;