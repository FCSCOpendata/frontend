import Badge from './Badge';
import Title from './Title';

interface ImageHeaderProps {
  title: string;
  icon?: { url: string; alt: string };
  image?: { url: string; alt: string };
  badgeText?: string;
  children: React.ReactNode;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({
  title,
  icon,
  image,
  badgeText,
  children,
}) => {
  return (
    <>
      <div className={image?.url ? `xl:grid xl:grid-cols-2` : ''}>
        <div className={`${image?.url ? 'w-full z-10' : 'hidden'}`}>
          <div
            className={`h-full flex items-center
              ml-[-2.5rem] md:ml-[-7rem] 
              xl:mr-[0rem] 
              w-[calc(100%+5rem)] xl:w-[calc(100%+4rem)] 
              bg-center bg-no-repeat bg-cover"
            `}
          >
            <img
              src={image.url}
              alt={`${title}`}
              height="100%"
              className="object-center object-cover w-full xl:rounded-r-[40px] 
                w-[calc(100%+5rem)] xl:w-[calc(100%+10rem)]
              "
            />
          </div>
        </div>
        <div className="w-full">
          <div className="h-full w-full xl:pt-[50px] pb-[50px] mr-[10rem] z-0 overflow-visible">
            {/* 5rem (ml) + 5rem (body padding) = 10rem*/}
            <div
              className="bg-[#F7FAFC] pb-5 xl:pb-0 h-full 
                ml-[-2.5rem] md:ml-[-7rem] xl:ml-[-3.0rem] 
                px-10 md:pl-[4rem] xl:pr-[7rem] 
                w-[calc(100%+5rem)] xl:w-[calc(100%+10rem)]
              "
            >
              <div className="pt-[3rem] flex flex-col h-full">
                <Title icon={icon}>{title}</Title>
                <p className="mb-8 w-full 2xl:w-[85%] text-[#7C7C7C] grow">
                  {children}
                </p>
                <div className="mb-8">
                  <Badge text={badgeText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
