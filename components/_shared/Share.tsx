import { AR } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { ShareIcon } from '@heroicons/react/outline';

const Share: React.FC<{ title: string }> = ({ title }) => {
  const { t } = useTranslation('common');
  const subject = t('share-subject');
  return (
    <div className={`divide-y divide-slate-400 rounded-xl w-100 `}>
      <div className="font-avenir text-bold p-2">{t('share-dataset')}</div>
      <div className="font-avenir text-sm p-4">
        {title} -{' '}
        <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')}}`}>
          {typeof window !== 'undefined' ? window.location.href : ''}
          &nbsp;
          <a
            href={`mailto:?subject=${subject}&body=${title} - ${
              typeof window !== 'undefined' ? window.location.href : ''
            }`}
          >
            <ShareIcon className="text-green-400 w-7 h-7  inline" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Share;
