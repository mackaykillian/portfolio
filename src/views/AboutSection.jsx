import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return <div className="w-full h-fit py-40 flex flex-col space-y-20 dark:text-neutral-100">
    <div className="text-[70px] sm:text-[78px] md:text-[84px] lg:text-[92px] font-display font-black">About Me</div>
    <div className="flex flex-col space-y-16 xl:flex-row xl:justify-between xl:space-y-0">
      <div className="w-full xl:w-2/3 ">
        <div className="max-w-[600px]">
          Lorem ipsum dolor sit amet consectetur. Rutrum amet ut quam libero.
          Egestas iaculis quis ullamcorper nunc morbi rutrum. Quam leo felis
          proin libero. Lorem in cras eu convallis condimentum. Auctor viverra
          urna turpis aenean.
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col space-y-10 xl:pl-3">
        <div className="flex flex-row space-x-6">
          <div className="pt-1">
            <FontAwesomeIcon icon={faCircleDot} />
          </div>
          <div className="font-display">
            <div className="text-[20px]">B.S. Computer Science</div>
            <div className="text-[12px]">Utah Valley University, 2023</div>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <div className="pt-1">
            <FontAwesomeIcon icon={faCircleDot} />
          </div>
          <div className="font-display">
            <div className="text-[20px]">Foundations of AR</div>
            <div className="text-[12px]">Meta (Coursera), 2023</div>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <div className="pt-1">
            <FontAwesomeIcon icon={faCircleDot} />
          </div>
          <div className="font-display">
            <div className="text-[20px]">AR in Marketing using Meta Spark</div>
            <div className="text-[12px]">Meta (Coursera), 2023</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
      <div className="bg-neutral-200 dark:bg-neutral-100 h-40 lg:grow">
        <div className="relative top-4 left-6 text-[32px] dark:text-neutral-900 text-neutral-800 font-display font-bold">LinkedIn</div>
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-100 h-40 lg:grow">
        <div className="relative top-4 left-6 text-[32px] dark:text-neutral-900 text-neutral-800 font-display font-bold">Github</div>
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-100 h-40 lg:grow">
        <div className="relative top-4 left-6 text-[32px] dark:text-neutral-900 text-neutral-800 font-display font-bold">Resume</div>
      </div>
    </div>
  </div>
}

export default AboutSection
