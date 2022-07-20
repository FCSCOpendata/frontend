const Title: React.FC<any> = ({ icon, children }) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-[Avenir] font-extrabold flex items-center mb-6 text-[#22B373]">
        {icon?.url && (
          <span className="border-[1px] rounded-full inline-block overflow-hidden min-w-[30px] w-[30px] sm:min-w-[40px] sm:w-[40px] h-[30px] sm:h-[40px] p-[6px] mr-2 sm:mr-4">
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
