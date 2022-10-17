import useTranslation from 'next-translate/useTranslation';
import ImageHeader from '../_shared/image_header/ImageHeader';

const Header: React.FC<any> = ({
  topic,
  datasetsCount,
  color,
  badgeOnClick,
}) => {
  const { t } = useTranslation('common');

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
  const badgeText = `${datasetsCount} ${
    datasetsCountText == 1 ? t('dataset-single') : t('dataset-plural')
  }`;

  return (
    <>
      <ImageHeader
        title={topic.title}
        icon={icon}
        badgeText={badgeText}
        image={image}
        color={color}
        badgeOnClick={badgeOnClick}
      >
        {description}
      </ImageHeader>
    </>
  );
};

export default Header;
