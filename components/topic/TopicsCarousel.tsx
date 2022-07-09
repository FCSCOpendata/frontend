import Carousel from '../_shared/carousel/icon_card/Carousel';

const TopicsCarousel: React.FC<any> = ({ topics, active }) => {
  const items = topics.map((topic) => {
    return {
      name: topic.name,
      title: topic.title || topic.display_url || topic.name,
      image: {
        url: topic.image_display_url,
        alt: `${topic.name}--topic`,
      },
      link: `/topic/${topic.name}`,
    };
  });

  return (
    <>
      <Carousel items={items} active={active} />
    </>
  );
};

export default TopicsCarousel;
