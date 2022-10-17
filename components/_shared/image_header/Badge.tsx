const Badge: React.FC<{
  text: string;
  color?: string;
  onClick?: () => void;
}> = ({ text, color, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-6  py-2  rounded-full font-medium ${
          color ? 'text-white' : ''
        }`}
        style={{ backgroundColor: color || '#80E47E' }}
      >
        {text}
      </button>
    </>
  );
};

export default Badge;
