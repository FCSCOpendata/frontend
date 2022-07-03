import TopicDatasetButton from './TopicDatasetButton';

const TopicHeader: React.FC<any> = ({ topic }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div className="w-full z-10">
          {/* WIP */}
          <div
            className="
              bg-[url('https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png')] 
              h-[300px]
              md:h-[650px]
              ml-[-5rem]
              mr-[-5rem]
              md:mr-[5rem]
              w-100 
              bg-center 
              bg-no-repeat 
              bg-cover 
              md:rounded-r-[50px]
            "
          ></div>
        </div>
        <div className="w-full">
          <div
            className="
          h-full 
          w-full 
          md:pt-[50px] 
          pb-[50px]
          mr-[10rem]
          z-0
          overflow-visible
          "
          >
            {/* 5rem (ml) + 5rem (body padding) = 10rem*/}
            <div className="bg-[#F7FAFC] h-full w-[calc(100%+10rem)]  ml-[-5rem] pl-[5rem] pr-[5rem]">
              <div className="pt-[3rem]">
                <h1 className="text-3xl font-semibold flex items-center mb-6">
                  <span
                    className="
                      bg-[#464646] 
                      rounded-full 
                      inline-block 
                      overflow-hidden 
                      w-[40px] 
                      h-[40px] 
                      p-[9px] 
                      mr-4
                    "
                  >
                    <img
                      src={topic.image_display_url}
                      alt={`${topic.name}--topic`}
                      className="block"
                      width={100}
                    />
                  </span>
                  {topic.title}
                </h1>
                <p className="mb-6 w-full 2xl:w-[75%]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit
                </p>
                <TopicDatasetButton amount={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
