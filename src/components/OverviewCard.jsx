import SkillsItem from "./SkillsItem";

//TODO: Must create size options for responsive design

function OverviewCard({ heading, subheading, skillsList, bodyText, size }) {
  return size == "sm" ? (
    <div className="flex flex-col w-full p-12 bg-transparent border rounded-md h-fit max-w-[400px] bg-pgray-500">
      <div className="text-[28px] font-bold font-display">{heading}</div>
      {subheading && (
        <div className="text-[28px] font-bold mt-6 font-display">
          {subheading}
        </div>
      )}
      {skillsList && (
        <div className="flex flex-row flex-wrap w-full mt-6">
          {skillsList.map((skill, index) => (
            <div key={index} className="my-2 mr-2">
              <SkillsItem key={index} label={skill} type="light" size="sm" />
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 font-sans text-md">{bodyText}</div>
    </div>
  ) : (
    <div className="flex flex-col w-full p-16 bg-transparent border rounded-md h-fit max-w-[520px]">
      <div className="font-bold text-[36px] font-display">{heading}</div>
      {subheading && (
        <div className="text-[36px] font-bold mt-10 font-display">
          {subheading}
        </div>
      )}
      {skillsList && (
        <div className="flex flex-row flex-wrap w-full mt-10">
          {skillsList.map((skill, index) => (
            <div key={index} className="my-2 mr-2">
              <SkillsItem key={index} label={skill} type="light" size="lg" />
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 font-sans text-xl">{bodyText}</div>
    </div>
  );
}

OverviewCard.defaultProps = {
  heading: "Heading",
  subheading: undefined,
  skillsList: undefined,
  bodyText: "body text",
  size: "sm",
};

export default OverviewCard;
