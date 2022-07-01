import useTranslation from 'next-translate/useTranslation';
import SearchForm from '../search/Form';
import Tags from './Tags';
import FloatingParticles from './FloatingParticles';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <FloatingParticles />
      <div className="flex flex-row">
        <div className="flex-1 w-2/3 relative pt-2 pb-16 sm:pb-24 lg:pb-32 z-50">
          <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-10 lg:mt-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="font-poppins">
                  <span className="mt-1 block text-4xl font-semibold sm:text-5xl xl:text-5xl">
                    <span className="block text-black">
                      Welcome to the world
                    </span>
                    <span className="block text-black">of UAE Open Data!</span>
                  </span>
                </h1>
                <p className="mt-3 pr-10 text-base text-gray font-normal sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
                  {t(`common:description`)}
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 mb-8">
                  <SearchForm />
                </div>
                <div className="pt-4 max-w-lg">
                  <Tags />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
