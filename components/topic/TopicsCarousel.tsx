import Carousel from '../_shared/carousel/icon_card/Carousel';

const TopicsCarousel: React.FC<any> = ({ topics, active, topicOnClick }) => {
  const items = topics.map((topic) => {
    return {
      name: topic.name,
      title: topic.title || topic.display_name || topic.name,
      image: {
        url: topic.logo_display_url,
        alt: `${topic.name}--topic`,
      },
      link: `/topic/${topic.name}`,
    };
  });

  return (
    <>
      <Carousel items={items} active={active} itemOnClick={topicOnClick} />
    </>
  );
};

export default TopicsCarousel;
