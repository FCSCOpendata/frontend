const SubtopicCard: React.FC<any> = (props) => {
  const subtopic = props.subtopic;

  return (
    <>
      <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src="https://coolmagazine.com.br/wp-content/uploads/2022/05/dubai.png"
            alt={subtopic.title}
            className="w-full h-full object-center object-cover group-hover:opacity-75 group-hover:border-b-4 group-hover:border-b-[#54CA59]"
          />
        </div>
        <div className="absolute py-4 bottom-0 inset-x-0 text-white text-sm pl-5 leading-4 flex justify-between">
          <h3 className="font-[Avenir] font-semibold">{subtopic.title}</h3>
          <div className="block overflow-hidden w-[35px] h-[35px] mr-4">
            <img
              src={subtopic.image_display_url}
              alt={`${subtopic.name}--topic`}
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

export default SubtopicCard;
