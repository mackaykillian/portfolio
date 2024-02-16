import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { useMediaQuery } from "react-responsive";
// import Header from "./components/Header";
// import IntroView from "./views/IntroView";
// import OverviewView from "./views/OverviewView";
// import ProjectsView from "./views/ProjectsView";
// import AboutView from "./views/AboutView";
// import ConnectView from "./views/ConnectView";
import SummarySection from "./views/SummarySection";
import Navigation from "./components/Navigation";
import IntroSection from "./views/IntroSection";

export default function App() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  return (
    <div className="app bg-neutral-900">
      <div className="">
        <div className="fixed top-0 w-full pb-4 pr-4 pt-4 sm:pb-6 sm:pr-6 sm:pt-6 lg:h-screen lg:w-3/12 lg:pb-0 lg:pl-10 lg:pt-20 xl:pl-20">
          {lgScreen ? <Navigation size="lg" /> : <Navigation size="sm" />}
        </div>
        <div className="w-full lg:flex lg:flex-row lg:justify-end">
          <div className="mx-auto w-10/12 pt-16 lg:mx-0 lg:w-9/12 lg:pr-10">
            <IntroSection />
            <SummarySection />
          </div>
        </div>
      </div>
    </div>
  );
}
