import ConnectTile from "../components/ConnectTile";
import ConnectBrandButton from "../components/ConnectBrandButton";

function ConnectView() {
  return (
    <div className="bg-pgray-900 h-fit">
      <div className="flex flex-col p-6 space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
        <div className="grow">
          <ConnectTile />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:justify-between">
          <div className="flex flex-row space-x-4 h-fit">
            <ConnectBrandButton icon="LinkedIn" />
            <ConnectBrandButton icon="Github" />
          </div>
          <div className="font-sans text-sm text-pgray-300">
            Salt Lake City, USA <br /> Custom build using React and GSAP
          </div>
        </div>
      </div>
    </div>
  );
}

ConnectView.defaultProps = {};

export default ConnectView;
