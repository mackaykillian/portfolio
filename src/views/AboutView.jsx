import { useMediaQuery } from "react-responsive";

function AboutView() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });
  return (
    <div className="h-fit bg-pgray-200">
      <div className="">
        <div className="flex flex-row h-[1000px]">
          <div className="mx-4 grow md:px-8 lg:px-10">
            <div className="mt-32 mb-16 text-5xl font-bold font-display md:text-6xl lg:text-7x">
              About Me
            </div>
            <div className="max-w-[600px] mb-24">
              Lorem ipsum dolor sit amet consectetur. Turpis leo praesent sit
              volutpat ut vestibulum non feugiat. Elementum elit consequat
              potenti amet non quisque scelerisque mi. Tristique quisque libero
              lorem sit quam pellentesque. Pharetra massa placerat lacus
              ultricies pulvinar pretium. Sit dictum mi leo.
            </div>
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-2">
                <div className="font-sans text-sm md:text-lg">2023</div>
                <div className="text-xl font-bold sm:text-2xl md:text-3xl font-display">
                  B.S. Computer Science
                </div>
                <div className="font-sans text-sm sm:text-lg">
                  Utah Valley University
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="font-sans text-sm md:text-lg">2023</div>
                <div className="text-xl font-bold sm:text-2xl md:text-3xl font-display">
                  AR Developer Professional Certificate
                </div>
                <div className="font-sans text-sm sm:text-lg">
                  Meta (Coursera)
                </div>
              </div>
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
