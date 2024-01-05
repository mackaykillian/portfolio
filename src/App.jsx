import React, { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import SplitType from "split-type";

export default function App() {
  const container = useRef();
  const arrowblob = useRef();
  useGSAP(
    () => {
      gsap.from(".quick-up", { y: 80, stagger: 0.1 });
      gsap.from("#arrowblob", { y: -1000, ease: "bounce.out", duration: 1.5 });
    },
    { scope: container }
  );

  console.log(React.version);

  return (
    <div className="app">
      <div ref={container} className="relative flex flex-col h-screen page-one">
        <div className="flex flex-row justify-end flex-none pt-6 pb-6 pr-14 header">
          <div className="text-[32px] font-display quick-up">
            <span className="font-bold">MacKay</span>
            <span className="font-light">Killian</span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end flex-1 font-display">
          <div className="text-[250px] text-right leading-none font-medium quick-up">
            Creative
          </div>
          <div
            id="heading"
            className="text-[250px] text-right leading-none mb-[120px] font-medium quick-up"
          >
            Developer
          </div>
        </div>
        <div>
          <div className="absolute top-0 left-0 flex flex-row origin-left rotate-90 translate-x-[80px] translate-y-[30px]">
            <BriefcaseIcon className="w-9 h-9 text-black-500" />
            <div className="ml-4 font-sans text-[40px] leading-none">
              open to work
            </div>
          </div>
        </div>
        <div
          id="arrowblob"
          className="flex flex-row items-center justify-center w-[200px] h-[200px] bg-red-500 rounded-full absolute bottom-[120px] left-[200px]"
        >
          <div className="">a</div>
        </div>
      </div>
    </div>
  );
}
