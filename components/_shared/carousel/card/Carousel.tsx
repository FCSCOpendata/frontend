import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavButton from '../NavButton';

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
}> = ({ items, itemOnClick }) => {
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
          navigation={{
            prevEl: '.nav-prev-button',
            nextEl: '.nav-next-button',
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
        <div className="pagination text-center" />
      </div>
    </>
  );
};

export default Carousel;
