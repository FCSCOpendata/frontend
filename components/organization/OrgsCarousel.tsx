import Carousel from '../_shared/carousel/icon_card/Carousel';

const OrgsCarousel: React.FC<any> = ({ orgs, active, orgOnClick }) => {
  const items = orgs.map((org) => {
    return {
      name: org.name,
      title: org.title || org.display_url || org.name,
      icon: {
        url: org.logo_display_url || org.logo_url || '/images/no_icon_org.svg',
        alt: `${org.name}--topic`,
      },
      link: `/${org.name}`,
    };
  });

  return (
    <>
      <Carousel
        items={items}
        active={active}
        itemOnClick={orgOnClick}
        identifier="orgs-carousel"
      />
    </>
  );
};

export default OrgsCarousel;
