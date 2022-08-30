/* eslint-disable jsx-a11y/no-onchange */ //This is for the Filter Group because OnBlur doesn't work.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRef, useState } from 'react';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/outline';
import FiltersBar from './FiltersBar';
import useTranslation from 'next-translate/useTranslation';

const SearchForm: React.FC<{
  variables: any;
  setQvariables: any;
  setSideFilter: any;
  sideFilter: any;
}> = ({ variables, setQvariables, setSideFilter, sideFilter }) => {
  const { t } = useTranslation('common');
  const searchQueryRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchFormat, setSearchFormat] = useState('');

  const [filter, setFilter] = useState('');
  const activeFilterClass = 'text-white bg-button-gradient';

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    setQvariables((prev) => {
      const newdata = {
        ...prev,
        q: searchQueryRef.current.value,
        fq: searchFormat ? `res_format:(${searchFormat})` : '',
      };
      return newdata;
    });
  };
  const handlekeyEvent = (e) => (e.key === 'Enter' ? handleSubmit(e) : null);

  const handleClick = (e) => {
    setFilter((prev) => (prev === e.target.value ? '' : e.target.value));
  };

  return (
    <div className="relative bg-[#F7FAFC] font-[Avenir] flex flex-col items-center justify-center w-full py-12 overflow-hidden">
      <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
      <h1 className="text-3xl text-center font-extrabold !mt-0 mb-8 capitalize z-10">
        {t('ds-h-sear')}
      </h1>
      <div className="xl:flex xl:flex-wrap items-center w-full sm:max-w-xl xl:max-w-none xl:w-9/12 px-4 sm:px-0 space-x-4 space-y-2 xl:space-y-0 2xl:max-w-7xl z-10">
        <form
          className="flex flex-1 relative xl:w-1/2 bg-white rounded-xl px-4 py-2 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="w-4 text-[#858585]" />
          <input
            id="search2"
            type="text"
            name="search"
            ref={searchQueryRef}
            onKeyPress={handlekeyEvent}
            placeholder={t('ds-bt-searc')}
            defaultValue={variables.q}
            className="flex-1 bg-white appearance-none focus:ring-0 border-0 ml-2 rounded-xl"
          />
        </form>
        <p className="text-lg text-center xl:text-left bg-button-gradient bg-clip-text text-transparent">
          {t('ds-p-filt')}
        </p>
        <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between bg-white w-fit !mx-auto xl:!ml-4 p-2 rounded-xl">
          <div className="flex text-sm">
            <div
              className={`flex space-x-1 ${
                filter == 'Topics' && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <ViewGridIcon className="w-5 mb-0.5" />
              <input
                type="button"
                value={t('topics')}
                onClick={handleClick}
                className="cursor-pointer"
              />
            </div>
            <div
              className={`flex space-x-1 ${
                filter == 'Organizations' && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-5 mb-1"
              />
              <input
                type="button"
                value={t('organization')}
                onClick={handleClick}
                className="cursor-pointer"
              />
            </div>
            <div
              className={`flex space-x-1 ${
                filter == 'Time Frame' && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <img
                src="/images/calender-icon.svg"
                alt="orgs"
                className="w-5 mb-1 "
              />
              <input
                type="button"
                value={t('ds-bt-time')}
                onClick={handleClick}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 z-10">
        <FiltersBar
          qvariables={variables}
          setQvariables={setQvariables}
          setSideFilter={setSideFilter}
          filters={filter}
          sideFilter={sideFilter}
        />
      </div>
    </div>
  );
};

export default SearchForm;
