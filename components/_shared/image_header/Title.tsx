const Title: React.FC<any> = ({ icon, children }) => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-[Avenir] font-extrabold flex items-center mb-6 text-[#22B373]">
        <span className="bg-[#22B373] rounded-full inline-block overflow-hidden w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] p-[9px] mr-2 sm:mr-4">
          <img src={icon.url} alt={icon.alt} className="block" width={100} />
        </span>
        {children}
      </h1>
    </>
  );
};

export default Title;