const TopicDatasetBadge: React.FC<any> = ({ amount }) => {
  return (
    <>
      <span className="bg-[#80E47E]  px-6  py-2  rounded-full">
        {amount} datasets
      </span>
    </>
  );
};

export default TopicDatasetBadge;
