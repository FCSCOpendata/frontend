import Carousel from '../_shared/carousel/icon_card/Carousel';

const TopicsCarousel: React.FC<any> = ({
  topics,
  active,
  topicOnClick,
  configs,
}) => {
  const items = topics.map((topic) => {
    const itemConfig = configs?.filter((el) => el.name == topic.name);
    const color = itemConfig[0]?.color;

    return {
      name: topic.name,
      title: topic.title || topic.display_name || topic.name,
      icon: {
        url: topic.logo_display_url || '/images/no_icon_topic.png',
        alt: `${topic.name}--topic`,
      },
      link: `/topic/${topic.name}`,
      color,
    };
  });

  return (
    <>
      <Carousel
        items={items}
        active={active}
        itemOnClick={topicOnClick}
        identifier="topics-carousel"
      />
    </>
  );
};

export default TopicsCarousel;
