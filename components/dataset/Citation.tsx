import { AR } from '../../hooks/locale';
import CopyIconButton from '../_shared/CopyIconButton';
import useTranslation from 'next-translate/useTranslation';

const Citation: React.FC<{ title: string }> = ({ title }) => {
  const { t } = useTranslation('common');
  return (
    <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')} w-[22px]`}>
      <CopyIconButton
        hintBeforeCopy={t('copy-snippet')}
        hintAfterCopy={t('copied')}
        id="dataset"
        content={`${title} - ${
          typeof window !== 'undefined' ? window.location.href : ''
        }`}
        size="w-5 h-3"
      />
    </span>
  );
};

export default Citation;
