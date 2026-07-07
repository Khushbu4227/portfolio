import {
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

function FloatingTech() {

  const tech = [
    {
      icon: <FaJava />,
      top: "5%",
      left: "-10%",
      color: "text-orange-500",
    },

    {
      icon: <FaReact />,
      top: "15%",
      right: "-12%",
      color: "text-cyan-400",
    },

    {
      icon: <SiSpringboot />,
      bottom: "15%",
      left: "-8%",
      color: "text-green-500",
    },

    {
      icon: <SiMysql />,
      bottom: "8%",
      right: "-10%",
      color: "text-blue-500",
    },

    {
      icon: <FaGitAlt />,
      top: "45%",
      right: "-18%",
      color: "text-orange-600",
    },
  ];

  return (
    <>
      {tech.map((item, index) => (
        <div
          key={index}
          className={`absolute text-5xl ${item.color} animate-bounce`}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </div>
      ))}
    </>
  );
}

export default FloatingTech;