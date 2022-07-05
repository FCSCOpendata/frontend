const TopicIcon: React.FC<any> = ({ topic, active }) => {
  return (
    <>
      <div className={`${active ? 'text-[#22B373]' : ''}`}>
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
