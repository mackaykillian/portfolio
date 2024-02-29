import WorkTile from "../components/WorkTile"
import { useMediaQuery } from "react-responsive";

function WorksSection() {
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  return <div className="w-full h-fit py-20 sm:py-60">
    <WorkTile size={lgScreen ? 'lg' : 'sm'} />
  </div>
}

export default WorksSection
