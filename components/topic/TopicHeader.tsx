const TopicHeader: React.FC<any> = ({ topic }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="w-full">
          {/* WIP */}
          <div className="bg-[url('https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png')] h-[500px] w-100 bg-center bg-no-repeat bg-cover"></div>
        </div>
        <div className="w-full">
          <div>{topic.title}</div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
