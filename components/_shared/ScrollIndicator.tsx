import { useEffect, useState } from 'react';
import { AR } from '../../hooks/locale';

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
    //  NOTE: stops should be ASC sorted
    const onScroll = () => {
      let i;
      for (i = stops.length - 1; i >= 0; i--) {
        const el = document.getElementById(stops[i].id);

        if (el) {
          const rect = el.getBoundingClientRect();
          const elTopPos = rect.top + window.scrollY;
          const threshold = window.innerHeight / 2;
          const thresholdedTopPos = elTopPos - threshold;

          if (window.scrollY >= thresholdedTopPos) {
            setActive(i);
            break;
          }
          setActive(0);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed ${AR(
          'left-5',
          'right-5'
        )} top-[50%] translate-y-[-50%] z-50 hidden lg:block`}
      >
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
                    aria-label={`Section ${index + 1}`}
                    className={`transition-all ease-in-out origin-center duration-100 rounded-full border-[1px] border-[#333333] w-[10px] h-[10px] bg-[#fff] ${
                      active == index ? 'scale-150' : ''
                    } flex justify-center items-center`}
                    key={index}
                    onClick={() => {
                      const el = document.getElementById(stop.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      setActive(index);
                    }}
                  >
                    <div
                      className={`transition-opacity ease-in-out duration-150 w-[6px] h-[6px] ${
                        active == index ? ' opacity-100' : 'opacity-0'
                      } bg-nav-underline rounded-full`}
                    ></div>
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
      </div>
    </>
  );
};

export default ScrollIndicator;
