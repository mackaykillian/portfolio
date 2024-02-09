import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ConnectTile() {
  return (
    <div className="flex flex-col p-10 rounded-[16px] grow bg-pgray-700">
      <div className="text-4xl font-bold font-display text-pgray-100">
        Send me a message
      </div>
      <div className="flex flex-row">
        <input
          className="border-b-2 appearance-none grow bg-pgray-700 border-pgray-100"
          type="text"
          name="name"
        />
        <div className="text-pgray-100">
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}

ConnectTile.defaultProps = {};

export default ConnectTile;
