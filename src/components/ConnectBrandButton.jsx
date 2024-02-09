import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ConnectBrandButton({ icon }) {
  return (
    <div className="w-20 max-w-20 h-20 flex flex-row items-center justify-center text-5xl border-2 rounded-[16px] grow bg-pgray-900 text-pgray-100">
      <FontAwesomeIcon
        icon={
          icon == "LinkedIn"
            ? faLinkedinIn
            : icon == "Github"
            ? faGithub
            : faGithub
        }
      />
    </div>
  );
}

ConnectBrandButton.defaultProps = {};

export default ConnectBrandButton;
