import { useMediaQuery } from "react-responsive";
import React, { useRef, useState } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

import Navigation from "../components/Navigation";
import SkillItem from "../components/SkillItem";

function SummarySection() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  const container = useRef();
  const skillList = ["React", "Tailwind", "HTML", "CSS", "Meta Spark", "Figma"]

  useGSAP(() => {
    let ptl = gsap.timeline({ repeat: -1 });
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
      let tl = gsap.timeline();
      tl.to(item, {
        scale: 1.1,
        fontWeight: "700",
        duration: 0.2,
        ease: "sine.in",
        onStart: () => {
          item.classList.replace('dark:text-neutral-100', 'dark:text-neutral-800')
          item.classList.add('bg-neutral-100')
        }
      })
      tl.to(item, {
        scale: 1,
        fontWeight: "500",
        duration: 0.3,
        ease: "sine.out",
        onComplete: () => {
          item.classList.replace('dark:text-neutral-800', 'dark:text-neutral-100')
          item.classList.remove('bg-neutral-100')
        }
      }, 1.5)
      ptl.add(tl, ">0.5")
    })
    ptl.resume()
  }, { scope: container })

  return (
    <div ref={container} className="w-full h-fit py-20 sm:py-60">
      <div className="font-display mb-20 text-[40px] font-black text-neutral-400 sm:mb-40 sm:text-[48px] xl:text-[60px] dark:text-neutral-700 ">
        <span className="text-neutral-900 dark:text-neutral-100">
          Developer
        </span>{" "}
        based in {" "}
        <span className="text-neutral-900 dark:text-neutral-100">
          SLC
        </span>{" "}
        crafting modern{" "}
        <span className="text-neutral-900 dark:text-neutral-100">frontend</span>{" "}
        and <span className="text-neutral-900 dark:text-neutral-100">XR</span>{" "}
        solutions
      </div>
      <div className="md:flex md:flex-row md:space-x-20">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <div className="mb-4 text-[14px] uppercase tracking-wide text-neutral-700 sm:mb-8 sm:text-[16px] dark:text-neutral-400">
            My Tools
          </div>
          <div className="flex flex-row flex-wrap">
            {skillList.map((skill, index) => <div key={index} className="mb-4 mr-4 item text-neutral-800 dark:text-neutral-100 rounded-full transition ease-in">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label={skill}
                logo="react"
              />
            </div>)}

          </div>
        </div>
        <div className="font-display text-neutral-500 md:w-1/3 dark:text-neutral-500">
          Lorem ipsum dolor sit amet consectetur. Rutrum amet ut quam libero.
          Egestas iaculis quis ullamcorper nunc morbi rutrum. Quam leo felis
          proin libero. Lorem in cras eu convallis condimentum. Auctor viverra
          urna turpis aenean.
        </div>
      </div>
    </div>
  );
}

SummarySection.defaultProps = {};

export default SummarySection;
