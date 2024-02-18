import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  sm: "text-[16px]",
  lg: "text-[20px]",
};

function SkillItem({ size, label }) {
  return (
    <div
      className={`flex w-fit flex-row space-x-2 rounded-full border-[1px] border-neutral-800 dark:border-neutral-100 px-4 pb-2 pt-[6px] ${textStyle[size]}`}
    >
      <div className="">
        <FontAwesomeIcon icon={faCircleDot} />
      </div>
      <div>{label}</div>
    </div>
  );
}

SkillItem.defaultProps = {
  size: "sm",
};

export default SkillItem;
