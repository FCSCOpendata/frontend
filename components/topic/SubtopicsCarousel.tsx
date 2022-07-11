import Carousel from '../_shared/carousel/card/Carousel';

const SubtopicsCarousel: React.FC<any> = ({ subtopics, subtopicOnClick }) => {
  const items = subtopics.map((subtopic) => {
    return {
      name: subtopic.name,
      title: subtopic.title || subtopic.display_url || subtopic.name,
      image: {
        url: 'https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png',
        alt: `${subtopic.name}--topic`,
      },
      icon: {
        url: subtopic.image_display_url,
        alt: `${subtopic.name}--topic`,
      },
      link: `/topic/${subtopic.name}`,
    };
  });

  return (
    <>
      <Carousel items={items} itemOnClick={subtopicOnClick} />
    </>
  );
};

export default SubtopicsCarousel;
