import IconCard from './IconCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { Navigation } from 'swiper';
import NavButton from '../NavButton';

interface Item {
  title: string;
  name: string;
  icon: {
    url: string;
    alt: string;
  };
  link: string;
}

interface CarouselProps {
  items: Item[];
  active: { name: string };
  itemOnClick: (item: any) => any;
  identifier: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  active,
  itemOnClick,
  identifier,
}) => {
  const [swiper, setSwiper] = useState(null);

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
        modules={[Navigation]}
        onSwiper={(instance) => setSwiper(instance)}
        breakpoints={{
          1: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          460: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          720: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1200: {
            slidesPerView: 10,
            slidesPerGroup: 10,
          },
        }}
        initialSlide={items.findIndex((item) => item.name == active.name)}
        //  As there are more than one slider on some pages
        //  it's needed to have different  identifiers  for
        //  each instance
        navigation={{
          prevEl: `.nav-prev-button${identifier ? '--' + identifier : ''}`,
          nextEl: `.nav-next-button${identifier ? '--' + identifier : ''}`,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <a
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
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
