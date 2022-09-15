import { AR } from '../../../hooks/locale';

const Title: React.FC<any> = ({ icon, color, children }) => {
  return (
    <>
      <h1
        className="text-2xl sm:text-3xl font-avenir font-extrabold flex mb-6"
        style={{ color: color || '#22B373' }}
      >
        {icon?.url && (
          <span
            className={`border-[1px] rounded-full inline-block overflow-hidden min-w-[30px] w-[30px] sm:min-w-[52px] sm:w-[52px] h-[30px] sm:h-[52px] p-[6px] flex items-center justify-center ${AR(
              'ml-2 sm:ml-4',
              'mr-2 sm:mr-4'
            )}`}
          >
            <img
              src={icon.url}
              alt={icon.alt}
              className="block"
              width="100%"
            />
          </span>
        )}
        {children}
      </h1>
    </>
  );
};

export default Title;
