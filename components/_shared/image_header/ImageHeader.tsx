import Image from 'next/image';
import Scrollbar from 'react-scrollbars-custom';
import { AR } from '../../../hooks/locale';
import Badge from './Badge';
import Title from './Title';

interface ImageHeaderProps {
  title: string;
  icon?: { url: string; alt: string };
  image?: { url: string; alt: string };
  badgeText?: string;
  children: React.ReactNode;
  color?: string;
  badgeOnClick?: () => void;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({
  title,
  icon,
  image,
  badgeText,
  children,
  color,
  badgeOnClick,
}) => {
  const scrollbarCss = `
    .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY {
      background: ${color || '#22B373'} !important;
      opacity: 0.5;
    }
  `;

  return (
    <>
      <div className={image?.url ? `xl:grid xl:grid-cols-2` : ''}>
        <div className={`${image?.url ? 'w-full z-10' : 'hidden'}`}>
          <div
            className={`h-full flex items-center
              ${AR(
                'mr-[-2.5rem] md:mr-[-7rem] xl:ml-0',
                'ml-[-2.5rem] md:ml-[-7rem] xl:mr-0'
              )}
              w-[calc(100%+5rem)] xl:w-[calc(100%+4rem)] 
              bg-center bg-no-repeat bg-cover"
            `}
          >
            <div className="w-[100vw] xl:w-[calc(100%+10rem)] relative h-full">
              <Image
                src={image.url}
                alt={`${title}`}
                layout="responsive"
                priority={true}
                width={909}
                height={655}
                className={`xl:object-contain
                ${AR('xl:rounded-l-[40px]', 'xl:rounded-r-[40px]')}
              `}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className={`h-full w-full xl:pt-[40px] pb-[40px] ${AR(
              'ml-[10rem]',
              'mr-[10rem]'
            )} z-0 overflow-visible`}
          >
            {/* 5rem (ml) + 5rem (body padding) = 10rem*/}
            <div
              className={`bg-[#F7FAFC] pb-5 xl:pb-0 h-full
             ${AR(
               'mr-[-2.5rem] md:mr-[-7rem] xl:mr-[-3.0rem]',
               'ml-[-2.5rem] md:ml-[-7rem] xl:ml-[-3.0rem]'
             )}
             ${AR(
               'px-10 md:pl-[4rem] xl:pl-[7rem]',
               'px-10 md:pl-[4rem] xl:pr-[7rem]'
             )} 
             w-[calc(100%+5rem)] xl:w-[calc(100%+10rem)]
           `}
            >
              <div className="pt-[3rem] flex flex-col h-full justify-between">
                <div className="h-[13em] group">
                  <Title icon={icon} color={color}>
                    {title}
                  </Title>
                  <div className="w-full 2xl:w-[85%]">
                    <style>{scrollbarCss}</style>
                    <Scrollbar
                      rtl={AR(true, false) as boolean}
                      style={{ height: '7.5em' }}
                    >
                      <p className="text-[#7C7C7C] w-[99%] line-clamp-5 group-hover:line-clamp-none transition-all">
                        {children}
                      </p>
                    </Scrollbar>
                  </div>
                </div>
                <div className="pb-[3rem]">
                  <Badge
                    text={badgeText}
                    color={color}
                    onClick={badgeOnClick}
                  />
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
