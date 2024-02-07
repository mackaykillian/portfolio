function SkillsItem({ label, type, size }) {
  const baseStyle =
    "px-[10px] py-[6px] font-semibold font-diaplay uppercase w-fit rounded-full";
  const typeStyle =
    type == "dark"
      ? "text-pgray-100 bg-pgray-700"
      : "text-pgray-900 bg-pgray-200";
  const sizeStyle = size == "sm" ? "text-[16px]" : "text-[20px]";
  return (
    <div className={`${baseStyle} ${typeStyle} ${sizeStyle}`}>{label}</div>
  );
}

SkillsItem.defaultProps = {
  label: "skills item",
  type: "light",
  size: "sm",
};

export default SkillsItem;
