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

export default function App() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  return (
    <div className="app">
      <div className="flex flex-col bg-neutral-900 px-6 sm:px-8 lg:flex-row lg:px-10 xl:px-20">
        <div className="w-full pb-4 pt-4 sm:pb-6 sm:pt-6 lg:w-3/12 lg:pb-0 lg:pt-16">
          {lgScreen ? <Navigation size="lg" /> : <Navigation size="sm" />}
        </div>
        <div className="mx-auto w-full pt-12 sm:w-10/12 lg:w-9/12 lg:pt-16">
          <SummarySection />
        </div>
      </div>
    </div>
  );
}
