import TopicDatasetBadge from './TopicDatasetBadge';

const TopicHeader: React.FC<any> = ({ topic, datasetsCount }) => {
  datasetsCount = isNaN(datasetsCount) ? 0 : datasetsCount;

  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <div className="w-full z-10">
          {/* WIP */}
          <div
            className="bg-[url('https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png')] h-[300px] md:h-[450px] lg:min-h-[600px] lg:h-[100%]
              ml-[-2.5rem] md:ml-[-7rem] md:mr-[-7rem] lg:mr-[5rem] w-[calc(100%+5rem)] md:w-[calc(100%+14rem)] lg:w-full bg-center bg-no-repeat bg-cover lg:rounded-r-[50px]"
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
                <h1 className="text-2xl sm:text-3xl font-[Avenir] font-extrabold flex items-center mb-6 text-[#22B373]">
                  <span className="bg-[#22B373] rounded-full inline-block overflow-hidden w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] p-[9px] mr-2 sm:mr-4">
                    <img
                      src={topic?.image_display_url}
                      alt={`${topic?.name}--topic`}
                      className="block"
                      width={100}
                    />
                  </span>
                  {topic?.title}
                </h1>
                <p className="mb-6 w-full 2xl:w-[85%] text-[#7C7C7C]">
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
                <div className="mb-8">
                  <TopicDatasetBadge amount={datasetsCount} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
