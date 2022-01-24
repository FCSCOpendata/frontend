import useTranslation from 'next-translate/useTranslation';
import SearchForm from '../search/Form';
import Stats from './Stats';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-cover hero-pattern overflow-hidden">
      {/* <div className="bg-accent block absolute top-1/3 left-0 py-2 px-12 vertical-text sm:hidden md:block">rectangle</div> */}
      <div className="flex flex-row">
        <div className="flex-initial w-24 sm:w-16 md:w-16 lg:w-20 xl:w-20 relative">
          <p className="absolute top-1/2 left-3 vertical-text px-6 pb-20">
            <a href="/">
              <div className="absolute py-4 px-6 bg-accent flex flex-row">
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
        </div>
        <div className="flex-1 w-2/3 relative pt-6 pb-16 sm:pb-24 lg:pb-32 z-50">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-10 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-xs font-medium pb-2 uppercase tracking-wide text-gray-400 tracking-widest sm:text-base lg:text-sm xl:text-base">
                    Quality Data ready to Integrate
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-white">Find and Share</span>
                    <span className="block font-bold sans text-accent">
                      Quality Data.
                    </span>
                  </span>
                </h1>
                <p className="mt-3 pr-10 text-base text-white sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
                  {t(`common:description`)}
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <SearchForm />
                </div>
                <div className="pt-24 max-w-lg">
                  <Stats />
                  {/* <div className="flex justify-between px-10 bg-transparent text-white border border-white border-opacity-30 rounded-md py-10">
                  <div className="flex flex-row flex-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <p className="text-2xl"> 12,036 <br/><span className="text-base"> DATASETS </span></p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-2xl"> 234 <br/><span className="text-base"> LOCATIONS </span></p>
                  </div>
                  <div className="flex flex-row flex-wrap">
                    <img src="/images/logo.svg" className="w-10" />
                    <p className="text-2xl"> 12,036 <br/><span className="text-base"> DATASETS </span></p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
