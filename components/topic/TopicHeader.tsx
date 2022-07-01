export interface TopicHeaderProps {
  title: string;
  icon_url: string;
  image_url: string;
  text: string;
  dataset_qty: number;
}

const TopicHeader: React.FC<TopicHeaderProps> = (props: TopicHeaderProps) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="w-full">
          {/* WIP */}
          <div className="bg-[url('http://manstravelgroups.com/wp-content/uploads/2019/10/AdobeStock_47088158-1.jpeg')] h-100 w-100"></div>
        </div>
        <div className="w-full">
          <div>{props.title}</div>
        </div>
      </div>
    </>
  );
};

export default TopicHeader;
