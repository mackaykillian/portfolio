import { useMediaQuery } from "react-responsive";

function AboutView() {
  const xsScreen = useMediaQuery({ minWidth: 0 });
  const smScreen = useMediaQuery({ minWidth: 640 });
  const mdScreen = useMediaQuery({ minWidth: 768 });
  const lgScreen = useMediaQuery({ minWidth: 1024 });
  const xlScreen = useMediaQuery({ minWidth: 1280 });
  const xxlScreen = useMediaQuery({ minWidth: 1536 });
  return (
    <div className="w-full h-fit bg-pgray-200">
      <div className="w-full">
        <div className="flex flex-row w-full h-fit">
          <div className="mx-4 grow md:px-8 lg:px-10">
            <div className="mt-32 mb-16 text-5xl font-bold font-display md:text-6xl lg:text-7x">
              About Me
            </div>
            <div className="flex flex-row mb-24">
              <div className="font-sans w-grow max-w-[600px] pr-8 sm:pr-0 text-sm sm:text-lg">
                Lorem ipsum dolor sit amet consectetur. Turpis leo praesent sit
                volutpat ut vestibulum non feugiat. Elementum elit consequat
                potenti amet non quisque scelerisque mi. Tristique quisque
                libero lorem sit quam pellentesque. Pharetra massa placerat
                lacus ultricies pulvinar pretium. Sit dictum mi leo.
              </div>
              {!smScreen && (
                <div className="bg-[url('./assets/picture-of-me.png')] min-w-[180px] h-[400px] bg-cover bg-center rounded-lg"></div>
              )}
            </div>
            <div className="flex flex-col space-y-12 pb-36">
              <div className="flex flex-col space-y-2">
                <div className="font-sans font-light text-md md:text-lg">
                  2023
                </div>
                <div className="text-3xl font-bold md:text-4xl font-display">
                  B.S. Computer Science
                </div>
                <div className="font-sans font-light text-md md:text-lg">
                  Utah Valley University
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="font-sans font-light text-md md:text-lg">
                  2023
                </div>
                <div className="text-3xl font-bold md:text-4xl font-display">
                  Certificate - AR in Marketing using Meta Spark
                </div>
                <div className="font-sans font-light text-md md:text-lg">
                  Meta (Coursera)
                </div>
              </div>
            </div>
          </div>
          {smScreen && (
            <div className="bg-[url('./assets/picture-of-me.png')] w-[400px] bg-cover bg-center"></div>
          )}
        </div>
      </div>
    </div>
  );
}

AboutView.defaultProps = {};

export default AboutView;
