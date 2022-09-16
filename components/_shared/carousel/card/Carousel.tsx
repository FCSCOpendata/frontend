import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavButton from '../NavButton';
import { AR } from '../../../../hooks/locale';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Item {
  title: string;
  name: string;
  icon: {
    url: string;
    alt: string;
  };
  image: {
    url: string;
    alt: string;
  };
  link: string;
}

const Carousel: React.FC<{
  items: Item[];
  itemOnClick: (item: any) => any;
  color?: string;
}> = ({ items, itemOnClick, color }) => {
  const { locale } = useRouter();

  const prevEl = '.nav-prev-button';
  const nextEl = '.nav-next-button';
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      //  Changes the lang direction and updates
      swiper.changeLanguageDirection(AR('rtl', 'ltr', locale), false);

      //  Recreates navigation
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [locale]);

  let css;
  if (color) {
    css = `
    .swiper-bullet-active {
      background: ${color} !important;
    }`;
  }

  return (
    <>
      <div className="relative">
        <div className="absolute hidden lg:block top-[38%] left-[-1rem] md:left-0 z-50 nav-prev-button">
          <NavButton orientation="left" />
        </div>
        <div className=" absolute hidden lg:block top-[38%] right-[-1rem] md:right-0 z-50 nav-next-button">
          <NavButton orientation="right" />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(instance) => setSwiper(instance)}
          navigation={{
            prevEl: AR(nextEl, prevEl, locale) as string,
            nextEl: AR(prevEl, nextEl, locale) as string,
          }}
          pagination={{
            el: '.pagination',
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          }}
          spaceBetween={4}
          className="w-[96%] mb-6"
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
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  itemOnClick.call(this, item);
                }}
              >
                <Card title={item.title} image={item.image} icon={item.icon} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{css}</style>
        <div className="pagination text-center" />
      </div>
    </>
  );
};

export default Carousel;
