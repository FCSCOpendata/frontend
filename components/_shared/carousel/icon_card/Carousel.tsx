import IconCard from './IconCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { Navigation } from 'swiper';
import NavButton from '../NavButton';
import { AR } from '../../../../hooks/locale';

interface Item {
  title: string;
  name: string;
  icon: {
    url: string;
    alt: string;
  };
  link: string;
  color: string | undefined;
}

interface CarouselProps {
  items: Item[];
  active: { name: string };
  itemOnClick: (item: any) => any;
  identifier: string;
  maxItems?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  active,
  itemOnClick,
  identifier,
  maxItems,
}) => {
  const prevEl = `.nav-prev-button${identifier ? '--' + identifier : ''}`;
  const nextEl = `.nav-next-button${identifier ? '--' + identifier : ''}`;
  const [swiper, setSwiper] = useState(null);

  if (!maxItems || maxItems < 8) maxItems = 10;

  return (
    <div className="group relative">
      {items.length > 10 && (
        <>
          <div
            className={`transition-all opacity-0 group-hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 ml-[-1.5rem] md:left-0 z-50 nav-prev-button${
              identifier ? '--' + identifier : ''
            }`}
          >
            <NavButton orientation="left" />
          </div>
          <div
            className={`transition-all opacity-0 group-hover:opacity-100  absolute hidden lg:block top-[50%] -translate-y-2/4 mr-[-1.5rem] md:right-0 z-50 nav-next-button${
              identifier ? '--' + identifier : ''
            }`}
          >
            <NavButton orientation="right" />
          </div>
        </>
      )}
      <Swiper
        dir={`${AR('rtl', 'ltr')}`}
        modules={[Navigation]}
        onSwiper={(instance) => setSwiper(instance)}
        breakpoints={{
          1: {
            slidesPerView: maxItems - 7,
            slidesPerGroup: maxItems - 7,
          },
          460: {
            slidesPerView: maxItems - 6,
            slidesPerGroup: maxItems - 6,
          },
          720: {
            slidesPerView: maxItems - 4,
            slidesPerGroup: maxItems - 4,
          },
          1200: {
            slidesPerView: maxItems,
            slidesPerGroup: maxItems,
          },
        }}
        initialSlide={items.findIndex((item) => item.name == active.name)}
        //  As there are more than one slider on some pages
        //  it's needed to have different  identifiers  for
        //  each instance
        navigation={{
          prevEl: AR(nextEl, prevEl) as string,
          nextEl: AR(prevEl, nextEl) as string,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              title={item.title}
              href={item.link}
              onClick={(e) => {
                const slidesPerView = swiper.params.slidesPerView;
                const currentSlide = index; //  or swiper.clickedIndex
                const firstVisibleSlide = swiper.realIndex;
                const lastVisibleSlide = Math.floor(
                  firstVisibleSlide + slidesPerView
                );

                if (currentSlide >= lastVisibleSlide) {
                  swiper.slideTo(firstVisibleSlide + 1);
                } else if (currentSlide < firstVisibleSlide) {
                  swiper.slideTo(firstVisibleSlide - 1);
                }

                e.preventDefault();
                itemOnClick.call(this, item);
              }}
            >
              <IconCard
                title={item.title}
                icon={item.icon}
                isActive={item.name == active?.name}
                color={item.color}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
