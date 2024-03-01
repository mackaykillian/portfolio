import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



function WorkTile({ size }) {
  return <>
    {size == 'lg' ? <div className="flex flex-row border-t border-b border-neutral-900 dark:border-neutral-300 p-8 space-x-10 max-w-[800px]">
      <div className="h-[400px]">
        <div className="w-[400px] h-[400px] bg-neutral-400"></div>
      </div>
      <div className="text-neutral-900 dark:text-neutral-200 flex flex-col justify-between h-[400px]">
        <div className="flex flex-col space-y-4">
          <div className="text-[32px] font-display font-black">Portfolio Project</div>
          <div className="font-display">Lorem ipsum dolor sit amet consectetur. Suspendisse enim aliquam phasellus proin dignissim. Dictum purus maecenas bibendum velit luctus id. In nec augue diam id dui non eget. Dis amet est ut quis </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900 dark:border-neutral-100">
            <div className="text-[18px]">Github</div>
            <FontAwesomeIcon icon={faArrowRight} size="" />
          </div>
          <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900 dark:border-neutral-100">
            <div className="text-[18px]">Project</div>
            <FontAwesomeIcon icon={faArrowRight} strokeWidth="2" />
          </div>
        </div>
      </div>
    </div> : <div className="flex flex-col space-y-10 border-t border-b border-neutral-900 dark:border-neutral-300 p-8 dark:text-neutral-100">
      <div>
        <div className="w-full h-[80vw] bg-neutral-400"></div>
      </div>
      <div className="text-neutral-900 dark:text-neutral-100 flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <div className="text-[32px] font-display font-black">Portfolio Project</div>
          <div className="font-display">Lorem ipsum dolor sit amet consectetur. Suspendisse enim aliquam phasellus proin dignissim. Dictum purus maecenas bibendum velit luctus id. In nec augue diam id dui non eget. Dis amet est ut quis </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900 dark:border-neutral-100">
            <div className="text-[18px]">Open Github</div>
            <FontAwesomeIcon icon={faArrowRight} size="" />
          </div>
          <div className="flex flex-row space-x-2 w-fit items-center px-4 py-2 border border-neutral-900 dark:border-neutral-100">
            <div className="text-[18px]">Open Project</div>
            <FontAwesomeIcon icon={faArrowRight} strokeWidth="2" />
          </div>
        </div>
      </div>
    </div>}
  </>

}

WorkTile.defaultProps = {

}

export default WorkTile
