const TopicDatasetButton: React.FC<any> = ({ amount }) => {
  return (
    <>
      <button
        className="
        bg-[#80E47E] 
        px-6 
        py-2 
        rounded-full"
      >
        {amount} datasets
      </button>
    </>
  );
};

export default TopicDatasetButton;
