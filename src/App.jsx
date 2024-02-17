import React, { useRef, useState } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import SummarySection from "./views/SummarySection";
import Navigation from "./components/Navigation";
import IntroSection from "./views/IntroSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  const appContainer = useRef();

  const [mode, setMode] = useState("light");
  const [activeSection, setActiveSection] = useState(1)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "#intro-section",
        start: "top top",
        end: "bottom center",
        onUpdate: () => {
          setMode(setActiveSection(1));
        },
      });
      ScrollTrigger.create({
        trigger: "#summary-section",
        start: "top center",
        end: "bottom center",
        toggleClass: {
          className: "dark",
          targets: "#container",
        },
        onUpdate: () => {
          setMode(setActiveSection(2));
        },
      });
    },
    { scope: appContainer }
  );

  return (
    <div ref={appContainer} id="appContainer" className="app">
      <div id="container" className="">
        <div className="transition ease-in bg-neutral-100 dark:bg-neutral-900">
          <div className="fixed top-0 w-full pt-4 pb-4 pr-4 sm:pb-6 sm:pr-6 sm:pt-6 lg:h-screen lg:w-3/12 lg:pb-0 lg:pl-10 lg:pt-20 xl:pl-20">
            {lgScreen ? <Navigation size="lg" activeSection={activeSection} /> : <Navigation size="sm" activeSection={activeSection} />}
          </div>
          <div className="w-full lg:flex lg:flex-row lg:justify-end">
            <div className="w-10/12 pt-16 mx-auto lg:mx-0 lg:w-9/12 lg:pr-10">
              <div id="intro-section">
                <IntroSection />
              </div>
              <div id="summary-section">
                <SummarySection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
