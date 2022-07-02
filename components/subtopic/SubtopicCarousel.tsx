import { Swiper, SwiperSlide } from 'swiper/react';
import SubtopicCard from './SubtopicCard';

const SubtopicCarousel: React.FC = (props: any) => {
  const subtopics = props.subtopics;
  return (
    <>
      <Swiper slidesPerView={5}>
        {subtopics.map((subtopic, index) => (
          <SwiperSlide>
            <SubtopicCard subtopic={subtopic} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SubtopicCarousel;
