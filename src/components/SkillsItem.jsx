function SkillsItem({ label, type }) {
  const typeStyle =
    type == "dark"
      ? "text-pgray-100 bg-pgray-700"
      : "text-pgray-900 bg-pgray-200";
  return (
    <div
      className={`px-[10px] py-[6px] font-semibold uppercase text-pgray-100 bg-pgray-700 font-display w-fit rounded-full ${typeStyle}`}
    >
      {label}
    </div>
  );
}

SkillsItem.defaultProps = {
  label: "skills item",
  type: "light",
};

export default SkillsItem;
