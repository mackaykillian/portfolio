import { useMediaQuery } from "react-responsive";
import ProjectTile from "../components/ProjectTile";

function ProjectsView() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });

  return (
    <div className="bg-pgray-900 h-fit">
      <div className="mx-4 md:mx-8 lg:mx-10">
        <div className="py-32">
          <div className="mb-24 text-5xl font-bold uppercase font-display md:text-6xl lg:text-7x text-pgray-100">
            Projects
          </div>
          <div className="flex flex-col w-full space-y-6 sm:flex-row sm:overflow-scroll sm:space-x-10 sm:space-y-0">
            {lgScreen ? (
              <>
                <ProjectTile size="lg" />
                <ProjectTile size="lg" />
                <ProjectTile size="lg" />
              </>
            ) : smScreen ? (
              <>
                <ProjectTile size="md" />
                <ProjectTile size="md" />
                <ProjectTile size="md" />
              </>
            ) : (
              <>
                <ProjectTile size="sm" />
                <ProjectTile size="sm" />
                <ProjectTile size="sm" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsView.defaultProps = {};

export default ProjectsView;
