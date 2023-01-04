import React, { useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
  const [siteTitel, setsiteTitel] = useState("");
  const [siteIcon, setsiteIcon] = useState("");
  const favicon = document.getElementById("favicon");
  document.title = siteTitel;
  favicon.setAttribute("href", siteIcon);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      setsiteTitel("Come Back to my Portfolio");
      setsiteIcon("./emoji.ico");
    } else {
      setsiteTitel("Portfolio | Yassir Elkhaili");
      setsiteIcon("./favicon.ico");
    }
  });

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },

          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default Header;
