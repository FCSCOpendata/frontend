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
        <div>
          <div className="h-10 flex justify-center">
            <img
              className=""
              //  TODO: check what blank image to put when
              //  there's no image
              src={topic.image_display_url}
              alt={`${topic.display_name || topic.name}-topic`}
              width="40"
              height="40"
            />
          </div>
          <h3 className="font-inter font-semibold text-md text-center mt-4">
            {topic.display_name || topic.title || topic.name}
          </h3>
        </div>
      </div>
    </>
  );
};

export default TopicIcon;
