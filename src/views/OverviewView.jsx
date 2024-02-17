import { useMediaQuery } from "react-responsive";
import OverviewCard from "../components/OverviewCard";

const cardsData = [
  {
    heading: "Frontend Development",
    subheading: null,
    skillsList: [
      "React",
      "JS",
      "HTML",
      "CSS",
      "TypeScript",
      "Figma",
      "Tailwind",
    ],
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus sit vitae pellentesque. Nunc porttitor montes sollicitudin sit au1gue.",
  },
  {
    heading: "AR & Spatial Computing",
    subheading: null,
    skillsList: ["Meta Spark", "Blender"],
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus sit vitae pellentesque. Nunc porttitor montes sollicitudin sit au1gue.",
  },
  {
    heading: "Well tested code",
    subheading: "2+ years of experience in QA",
    skillsList: null,
    bodyText:
      "Lorem ipsum dolor sit amet consectetur. Sit congue ipsum netus sit vitae pellentesque. Nunc porttitor montes sollicitudin sit au1gue.",
  },
];

function OverviewView() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  const cardSize = smScreen ? "lg" : "sm";

  return (
    <div id="overviewFrame" className="h-fit bg-transparent">
      <div className="mx-4 md:mx-8 lg:mx-10">
        <div className="flex flex-row justify-end">
          <div className="font-display lg:text-7x mb-16 mt-32 text-5xl font-bold md:text-6xl">
            What I do best
          </div>
        </div>
        <div
          id="cards-container"
          className="mb-32 flex flex-col items-end space-y-8"
        >
          {cardsData.map(
            ({ bodyText, heading, skillsList, subheading }, index) => (
              <OverviewCard
                key={index}
                bodyText={bodyText}
                heading={heading}
                size={cardSize}
                skillsList={skillsList}
                subheading={subheading}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

OverviewView.defaultProps = {};

export default OverviewView;
