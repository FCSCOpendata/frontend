/* eslint-disable jsx-a11y/no-onchange */ //This is for the Filter Group because OnBlur doesn't work.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRef, useState } from 'react';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/outline';
import FiltersBar from './FiltersBar';
import useTranslation from 'next-translate/useTranslation';
import { AR } from '../../hooks/locale';

const SearchForm: React.FC<{
  variables: any;
  setQvariables: any;
  setSideFilter: any;
  sideFilter: any;
  onPageChange?: (page: number) => void;
}> = ({
  variables,
  setQvariables,
  setSideFilter,
  sideFilter,
  onPageChange,
}) => {
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
    onPageChange(1);
  };
  const handlekeyEvent = (e) => (e.key === 'Enter' ? handleSubmit(e) : null);

  const handleClick = (e) => {
    setFilter((prev) => (prev === e.target.value ? '' : e.target.value));
  };

  return (
    <div className="relative bg-[#F7FAFC] font-avenir flex flex-col items-center justify-center w-full py-12 overflow-hidden">
      <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
      <h1
        className="text-3xl text-center font-extrabold !mt-0 mb-8 capitalize z-10"
        id="search-title"
      >
        {t('ds-h-sear')}
      </h1>
      <div className="xl:flex xl:flex-wrap items-center w-full sm:max-w-3xl xl:max-w-none xl:w-9/12 px-4 space-x-4 space-y-2 xl:space-y-0 2xl:max-w-7xl z-10">
        <form
          className="flex flex-1 relative xl:w-1/2 bg-white rounded-xl px-4 py-2 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="w-4 text-[#858585]" />
          <input
            id="search2"
            type="text"
            name="search"
            aria-labelledby="search-title"
            ref={searchQueryRef}
            onKeyPress={handlekeyEvent}
            placeholder={t('ds-bt-searc')}
            defaultValue={variables.q}
            className={`flex-1 bg-white appearance-none focus:ring-0 border-0 ${AR(
              'mr-2',
              'ml-2'
            )} rounded-xl`}
          />
        </form>
        <p className="text-lg text-center xl:text-left bg-button-gradient bg-clip-text text-transparent">
          {t('ds-p-filt')}
        </p>
        <div className="flex w-auto flex-wrap xl:flex-nowrap justify-start sm:justify-center xl:justify-between bg-white w-full  !mx-auto xl:!ml-4 p-2 h-[56px] rounded-xl overflow-auto scrollbar-invisible">
          <div className="flex text-sm">
            <div
              className={`flex space-x-1 ${
                filter == t('topics') && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <ViewGridIcon className="w-5 mb-0.5" />
              <input
                type="button"
                value={t('topics')}
                onClick={handleClick}
                className={`cursor-pointer ${AR('!mr-1', '!ml-1')}`}
              />
            </div>
            <div
              className={`flex space-x-1 ${
                filter == t('organization') && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <img
                src="/images/library-icon.svg"
                alt="organizations icon"
                className="w-5 mb-1"
              />
              <input
                type="button"
                value={t('organization')}
                onClick={handleClick}
                className={`cursor-pointer ${AR('!mr-1', '!ml-1')}`}
              />
            </div>
            <div
              className={`flex space-x-1 ${
                filter == t('ds-bt-time') && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <img
                src="/images/calender-icon.svg"
                alt="calendar icon"
                className="w-5 mb-1 "
              />
              <input
                type="button"
                value={t('ds-bt-time')}
                onClick={handleClick}
                className={`cursor-pointer ${AR('!mr-1', '!ml-1')}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 z-10 xl:flex xl:flex-wrap items-center w-full sm:max-w-3xl xl:max-w-none xl:w-9/12 px-4 space-x-4 space-y-2 xl:space-y-0 2xl:max-w-7xl z-10">
        <FiltersBar
          qvariables={variables}
          setQvariables={setQvariables}
          setSideFilter={setSideFilter}
          filters={filter}
          sideFilter={sideFilter}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default SearchForm;
