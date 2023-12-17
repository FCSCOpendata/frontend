import { AR } from '../../../../hooks/locale';

interface CardProps {
  title: string;
  icon?: {
    url: string;
    alt: string;
  };
  image: {
    url: string;
    alt: string;
  };
}

const Card: React.FC<CardProps> = ({ title, icon, image }) => {
  return (
    <>
      <div className="relative w-full bg-black rounded-lg overflow-hidden group min-h-[100px] topic-item z-10">
        <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10" />
        <div>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-center rounded-xl object-scale-down"
          />
        </div>
        <div
          className={`absolute z-20 py-4 bottom-0 inset-x-0 text-white text-m ${AR(
            'pr-5',
            'pl-5'
          )} leading-4 flex justify-between group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black transition-all items-center`}
        >
          <h3 className="font-avenir font-bold">{title}</h3>
          {!!icon.url && (
            <div
              className={`block overflow-hidden w-[40px] h-[40px] ${AR(
                'ml-4',
                'mr-4'
              )}`}
            >
              <img
                src={icon.url}
                alt={icon.alt}
                className="block"
                width={100}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
