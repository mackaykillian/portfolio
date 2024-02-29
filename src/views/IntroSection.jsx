import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

function IntroSection() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true, reversed: true });
      tl.to('#profile-pic', {
        width: 75,
        height: 75,
        position: "fixed",
        top: '72px',
        right: '16px',
        borderRadius: '16px',
        duration: 1
      });
    },
    {}
  );
  return (
    <div className="flex h-screen w-full flex-col content-between justify-between">
      <div className="flex flex-col space-y-4">
        <div className="bg-[url('./assets/picture-of-me.png')] w-[20vh] h-[30vh] bg-cover">image</div>
        <div className="border-t-[1px] w-full font-display italic text-[2vh] font-light">Hi, I'm MacKay Killian</div>
      </div>
      <div className="flex flex-col items-end font-display font-black text-[6vh] sm:text-[8vh] md:text-[9vh] leading-none pb-40 text-neutral-900 dark:text-neutral-100">
        <div>Creative</div>
        <div>Developer</div>
        <div><span className="italic">&</span> Design</div>
        <div>Enthusiast</div>
      </div>

    </div>
  );
}

IntroSection.defaultProps = {};

export default IntroSection;
