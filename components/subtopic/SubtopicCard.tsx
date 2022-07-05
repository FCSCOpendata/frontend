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
        <p className="absolute py-4 bottom-0 inset-x-0 text-white text-sm pl-5 leading-4 font-poppins font-semibold">
          {subtopic.title}
          <span
            className="
                      float-right
                      block 
                      overflow-hidden 
                      w-[35px] 
                      h-[35px]
                      mr-4
                    "
          >
            <img
              src={subtopic.image_display_url}
              alt={`${subtopic.name}--topic`}
              className="block
                "
              width={100}
            />
          </span>
        </p>
      </div>
    </>
  );
};

export default SubtopicCard;
