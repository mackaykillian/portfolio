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

  const navContainerStlye = {
    xs: "w-full",
    lg: "",
  };

  const layoutStyle = {
    xs: {
      padding: "px-6",
      flex: "flex flex-col",
      navWidth: "w-full",
      contentWidth: "w-full",
    },
    sm: {
      padding: "px-8",
      flex: "flex flex-col",
      navWidth: "w-full",
      contentWidth: "w-10/12",
    },
    md: {
      padding: "px-8",
      flex: "flex flex-col",
      navWidth: "w-full",
      contentWidth: "w-10/12",
    },
    lg: {
      padding: "px-10",
      flex: "flex flex-row",
      navWidth: "w-3/12",
      contentWidth: "w-9/12",
    },
    xl: {
      padding: "px-20",
      flex: "flex flex-row",
      navWidth: "w-3/12",
      contentWidth: "w-9/12",
    },
  };

  return (
    <div className="app">
      <div className="flex flex-col px-6 sm:px-8 lg:flex-row lg:px-10 xl:px-20">
        <div className="w-full bg-neutral-300 lg:w-3/12">
          <Navigation />
        </div>
        <div className="mx-auto w-full bg-neutral-600 sm:w-10/12 lg:w-9/12">
          <SummarySection />
        </div>
      </div>
    </div>
  );
}
