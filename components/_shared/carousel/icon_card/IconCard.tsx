interface IconCardProps {
  title: string;
  icon: {
    url: string;
    alt: string;
  };
  isActive?: boolean;
  color: string | undefined;
}

const IconCard: React.FC<IconCardProps> = ({
  title,
  icon,
  isActive,
  color,
}) => {
  color = color || 'inherit';
  return (
    <>
      <div className={`${isActive ? 'text-[#22B373]' : ''}`}>
        <div className="h-[60px] flex justify-center">
          <img
            src={icon.url || '/images/no-image.svg'}
            alt={icon.alt}
          />
        </div>
        <h3
          className="font-avenir font-medium text-md text-center mt-4"
          style={{ color }}
        >
          {title}
        </h3>
      </div>
    </>
  );
};

export default IconCard;
