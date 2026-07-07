import { useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(window.tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: "#050816",
      },

      fpsLimit: 120,

      particles: {
        number: {
          value: 60,
        },

        color: {
          value: ["#8B5CF6", "#22D3EE", "#EC4899"],
        },

        links: {
          enable: true,
          color: "#7C3AED",
          opacity: 0.2,
          distance: 150,
        },

        move: {
          enable: true,
          speed: 1,
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: {
            min: 2,
            max: 5,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return <Particles options={options} />;
}

export default ParticlesBackground;