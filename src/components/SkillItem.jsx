import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  sm: "text-[16px]",
  lg: "text-[20px]",
};

function SkillItem({ size, label, logo }) {
  return (
    <div
      className={`flex w-fit flex-row space-x-2 rounded-full border-[1px] border-neutral-100 px-4 pb-2 pt-[6px] text-neutral-100 ${textStyle[size]}`}
    >
      <div className="">
        <FontAwesomeIcon icon={faCircleDot} />
      </div>
      <div>{label}</div>
    </div>
  );
}

SkillItem.defaultProps = {
  mode: "light",
  size: "sm",
};

export default SkillItem;
