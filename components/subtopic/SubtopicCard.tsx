const SubtopicCard: React.FC = (props: any) => {
  const subtopic = props.subtopic;

  return (
    <>
      <div className="h-[280px] p-1">
        <div
          className="
            bg-[url('https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png')] 
            rounded-xl 
            w-full 
            h-full 
            bg-cover 
            bg-no-repeat 
            bg-center
        "
        >
          <div className="absolute bottom-5 flex items-center justify-between text-white px-4 w-full">
            <h3 className="font-semibold text-xl">
              {subtopic.display_name || subtopic.title || subtopic.name}
            </h3>
            <span
              className="
                      block 
                      overflow-hidden 
                      w-[40px] 
                      h-[40px] 
                      mr-4
                    "
            >
              <img
                src={subtopic.image_display_url}
                alt={`${subtopic.name}--topic`}
                className="block"
                width={100}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubtopicCard;
