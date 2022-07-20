import Carousel from '../_shared/carousel/card/Carousel';

const SubOrgsCarousel: React.FC<any> = ({ orgs, orgOnClick }) => {
  const items = orgs.map((org) => {
    return {
      name: org.name,
      title: org.title || org.display_url || org.name,
      image: {
        url:
          org.image_display_url ||
          org.image_url ||
          '/images/topics/topic-2.png',
        alt: `${org.name}--organization`,
      },
      icon: {
        url: org.logo_display_url || org.logo_url,
        alt: `${org.name}--organization`,
      },
      link: `@${org.name}`,
    };
  });

  return (
    <>
      <Carousel items={items} itemOnClick={orgOnClick} />
    </>
  );
};

export default SubOrgsCarousel;
