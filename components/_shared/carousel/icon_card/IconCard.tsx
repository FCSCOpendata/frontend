interface IconCardProps {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  isActive?: boolean;
}

const IconCard: React.FC<IconCardProps> = ({ title, image, isActive }) => {
  return (
    <>
      <div className={`${isActive ? 'text-[#22B373]' : ''}`}>
        <div className="h-10 flex justify-center">
          <img
            //  TODO: check what blank image to put when
            //  there's no image
            src={image.url || '/images/no-image.svg'}
            alt={image.alt}
          />
        </div>
        <h3 className="font-[Avenir] font-medium text-md text-center mt-4">
          {title}
        </h3>
      </div>
    </>
  );
};

export default IconCard;
