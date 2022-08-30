import TopicCard from './TopicCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { AR } from '../../../hooks/locale';

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
}

const TopicFilterCarousel: React.FC<CarouselProps> = ({
  items,
  active,
  itemOnClick,
  currentIndex,
}) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <Swiper
        dir={`${AR('rtl', 'ltr')}`}
        onSwiper={(instance) => setSwiper(instance)}
        breakpoints={{
          1: {
            slidesPerView: 2.5,
          },
          460: {
            slidesPerView: 3.5,
          },
          720: {
            slidesPerView: 5.5,
          },
          1200: {
            slidesPerView: 5.5,
          },
          1280: {
            slidesPerView: 6.5,
          },
        }}
        initialSlide={items.findIndex((item) => item.name == active.name)}
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
    </>
  );
};

export default TopicFilterCarousel;
