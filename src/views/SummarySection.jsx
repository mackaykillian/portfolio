import Navigation from "../components/Navigation";

function SummarySection() {
  return (
    <div className="h-fit w-full bg-neutral-900 text-neutral-200">
      <Navigation size="lg" mode="dark" />
    </div>
  );
}

SummarySection.defaultProps = {};

export default SummarySection;
