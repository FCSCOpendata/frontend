import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FilterCarousel: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={4}
        navigation={true}
        className={'w-full'}
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default FilterCarousel;
