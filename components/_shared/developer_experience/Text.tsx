const Text: React.FC = (props) => {
  return (
    <>
      <p className="text-[#313131] text-[18px]">{props.children}</p>
    </>
  );
};

export default Text;
