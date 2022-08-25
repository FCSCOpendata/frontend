interface IconCardProps {
  title: string;
  icon: {
    url: string;
    alt: string;
  };
  isActive?: boolean;
}

const IconCard: React.FC<IconCardProps> = ({ title, icon, isActive }) => {
  return (
    <>
      <div className={`${isActive ? 'text-[#22B373]' : ''}`}>
        <div className="h-10 flex justify-center">
          <img
            //  TODO: check what blank image to put when
            //  there's no image
            src={icon.url || '/images/no-image.svg'}
            alt={icon.alt}
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
