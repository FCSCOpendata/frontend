import { AR } from '../../hooks/locale';
import CopyIconButton from './CopyIconButton';
import useTranslation from 'next-translate/useTranslation';

const Citation: React.FC<{ dtype: string; title: string }> = ({
  dtype,
  title,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className={`divide-y divide-slate-400 rounded-xl w-100 `}>
      <div className="font-avenir text-bold p-2">
        {t('cite')} {dtype}
      </div>
      <div className="font-avenir text-sm p-4">
        {title} -{' '}
        <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')}`}>
          {typeof window !== 'undefined' ? window.location.href : ''}
        </span>
        &nbsp;
        <CopyIconButton
          hintBeforeCopy={t('copy-snippet')}
          hintAfterCopy={t('copied')}
          id="dataset"
          content={`${title} - ${
            typeof window !== 'undefined' ? window.location.href : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Citation;
