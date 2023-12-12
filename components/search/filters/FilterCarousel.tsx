import { Swiper } from 'swiper/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AR } from '../../../hooks/locale';
import { Navigation } from 'swiper';

const FilterCarousel: React.FC<{ identifier: string }> = ({
  children,
  identifier,
}) => {
  const prevEl = `.nav-prev-button${identifier ? '--' + identifier : ''}`;
  const nextEl = `.nav-next-button${identifier ? '--' + identifier : ''}`;
  const [swiper, setSwiper] = useState(null);
  return (
    <>
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
        navigation={{
          prevEl: AR(nextEl, prevEl) as string,
          nextEl: AR(prevEl, nextEl) as string,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default FilterCarousel;
