import ImageHeader from '../_shared/image_header/ImageHeader';

const Header: React.FC<any> = ({ topic, datasetsCount }) => {
  const icon = { url: topic.image_display_url, alt: `${topic.name}---topic` };

  const datasetsCountText = isNaN(datasetsCount) ? 0 : datasetsCount;
  const badgeText = `${datasetsCount} dataset${
    datasetsCountText == 1 ? '' : 's'
  }`;

  return (
    <>
      <ImageHeader title={topic.title} icon={icon} badgeText={badgeText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit
      </ImageHeader>
    </>
  );
};

export default Header;
