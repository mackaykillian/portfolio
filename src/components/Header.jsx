function Header() {
  return (
    <div className="fixed top-0 w-full h-24 py-4 bg-pgray-100">
      <div className="flex flex-row justify-between mx-4 md:mx-8 lg:mx-10">
        <div className="flex flex-row space-x-2">
          <div className="w-16 h-16 rounded-[16px] bg-[url('./assets/picture-of-me-sm.png')] bg-top"></div>
          <div className="w-16 h-16 bg-pgray-700 rounded-[16px]"></div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="w-32 h-16 bg-pgray-200 rounded-[16px] flex justify-start items-end px-3 py-2">
            <p className="font-sans text-xl font-bold"> Intro</p>
          </div>
          <div className="w-32 h-16 bg-pgray-200 rounded-[16px] flex justify-start items-end px-3 py-2">
            <p className="font-sans text-xl font-bold"> Overview</p>
          </div>
          <div className="w-32 h-16 bg-pgray-200 rounded-[16px] flex justify-start items-end px-3 py-2">
            <p className="font-sans text-xl font-bold"> Projects</p>
          </div>
          <div className="w-32 h-16 bg-pgray-200 rounded-[16px] flex justify-start items-end px-3 py-2">
            <p className="font-sans text-xl font-bold"> About Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {};

export default Header;
