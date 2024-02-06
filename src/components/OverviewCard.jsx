import SkillsItem from "./SkillsItem";

//TODO: Must create size options for responsive design

function OverviewCard({ heading, subheading, skillsList, bodyText }) {
  return (
    <div className="flex flex-col w-full p-12 bg-transparent border rounded-md mb-9 h-fit ">
      <div className="text-3xl font-bold font-display">{heading}</div>
      {subheading && (
        <div className="text-2xl font-bold mt-9 font-display">{subheading}</div>
      )}
      {skillsList && (
        <div className="flex flex-row flex-wrap w-full mt-9">
          {skillsList.map((skill, index) => (
            <div key={index} className="my-2 mr-2">
              <SkillsItem key={index} label={skill} type="light" />
            </div>
          ))}
        </div>
      )}
      <div className="font-sans mt-9">{bodyText}</div>
    </div>
  );
}

OverviewCard.defaultProps = {
  heading: "Heading",
  subheading: undefined,
  skillsList: undefined,
  bodyText: "body text",
};

export default OverviewCard;
