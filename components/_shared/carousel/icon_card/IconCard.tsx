import Image from 'next/image';

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
      <div className={`${isActive ? 'text-[#22B373]' : ''} flex flex-col items-center`}>
        <div className="h-[60px] w-[60px]">
          <Image
            width={60}
            height={60}
            src={icon.url || '/images/no-image.svg'}
            alt={icon.alt}
            className="object-contain"
          />
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
