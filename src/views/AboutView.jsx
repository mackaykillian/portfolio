function AboutView() {
  return (
    <div className="h-fit bg-pgray-200">
      <div className="">
        <div className="flex flex-row h-[1000px]">
          <div className="mx-4 grow md:px-8 lg:px-10">
            <div className="mt-32 mb-16 text-5xl font-bold font-display md:text-6xl lg:text-7x">
              About Me
            </div>
            <div className="max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur. Turpis leo praesent sit
              volutpat ut vestibulum non feugiat. Elementum elit consequat
              potenti amet non quisque scelerisque mi. Tristique quisque libero
              lorem sit quam pellentesque. Pharetra massa placerat lacus
              ultricies pulvinar pretium. Sit dictum mi leo.
            </div>
          </div>
          <div className="bg-[url('./assets/picture-of-me.png')] w-[400px] bg-cover">
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

AboutView.defaultProps = {};

export default AboutView;