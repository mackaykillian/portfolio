import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { useMediaQuery } from "react-responsive";
import IntroView from "./views/IntroView";
import OverviewView from "./views/OverviewView";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";

export default function App() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  const introFrame = useRef();
  useGSAP(
    () => {
      gsap.from(".quick-bold", {
        fontWeight: 100,
        duration: 1.3,
        stagger: 0.07,
        ease: "power2.inOut",
      });
    },
    { scope: introFrame }
  );
  return (
    <div className="app">
      <div>
        <div className="flex flex-row justify-between bg-green-400">
          <div>photo</div>
          <div>nav</div>
        </div>
        {/* Intro Section */}
        <IntroView />
        {/* Overview Section */}
        <OverviewView />
        {/* Projects Section */}
        <ProjectsView />
        {/* About Me Section */}
        <AboutView />
      </div>
    </div>
  );
}
