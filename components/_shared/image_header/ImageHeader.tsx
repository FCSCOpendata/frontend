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
      <div className={image?.url ? `lg:grid lg:grid-cols-2` : ''}>
        <div className={`${image?.url ? 'w-full z-10' : 'hidden'}`}>
          <div
            className={`h-[300px] md:h-[450px] lg:min-h-[600px] lg:h-[100%]
            ml-[-2.5rem] md:ml-[-7rem] md:mr-[-7rem] lg:mr-[5rem] w-[calc(100%+5rem)] md:w-[calc(100%+14rem)] lg:w-full bg-center bg-no-repeat bg-cover lg:rounded-r-[50px]"
            `}
            style={{ backgroundImage: `url('${image.url}')` }}
          ></div>
        </div>
        <div className="w-full">
          <div className="h-full w-full lg:pt-[50px] pb-[50px] mr-[10rem] z-0 overflow-visible">
            {/* 5rem (ml) + 5rem (body padding) = 10rem*/}
            <div
              className="bg-[#F7FAFC] pb-5 lg:pb-0 h-full ml-[-2.5rem] md:ml-[-7rem] lg:ml-[-7rem] 
              px-10 md:pl-[7rem] md:pr-[7rem] w-[calc(100%+5rem)] md:w-[calc(100%+14rem)]"
            >
              <div className="pt-[3rem]">
                <Title icon={icon}>{title}</Title>
                <p className="mb-6 w-full 2xl:w-[85%] text-[#7C7C7C]">
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
