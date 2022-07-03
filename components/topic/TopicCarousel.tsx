import TopicIcon, { TopicIconProps } from './TopicIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

const TopicCarousel: React.FC<any> = (props) => {
  const topics = props.topics;

  return (
    <>
      <Swiper slidesPerView={10}>
        {topics.map((topic, index) => (
          <SwiperSlide key={index}>
            <Link href={`/topic/${topic.name}`}>
              <a>
                <TopicIcon topic={topic} />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopicCarousel;
