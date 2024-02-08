import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectTileButton({ icon, label }) {
  return (
    <div className="flex flex-row px-4 py-4 space-x-2 rounded-[16px] bg-pgray-900 text-pgray-100">
      {label && <div className="ml-1 font-sans text-2xl">{label}</div>}
      {icon && (
        <div className="flex flex-row items-center text-2xl">
          <FontAwesomeIcon icon={icon == "github" ? faGithub : faArrowRight} />
        </div>
      )}
    </div>
  );
}

ProjectTileButton.defaultProps = {
  icon: null,
  label: null,
};

export default ProjectTileButton;
