import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubtopicCard from './SubtopicCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavButton from './SwiperNavButton';

const SubtopicCarousel: React.FC = (props: any) => {
  const subtopics = props.subtopics;
  const subtopicOnChange = props.subtopicChangeCallback;

  return (
    <>
      <div className="relative">
        <div className="absolute top-[40%] left-1 z-50 nav-prev-button">
          <SwiperNavButton />
        </div>
        <div className="absolute top-[40%] right-1 z-50 nav-next-button">
          <SwiperNavButton orientation="right" />
        </div>

        <Swiper
          slidesPerView={6}
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
          className="w-[98%] mb-6"
        >
          {subtopics.map((subtopic, index) => (
            <SwiperSlide key={index}>
              <button
                className="w-full text-left"
                onClick={() => subtopicOnChange(subtopic)}
              >
                <SubtopicCard subtopic={subtopic} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination text-center" />
      </div>
    </>
  );
};

export default SubtopicCarousel;
