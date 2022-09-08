import { AR } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { ShareIcon } from '@heroicons/react/outline';

const Share: React.FC<{ title: string }> = ({ title }) => {
  const { t } = useTranslation('common');
  const subject = `${t('share-subject')} ${title}`;
  return (
    <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')}}`}>
      <a
        href={`mailto:?subject=${subject}&body=${title} - ${
          typeof window !== 'undefined' ? window.location.href : ''
        }  %0d%0a %0d%0a ${t('goto-site', {
          link: typeof window !== 'undefined' ? window.location.origin : '',
        })}`}
      >
        <ShareIcon className="text-green-400 w-5 h-3  inline" />
      </a>
    </span>
  );
};

export default Share;
