const Badge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <span className="bg-[#80E47E]  px-6  py-2  rounded-full">{text}</span>
    </>
  );
};

export default Badge;
