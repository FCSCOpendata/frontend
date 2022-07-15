import { useEffect, useState } from 'react';

interface image {
  url: string;
  alt: string;
}

const ScrollIndicator: React.FC<{
  //  The images should be parameters,
  //  as it depends on the page
  firstImage: image;
  lastImage: image;
  stops: {
    id: string;
  }[];
}> = ({ stops, firstImage, lastImage }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      console.log('[LAST POS]', window.scrollY);
      let i;
      for (i = 0; i < stops.length; i++) {
        const el = document.getElementById(stops[i].id);
        const rect = el.getBoundingClientRect();

        const elTopPosition = rect.top + window.scrollY;
        const elHeigth = el.offsetHeight;
        const threshold = elHeigth / 2;
        const elBottomPosition = elTopPosition + el.offsetHeight;

        if (
          window.scrollY >= elTopPosition - threshold &&
          window.scrollY < elBottomPosition - threshold
        ) {
          console.log('[EL POS]', elTopPosition);
          setActive(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="max-w-[60px]">
        <div className="flex justify-center flex-wrap flex-col w-16 relative">
          <img
            className="basis-full"
            src={firstImage.url}
            alt={firstImage.alt}
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
                  onClick={() => {
                    const el = document.getElementById(stop.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setActive(index);
                  }}
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
            src={lastImage.url}
            alt={lastImage.alt}
            width={60}
          />
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
