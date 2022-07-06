const TopicCard: React.FC<any> = (props) => {
  const topic = props.topic;

  return (
    <>
      <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png"
            alt={topic?.title}
            className="w-full h-full object-center object-cover group-hover:opacity-75 group-hover:border-b-4 group-hover:border-b-[#54CA59]"
          />
        </div>
        <div className="absolute py-4 bottom-0 inset-x-0 text-white text-sm pl-5 leading-4 flex justify-between">
          <h3 className="font-[Avenir] font-semibold">{topic?.title}</h3>
          <div className="block overflow-hidden w-[35px] h-[35px] mr-4">
            <img
              src={topic?.image_display_url}
              alt={`${topic?.name}--topic`}
              className="block
                "
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicCard;
