import useTranslation from 'next-translate/useTranslation';
import SearchForm from '../search/Form';
import HomeTags from './HomeTags';
import { AR } from '../../hooks/locale';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex-1 w-2/3 relative pt-2 pb-16 sm:pb-24 lg:pb-32 z-40">
          <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-10 lg:mt-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div
                className={`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 ${
                  AR() ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                <h1
                  className={`mt-24 font-poppins mt-1 block text-3xl font-semibold sm:text-4xl xl:text-4xl leading-[3.5rem]`}
                >
                  <span
                    className={`block text-black whitespace-pre-line`}
                    dangerouslySetInnerHTML={{ __html: t('welcome-note') }}
                  />
                </h1>
                <p
                  className={`mt-3 text-base text-gray font-normal sm:mt-8 sm:text-xl lg:text-lg xl:text-xl ${
                    AR() ? 'pl-10' : 'pr-10'
                  }`}
                >
                  {t(`description`)}
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto flex sm:justify-center lg:justify-start sm:text-center lg:text-left lg:mx-0 mb-8">
                  <SearchForm />
                </div>
                <div className="pt-4 max-w-lg">
                  <HomeTags />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
