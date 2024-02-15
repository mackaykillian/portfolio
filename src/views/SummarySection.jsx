import Navigation from "../components/Navigation";

function SummarySection() {
  return (
    <div className="flex h-screen w-full flex-row">
      <div className="font-display text-[40px] font-black text-neutral-700 sm:text-[48px] xl:text-[60px]">
        <span className="text-neutral-100">Salt Lake City</span> based{" "}
        <span className="text-neutral-100">developer</span> crafting modern{" "}
        <span className="text-neutral-100">frontend</span> and{" "}
        <span className="text-neutral-100">XR</span> solutions
      </div>
    </div>
  );
}

SummarySection.defaultProps = {};

export default SummarySection;
