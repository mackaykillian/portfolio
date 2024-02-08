function ProjectTileButton({ label, icon }) {
  return (
    <div className="flex flex-row px-4 py-2 space-x-2 rounded-[16px] bg-pgray-900 text-pgray-100">
      <div className="font-sans text-2xl">{label}</div>
      <div>{icon}</div>
    </div>
  );
}

ProjectTileButton.defaultProps = {};

export default ProjectTileButton;
