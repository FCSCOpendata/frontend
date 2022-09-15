const Badge: React.FC<{ text: string; color?: string }> = ({
  text,
  color,
}) => {

  return (
    <>
      <span
        className={`px-6  py-2  rounded-full font-medium ${
          color ? 'text-white' : ''
        }`}
        style={{ backgroundColor: color || '#80E47E' }}
      >
        {text}
      </span>
    </>
  );
};

export default Badge;
