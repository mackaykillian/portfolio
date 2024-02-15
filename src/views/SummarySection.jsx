import NavigationItem from "../components/NavigationItem";

function SummarySection() {
  return (
    <div className="h-20 w-full bg-neutral-900 text-neutral-200">
      <NavigationItem size="lg" mode="dark" />
    </div>
  );
}

SummarySection.defaultProps = {};

export default SummarySection;
