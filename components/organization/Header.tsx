import useTranslation from 'next-translate/useTranslation';
import ImageHeader from '../_shared/image_header/ImageHeader';

const Header: React.FC<any> = ({
  org,
  datasetsCount,
  badgeOnClick,
  color,
}) => {
  const { t } = useTranslation('common');

  const icon = {
    url: org.logo_display_url || '/images/no_icon_org.svg',
    alt: `${org.name}--organization`,
  };
  const image = {
    url: org.image_url || '/images/dubai_placeholder.png',
    alt: `${org.name}--organization`,
  };
  const description = org.description;

  const datasetsCountText = isNaN(datasetsCount) ? 0 : datasetsCount;
  const badgeText = `${datasetsCount} ${
    datasetsCountText == 1 ? t('dataset-single') : t('dataset-plural')
  }`;

  return (
    <>
      <ImageHeader
        title={org.title}
        icon={icon}
        badgeText={badgeText}
        image={image}
        badgeOnClick={badgeOnClick}
        color={color}
      >
        {description}
      </ImageHeader>
    </>
  );
};

export default Header;
