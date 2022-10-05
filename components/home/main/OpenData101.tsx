import useTranslation from 'next-translate/useTranslation';
import { AR } from '../../../hooks/locale';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function OpenData101(props) {
  const { t } = useTranslation('common');
  const text = props?.heading ? props.heading : t('opendata-h');
  function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="relative h-fit">
      <img
        src="/images/open-data-101.svg"
        alt="Open Data 101"
        className="w-full"
      />
      <div className="absolute w-1/2 inset-x-1/4 inset-y-1/3 text-center">
        <p className="text-[#54CA59] font-semibold">- {t('hm-p-next')} -</p>
        <a href={`${AR('/ar')}/p/open-data-101`}>
          <h2 className="font-avenir font-extrabold text-4xl mb-2">{text}</h2>
        </a>
        <p className="text-center px-28 text-sm mb-4">{t('opendata-p')}</p>
        <a
          href="#"
          className="text-[#54CA59] font-medium"
          onClick={scrollToTop}
        >
          {t('opendata-a')}
        </a>
      </div>
    </div>
  );
}
