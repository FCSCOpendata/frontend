import Carousel from '../_shared/carousel/card/Carousel';

const SubtopicsCarousel: React.FC<any> = ({ subtopics, subtopicOnClick, color }) => {
  const items = subtopics.map((subtopic) => {
    return {
      name: subtopic.name,
      title: subtopic.title || subtopic.display_url || subtopic.name,
      image: {
        url:
          subtopic.image_display_url ||
          subtopic.image_url ||
          '/images/topics/topic-1.png',
        alt: `${subtopic.name}--topic`,
      },
      icon: {
        url: subtopic.logo_display_url || subtopic.logo_url,
        alt: `${subtopic.name}--topic`,
      },
      link: `/topic/${subtopic.name}`,
    };
  });

  return (
    <>
      <Carousel color={color} items={items} itemOnClick={subtopicOnClick} />
    </>
  );
};

export default SubtopicsCarousel;
