import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function WorkTile() {
  return <div className="flex flex-col space-y-10 border-t border-b border-neutral-900 p-8">
    <div>
      <div className="w-full h-[80vw] bg-neutral-400"></div>
    </div>
    <div className="text-neutral-900 flex flex-col space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="text-[32px] font-display font-black">Portfolio Project</div>
        <div className="font-display">Lorem ipsum dolor sit amet consectetur. Suspendisse enim aliquam phasellus proin dignissim. Dictum purus maecenas bibendum velit luctus id. In nec augue diam id dui non eget. Dis amet est ut quis </div>
      </div>
      <div className="flex flex-row space-x-3">
        <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900">
          <div className="text-[18px]">Open Github</div>
          <FontAwesomeIcon icon={faArrowRight} size="" />
        </div>
        <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900">
          <div className="text-[18px]">Open Project</div>
          <FontAwesomeIcon icon={faArrowRight} strokeWidth="2" />
        </div>
      </div>
    </div>
  </div>
}

WorkTile.defaultProps = {

}

export default WorkTile
