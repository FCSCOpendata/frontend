const SubtopicCard: React.FC = (props: any) => {
  const subtopic = props.subtopic;

  return (
    <>
      {/* TODO: improve this resposivity */}
      <div
        className="
          h-[45vw] 
          sm:h-[35vw] 
          md:h-[20vw] 
          2xl:h-[300px] 
          max-w-[300px] 
          p-1"
      >
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
          <div
            className="
            absolute 
            bottom-5 
            flex 
            items-center 
            justify-between 
            text-white 
            px-4 
            w-full"
          >
            <h3 className="font-semibold text-xl">
              {subtopic.display_name || subtopic.title || subtopic.name}
            </h3>
            {/* TODO: fix the responsivity for >1080p */}
            <span
              className="
                      block 
                      overflow-hidden 
                      w-[40px] 
                      h-[40px]
                      mr-4
                    "
            >
              {/* TODO: this icon is not good on too large
              //  or too small resolutions */}
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
