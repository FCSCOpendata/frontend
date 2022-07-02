const SubtopicCard: React.FC = (props: any) => {
  const subtopic = props.subtopic;
  return (
    <>
      <div className="w-[250px] h-[250px] p-1">
        <div className="bg-[#464646] rounded-xl w-full h-full"></div>
      </div>
    </>
  );
};

export default SubtopicCard;
