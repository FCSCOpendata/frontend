import TopicCard from './TopicCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { AR } from '../../../hooks/locale';
import NavButton from '../../_shared/carousel/NavButton';
import { Navigation } from 'swiper';

interface Item {
  id: any;
  display_name: string;
  title: string;
  name: string;
}

interface CarouselProps {
  items: Item[];
  active: { name: string };
  currentIndex: number;
  itemOnClick: (item: any) => any;
  identifier?: string;
}

const TopicFilterCarousel: React.FC<CarouselProps> = ({
  items,
  active,
  itemOnClick,
  currentIndex,
  identifier,
}) => {
  const [swiper, setSwiper] = useState(null);
  const prevEl = `.nav-prev-button${identifier ? '--' + identifier : ''}`;
  const nextEl = `.nav-next-button${identifier ? '--' + identifier : ''}`;

  return (
    <>
      <div className="relative group">
        <div
          className={`transition-all opacity-0 group-hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 ml-[-1.5rem] md:left-0 z-50 nav-prev-button${
            identifier ? '--' + identifier : ''
          }`}
        >
          <NavButton size="small" orientation="left" />
        </div>
        <div
          className={`transition-all opacity-0 group-hover:opacity-100  absolute hidden lg:block top-[50%] -translate-y-2/4 mr-[-1.5rem] md:right-0 z-50 nav-next-button${
            identifier ? '--' + identifier : ''
          }`}
        >
          <NavButton size="small" orientation="right" />
        </div>
        <Swiper
          dir={`${AR('rtl', 'ltr')}`}
          modules={[Navigation]}
          onSwiper={(instance) => setSwiper(instance)}
          breakpoints={{
            1: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            460: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            720: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1280: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          initialSlide={items.findIndex((item) => item.name == active.name)}
          navigation={{
            prevEl: AR(nextEl, prevEl) as string,
            nextEl: AR(prevEl, nextEl) as string,
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <button
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
                  itemOnClick.call(this, index);
                }}
              >
                <TopicCard
                  index={index}
                  topic={item}
                  currentIndex={currentIndex}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopicFilterCarousel;
