import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubtopicCard from './SubtopicCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperNavButton from './SwiperNavButton';

const SubtopicCarousel: React.FC<any> = (props: any) => {
  const subtopics = props.subtopics;
  const subtopicOnChange = props.subtopicChangeCallback;

  return (
    <>
      <div className="relative">
        <div
          className="
            absolute 
            hidden 
            lg:block 
            top-[38%] 
            left-[-1rem] 
            md:left-0
            z-50 
            nav-prev-button"
        >
          <SwiperNavButton orientation="left" />
        </div>
        <div
          className="
            absolute 
            hidden 
            lg:block 
            top-[38%] 
            right-[-1rem] 
            md:right-0
            z-50 
            nav-next-button"
        >
          <SwiperNavButton orientation="right" />
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
          {subtopics.map((subtopic, index) => (
            <SwiperSlide key={index}>
              <button
                className="w-full text-left"
                onClick={() => subtopicOnChange(index)}
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
