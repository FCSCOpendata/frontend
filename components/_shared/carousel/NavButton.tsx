const sizes = {
  small: 'w-[30px] h-[30px]',
  medium: 'w-[45px] h-[45px]',
};

const NavButton: React.FC<{
  orientation: 'left' | 'right';
  size?: 'small' | 'medium';
}> = ({ orientation, size }) => {
  return (
    <>
      <button
        className={`bg-[#F7FAFC] ${sizes[size]} rounded-full flex justify-center items-center`}
      >
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

NavButton.defaultProps = { orientation: 'left', size: 'medium' };

export default NavButton;
