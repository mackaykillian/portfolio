import ProjectTileButton from "./ProjectTileButton";

function ProjectTile({ size }) {
  const sizeStyle =
    size == "sm"
      ? "min-w-[400px] min-h-[400px]"
      : size == "md"
      ? "min-w-[600px] min-h-[600px]"
      : "min-w-[750px] min-h-[750px]";
  const buttonFlexDirection =
    size == "sm" ? "flex-col space-y-4" : "flex-row space-x-4";

  return (
    <div
      className={`${sizeStyle} bg-pgray-300 rounded-[24px] flex flex-row items-end justify-end p-10`}
    >
      <div className={`flex ${buttonFlexDirection}`}>
        {size == "sm" ? (
          <>
            <ProjectTileButton icon="arrow" />
            <ProjectTileButton icon="github" />
          </>
        ) : (
          <>
            <ProjectTileButton label={`Open Project`} icon="arrow" />
            <ProjectTileButton label={`Open Github`} icon="arrow" />
          </>
        )}
      </div>
    </div>
  );
}

ProjectTile.defaultProps = {};

export default ProjectTile;
