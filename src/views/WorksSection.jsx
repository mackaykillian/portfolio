import WorkTile from "../components/WorkTile"
import { useMediaQuery } from "react-responsive";

function WorksSection() {
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  return <div className="w-full h-fit py-20 flex flex-col space-y-20 dark:text-neutral-100">
    <div className="text-[70px] sm:text-[78px] md:text-[84px] lg:text-[92px] font-display font-black text-right">Selected Works</div>
    <WorkTile size={lgScreen ? 'lg' : 'sm'} />
  </div>
}

export default WorksSection
