import Carousel from '../_shared/carousel/icon_card/Carousel';

const OrgsCarousel: React.FC<any> = ({ orgs, active, orgOnClick }) => {
  const items = orgs.map((org) => {
    return {
      name: org.name,
      title: org.title || org.display_url || org.name,
      image: {
        url: org.logo_display_url || '/images/no_icon_org.svg',
        alt: `${org.name}--topic`,
      },
      link: `/${org.name}`,
    };
  });

  return (
    <>
      <Carousel items={items} active={active} itemOnClick={orgOnClick} />
    </>
  );
};

export default OrgsCarousel;
