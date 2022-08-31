import ImageHeader from '../_shared/image_header/ImageHeader';

const Header: React.FC<any> = ({ topic, datasetsCount, color }) => {
  const icon = {
    url: topic.logo_display_url || '/images/no_icon_topic.png',
    alt: `${topic.name}---topic`,
  };
  const image = {
    url: topic.image_display_url || '/images/dubai_placeholder.png',
    alt: `${topic.name}---topic`,
  };
  const description = topic.description;

  const datasetsCountText = isNaN(datasetsCount) ? 0 : datasetsCount;
  const badgeText = `${datasetsCount} dataset${
    datasetsCountText == 1 ? '' : 's'
  }`;

  return (
    <>
      <ImageHeader
        title={topic.title}
        icon={icon}
        badgeText={badgeText}
        image={image}
        color={color}
      >
        {description}
      </ImageHeader>
    </>
  );
};

export default Header;
