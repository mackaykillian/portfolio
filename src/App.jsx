import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import SkillsItem from "./components/SkillsItem";

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
      <div>
        <div className="flex flex-row justify-between bg-green-400">
          <div>photo</div>
          <div>nav</div>
        </div>
        <div
          ref={introFrame}
          className="flex flex-col h-[60vh] md:h-[80vh] justify-center mx-[16px] md:mx-[32px] lg:mx-[40px]"
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
        <div id="overviewFrame" className="h-fit bg-pgray-100">
          <div className="mx-[16px] md:mx-[32px] lg:mx-[40px]">
            <div className="flex flex-row justify-end py-8">
              <div className="text-5xl font-bold font-display md:text-6xl lg:text-7x">
                What I do best
              </div>
            </div>
            <div id="cards-container" className="flex flex-col ">
              <div className="flex flex-col w-full p-12 bg-transparent border rounded-md mb-9 h-fit ">
                <div className="text-3xl font-bold font-display">
                  Frontend Development
                </div>
                <div className="mt-9">Skills</div>
                <div className="font-sans mt-9">
                  Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus
                  sit vitae pellentesque. Nunc porttitor montes sollicitudin sit
                  au1gue.
                </div>
              </div>
              <div className="flex flex-col w-full p-12 bg-transparent border rounded-md mb-9 h-fit ">
                <div className="text-3xl font-bold font-display">
                  AR & Spatial Computing
                </div>
                <div className="mt-9">
                  <SkillsItem label="skills item" />
                </div>
                <div className="font-sans mt-9">
                  Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus
                  sit vitae pellentesque. Nunc porttitor montes sollicitudin sit
                  au1gue.
                </div>
              </div>
              <div className="flex flex-col w-full p-12 bg-transparent border rounded-md mb-9 h-fit ">
                <div className="text-3xl font-bold font-display">
                  Rigorous Testing
                </div>
                <div className="mt-9">2+ years of experience in QA</div>
                <div className="font-sans mt-9">
                  Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus
                  sit vitae pellentesque. Nunc porttitor montes sollicitudin sit
                  au1gue.
                </div>
              </div>
              <div className="flex flex-row items-end justify-end h-24 p-4 rounded-md bg-pgray-900 mb-9">
                <div className="font-sans text-lg text-pgray-100">Resume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
