import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubtopicCard from './SubtopicCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SubtopicCarousel: React.FC = (props: any) => {
  const subtopics = props.subtopics;

  return (
    <>
      <Swiper
        slidesPerView={5}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {subtopics.map((subtopic, index) => (
          <SwiperSlide key={index}>
            <SubtopicCard subtopic={subtopic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SubtopicCarousel;
