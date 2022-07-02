const TopicHeader: React.FC<any> = ({ topic }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        {/* NOTE: depending of the mobile design this
            background could fit  better  under  the 
            text element*/}

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
          <div
            className="
          h-full 
          w-full 
          pt-[50px] 
          pb-[50px]
          mr-[10rem]
          z-0
          overflow-visible
          "
          >
            {/* 5rem (ml) + 5rem (body padding) = 10rem */}
            <div className="bg-[#F7FAFC] h-full w-[calc(100%+10rem)]  ml-[-5rem] pl-[5rem] pr-[5rem]">
              <div>{topic.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
