const NavButton: React.FC<{ orientation: 'left' | 'right' }> = ({
  orientation,
}) => {
  return (
    <>
      <button className="bg-[#F7FAFC] w-[45px] h-[45px] rounded-full flex justify-center items-center">
        <img
          src="/images/arrow.svg"
          width={18}
          alt={(orientation === 'left' ? 'Previous' : 'Next') + ' topics'}
          className={orientation === 'right' ? 'rotate-180' : ''}
        />
      </button>
    </>
  );
};

NavButton.defaultProps = { orientation: 'left' };

export default NavButton;
