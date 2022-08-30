import { Swiper } from 'swiper/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AR } from '../../../hooks/locale';

const FilterCarousel: React.FC<{}> = ({ children }) => {
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
      >
        {children}
      </Swiper>
    </>
  );
};

export default FilterCarousel;
