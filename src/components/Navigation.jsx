import React, { useRef, useState } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import NavigationItem from "./NavigationItem";


function Navigation({ size, activeSection }) {
  const navContainer = useRef();
  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.to(`#item${activeSection}`, { scale: 1.15, x: 20, duration: 0.5, ease: "power3" });
      tl.to(`#item${activeSection}`, { scale: 1, x: 0, duration: 1 });

      let tl2 = gsap.timeline();
      tl2.to(`#itemX`, { scale: 1.15, x: -20, duration: 0.5, ease: "power3" });
      tl2.to(`#itemX`, { scale: 1, x: 0, duration: 1 });

    },
    { scope: navContainer, dependencies: [activeSection] }
  );
  return (
    <>
      {size == "lg" ? (
        <div ref={navContainer} className="flex flex-col space-y-10" id="navigation-lg">
          <div id="item1">
            <NavigationItem number="1" name="intro" state={activeSection == 1 ? "active" : "inactive"} />
          </div>
          <div id="item2">
            <NavigationItem number="2" name="summary" state={activeSection == 2 ? "active" : "inactive"} />
          </div>
          <div id="item3">
            <NavigationItem number="3" name="works" state={activeSection == 3 ? "active" : "inactive"} />
          </div>
          <div id="item4">
            <NavigationItem number="4" name="about" state={activeSection == 4 ? "active" : "inactive"} />
          </div>
        </div>
      ) : (
        <div ref={navContainer} className={`flex flex-col items-end h-6 space-y-2 overflow-hidden pr-2`} id="navigation-sm">
          <div id="itemX">
            <NavigationItem number={activeSection} name={activeSection == 1 ? "intro" : activeSection == 2 ? "summary" : activeSection == 3 ? "works" : "intro"} state="active" />
          </div>
        </div>
      )}
    </>
  );
}

Navigation.defaultProps = {
  size: "sm",
};
export default Navigation;
