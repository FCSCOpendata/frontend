import TopicIcon, { TopicIconProps } from './TopicIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

export interface TopicCarouselProps {
  topics: TopicIconProps[];
  topicChangeCallback: (topic: any, index: number) => any;
}

const TopicCarousel: React.FC<TopicCarouselProps> = (
  props: TopicCarouselProps
) => {
  const topics = props.topics;
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClick = (i) => {
    setActiveIdx(i);
    props.topicChangeCallback(topics[i], i);
  };

  return (
    <>
      <Swiper slidesPerView={10}>
        {topics.map((topic, index) => (
          <SwiperSlide key={index} onClick={() => handleClick(index)}>
            <TopicIcon
              display_name={topic.display_name}
              image_display_url={topic.image_display_url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopicCarousel;
