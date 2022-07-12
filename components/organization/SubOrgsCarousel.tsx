import Carousel from '../_shared/carousel/card/Carousel';

const SubOrgsCarousel: React.FC<any> = ({ orgs, orgOnClick }) => {
  const items = orgs.map((org) => {
    return {
      name: org.name,
      title: org.title || org.display_url || org.name,
      image: {
        url: 'https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png',
        alt: `${org.name}--organization`,
      },
      icon: {
        url: org.image_display_url,
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
