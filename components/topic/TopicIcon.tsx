//  TODO: check if I should be using some specific
//  model   (type)   for   the   `Collection`  (or
//  `Topic`) item.
export interface TopicIconProps {
  display_name: string;
  image_display_url: string;
}

const TopicIcon: React.FC<any> = ({ topic }) => {
  return (
    <>
      <div>
        <div className="h-10 flex justify-center">
          <img
            //  TODO: check what blank image to put when
            //  there's no image
            src={topic.image_display_url}
            alt={`${topic.display_name || topic.name}-topic`}
          />
        </div>
        <h3 className="font-[Avenir] font-medium text-md text-center mt-4">
          {topic.display_name || topic.title || topic.name}
        </h3>
      </div>
    </>
  );
};

export default TopicIcon;
