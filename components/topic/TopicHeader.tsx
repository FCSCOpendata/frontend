const TopicHeader: React.FC<any> = ({ topic }) => {
  return (
    <>
      <div className="grid grid-cols-2 relative">
        <div
          className="
          absolute 
          h-full 
          w-full 
          pt-[50px] 
          pb-[50px] 
          ml-[5rem] 
          z-0
          "
        >
          <div className="bg-[#F7FAFC] h-full w-full"></div>
        </div>
        <div className="w-full z-10">
          {/* WIP */}
          <div
            className="
              bg-[url('https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png')] 
              h-[650px] 
              ml-[-5rem]
              mr-[5rem]
              w-100 
              bg-center 
              bg-no-repeat 
              bg-cover 
              rounded-r-[50px]
            "
          ></div>
        </div>
        <div className="w-full">
          <div>{topic.title}</div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
