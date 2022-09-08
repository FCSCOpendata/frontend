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
  const style: { color?: string } = {};

  if (color && isActive) {
    style.color = color || 'inherit';
  }

  return (
    <>
      <div className={`${isActive ? 'text-[#22B373]' : ''}`}>
        <div className="h-[60px] flex justify-center">
          <img src={icon.url || '/images/no-image.svg'} alt={icon.alt} />
        </div>
        <h3
          className="font-avenir font-medium text-md text-center mt-4"
          style={style}
        >
          {title}
        </h3>
      </div>
    </>
  );
};

export default IconCard;
