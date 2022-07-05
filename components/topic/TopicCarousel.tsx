import TopicIcon from './TopicIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

const TopicCarousel: React.FC<any> = (props) => {
  const topics = props.topics;
  const active_index = props.active_index;

  return (
    <>
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 4,
          },
          620: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 6,
          },
          1000: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 10,
          },
        }}
      >
        {topics.map((topic, index) => (
          <SwiperSlide key={index}>
            <Link href={`/topic/${topic.name}`}>
              <a href={`/topic/${topic.name}`}>
                <TopicIcon topic={topic} active={active_index == index} />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopicCarousel;
