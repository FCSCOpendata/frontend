import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubtopicCard from './SubtopicCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SubtopicCarousel: React.FC = (props: any) => {
  const subtopics = props.subtopics;

  return (
    <>
      <Swiper
        slidesPerView={6}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          el: '.pagination',
          clickable: true,
          bulletClass: 'swiper-bullet',
          bulletActiveClass: 'swiper-bullet-active',
        }}
        spaceBetween={4}
        className="w-[98%] mb-6"
      >
        {subtopics.map((subtopic, index) => (
          <SwiperSlide key={index}>
            <SubtopicCard subtopic={subtopic} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination text-center" />
    </>
  );
};

export default SubtopicCarousel;
