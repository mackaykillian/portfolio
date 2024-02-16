import { useMediaQuery } from "react-responsive";
import Navigation from "../components/Navigation";
import SkillItem from "../components/SkillItem";

function SummarySection() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  return (
    <div className="w-full h-fit">
      <div className="font-display mb-20 text-[40px] font-black text-neutral-400 sm:mb-40 sm:text-[48px] xl:text-[60px] dark:text-neutral-700">
        <span className="text-neutral-900 dark:text-neutral-100">
          Salt Lake City
        </span>{" "}
        based{" "}
        <span className="text-neutral-900 dark:text-neutral-100">
          developer
        </span>{" "}
        crafting modern{" "}
        <span className="text-neutral-900 dark:text-neutral-100">frontend</span>{" "}
        and <span className="text-neutral-900 dark:text-neutral-100">XR</span>{" "}
        solutions
      </div>
      <div className="pb-20 md:flex md:flex-row md:space-x-20">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <div className="mb-4 text-[14px] uppercase tracking-wide text-neutral-700 sm:mb-8 sm:text-[16px] dark:text-neutral-400">
            My Tools
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="mb-2 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="React"
                logo="react"
              />
            </div>
            <div className="mb-3 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="Tailwind"
                logo="react"
              />
            </div>
            <div className="mb-2 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="HTML"
                logo="react"
              />
            </div>
            <div className="mb-2 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="CSS"
                logo="react"
              />
            </div>
            <div className="mb-2 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="Meta Spark"
                logo="react"
              />
            </div>
            <div className="mb-2 mr-2">
              <SkillItem
                size={lgScreen ? "lg" : "sm"}
                label="Figma"
                logo="react"
              />
            </div>
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
