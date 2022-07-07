import TopicIcon from './TopicIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

const TopicCarousel: React.FC<any> = (props) => {
  const topics = props.topics;
  const activeTopic = props.activeTopic;

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
      >
        {topics.map((topic, index) => (
          <SwiperSlide key={index}>
            <Link href={`/topic/${topic.name}`}>
              <a href={`/topic/${topic.name}`}>
                <TopicIcon
                  topic={topic}
                  active={topic.name == activeTopic?.name}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopicCarousel;
