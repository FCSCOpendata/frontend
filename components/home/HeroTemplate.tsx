import useTranslation from 'next-translate/useTranslation';
import SearchForm from '../search/Form';
import Stats from './Stats';
import FloatingParticles from './FloatingParticles';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <FloatingParticles />
      <div className="flex flex-row">
        {/* <div className="flex-initial w-24 sm:w-16 md:w-16 lg:w-20 xl:w-20 relative">
          <p className="absolute top-1/2 left-3 vertical-text px-6 pb-20">
            <a href="/">
              <div className="absolute py-4 px-6 bg-darkbrown flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-white font-black text-base">Feedback</p>
              </div>
            </a>
          </p>
        </div> */}
        <div className="flex-1 w-2/3 relative pt-2 pb-16 sm:pb-24 lg:pb-32 z-50">
          <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-10 lg:mt-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-xs font-medium pb-2 uppercase text-gray-400 tracking-widest sm:text-base lg:text-sm xl:text-base">
                    Quality Data ready to Integrate
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-white">Find and Share</span>
                    <span className="block font-bold sans text-accent">
                      Quality Data.
                    </span>
                  </span>
                </h1>
                <p className="mt-3 pr-10 text-base text-gray-300 sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
                  {t(`common:description`)}
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 mb-8">
                  <SearchForm />
                </div>
                <div className="pt-4 max-w-lg">
                  <Stats />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
