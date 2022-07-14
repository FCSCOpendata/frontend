const ScrollIndicator: React.FC<{
  stops: {
    name: string;
  }[];
}> = ({ stops }) => {
  const active = 1;

  return (
    <>
      <div className="max-w-[60px]">
        <div className="flex justify-center flex-wrap flex-col w-16 relative">
          <img
            className="basis-full"
            src="/images/scroll_indicator_icon_1.svg"
            alt="Scroll indicator start"
            width={60}
          />
          <div className="basis-full h-[360px] flex justify-center relative my-3">
            <div className="h-full absolute flex flex-col justify-evenly w-full items-center border-[#333333] border-t-[1px] border-b-[1px] w-1">
              {stops.map((stop, index) => (
                <button
                  className={`rounded-full border-[1px] border-[#333333] w-[10px] h-[10px] bg-[#fff] ${
                    active == index ? 'w-[15px] h-[15px]' : ''
                  } flex justify-center items-center`}
                  key={index}
                >
                  {active == index && (
                    <div className="w-[9px] h-[9px] bg-[#22B373] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            <img
              src="/images/scroll_indicator_dashed_line.svg"
              alt="Dashed lines"
              height={100}
            />
          </div>
          <img
            className="basis-full"
            src="/images/scroll_indicator_icon_1.svg"
            alt="Scroll indicator end"
            width={60}
          />
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
