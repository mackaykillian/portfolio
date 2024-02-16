function IntroSection() {
  return (
    <div className="flex h-screen max-h-[70vh] w-full flex-col -space-y-10 sm:max-h-screen sm:space-y-0">
      <div className="font-display h-fit max-w-[480px] text-[52px] font-black leading-none text-neutral-900 sm:order-2 sm:pb-40 sm:text-[120px] lg:text-[150px] xl:text-[180px] dark:text-neutral-100">
        Creative Developer
      </div>
      <div className="flex h-[50vh] grow flex-row">
        <div className="grow"></div>
        <div className="bg-[url(assets/picture-of-me.png')] h-[40vh] max-h-[400px] w-[30vh] max-w-[300px] bg-neutral-500 bg-cover bg-center"></div>
        <div className="w-1/8"></div>
      </div>
      <div></div>
    </div>
  );
}

IntroSection.defaultProps = {};

export default IntroSection;
