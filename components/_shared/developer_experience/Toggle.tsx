import useTranslation from 'next-translate/useTranslation';
import { AR } from '../../../hooks/locale';
const Toggle: React.FC<{ onToggle: () => void; expanded: boolean }> = ({
  onToggle,
  expanded,
}) => {
  const { t } = useTranslation('common');
  return (
    <button onClick={() => onToggle()}>
      <h1 className="font-semibold text-3xl mb-6 flex items-center pointer">
        <span
          className={`bg-[#CBE9FF] p-[9px] w-[30px] rounded-md ${AR(
            'ml-5',
            'mr-5'
          )}`}
        >
          <img
            src="/images/plus.svg"
            width={12}
            alt="Expand developer experience"
            className={`transition-all ease-in-out duration-300 ${
              expanded ? 'rotate-45' : ''
            }`}
          />
        </span>
        {t('dev-exp')}
      </h1>
    </button>
  );
};

export default Toggle;
