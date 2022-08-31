const TopicCard: React.FC<{
  topic: any;
  index: number;
  currentIndex: number;
}> = ({ topic, currentIndex, index }) => {
  return (
    <div
      className={`py-2 px-4 rounded-xl ${
        currentIndex === index ? 'bg-button-gradient text-white' : 'text-black'
      }`}
    >
      <input
        type="button"
        value={topic.title || topic.display_name}
        className="cursor-pointer"
      />
    </div>
  );
};

export default TopicCard;
