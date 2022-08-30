import Orgs from './OrgsOnMap';
import useTranslation from 'next-translate/useTranslation';

export default function Map() {
  const { t } = useTranslation('common');
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 sm:pb-24 lg:max-w-7xl">
        <h2 className="block text-3xl text-center font-[Avenir] font-extrabold">
          {t('hm-h-expl')}
        </h2>
        <p className="mt-3 mb-8 text-center text-base text-gray font-normal">
          {t('hm-p-our-data')}
        </p>

        <div className="relative">
          <img src="/images/map.svg" alt="Map" className="w-full" />
          <div className="absolute left-20 top-0 w-10/12">
            <Orgs />
          </div>
        </div>
      </div>
    </div>
  );
}
