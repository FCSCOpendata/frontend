import IconCard from './IconCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Item {
  title: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  link: string;
}

interface CarouselProps {
  items: Item[];
  active: { name: string };
  itemOnClick: (item: any) => any;
}

const Carousel: React.FC<CarouselProps> = ({ items, active, itemOnClick }) => {
  return (
    <>
      <Swiper
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
            slidesPerView: 8.5,
          },
          1280: {
            slidesPerView: 9.5,
          },
        }}
        initialSlide={items.findIndex((item) => item.name == active.name)}
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
              <IconCard
                title={item.title}
                image={item.image}
                isActive={item.name == active?.name}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
