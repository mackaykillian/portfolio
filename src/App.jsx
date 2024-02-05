import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

export default function App() {
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
      <div className="mx-[16px]">
        <div className="flex flex-row justify-between bg-green-400">
          <div>photo</div>
          <div>nav</div>
        </div>
        <div
          ref={introFrame}
          className="flex flex-col h-[60vh] md:h-[80vh]  justify-center bg-blue-100"
        >
          <div className="mt-[20vh] font-bold uppercase font-display text-[13vw] leading-[13vw] xl:text-[180px] xl:leading-[180px]">
            <div id="hero-text">
              <div>
                <span className="quick-bold">C</span>
                <span className="quick-bold">r</span>
                <span className="quick-bold">e</span>
                <span className="quick-bold">a</span>
                <span className="quick-bold">t</span>
                <span className="quick-bold">i</span>
                <span className="quick-bold">v</span>
                <span className="quick-bold">e</span>
              </div>
              <div>
                <span className="quick-bold">D</span>
                <span className="quick-bold">e</span>
                <span className="quick-bold">v</span>
                <span className="quick-bold">e</span>
                <span className="quick-bold">l</span>
                <span className="quick-bold">o</span>
                <span className="quick-bold">p</span>
                <span className="quick-bold">e</span>
                <span className="quick-bold">r</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
