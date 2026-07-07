import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
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
            distance: 150,
            opacity: 0.2,
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

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;