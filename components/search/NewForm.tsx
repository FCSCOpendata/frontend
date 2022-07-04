/* eslint-disable jsx-a11y/no-onchange */ //This is for the Filter Group because OnBlur doesn't work.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRef, useState } from 'react';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/outline';

const SearchForm: React.FC<{ variables: any; setQvariables: any }> = ({
  variables,
  setQvariables,
}) => {
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

  // if (errorFormats) return <ErrorMessage message="Error loading Categories" />;
  // if (loadFormats) return <div>Loading Formats</div>;

  return (
    <div className="relative bg-[#F7FAFC] font-[Avenir] flex flex-col items-center justify-center w-full min-h-fit space-y-8 overflow-hidden">
      <div className="absolute bg-waves bg-contain bg-no-repeat bg-bottom left-[-1%] right-[-9%] top-[-227%] bottom-[-109%] z-0" />
      <h1 className="text-3xl text-center font-extrabold capitalize !mt-0 z-10 pt-10">
        Search Data
      </h1>
      <div className="flex flex-wrap items-center sm:w-9/12 space-x-4 z-10 pb-10">
        <form
          className="flex flex-1 relative sm:w-1/2 bg-white rounded-xl px-4 py-2 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="w-4 text-[#858585]" />
          <input
            id="search2"
            type="text"
            name="search"
            ref={searchQueryRef}
            onKeyPress={handlekeyEvent}
            placeholder="Search by keyword"
            defaultValue={variables.q}
            className="flex-1 bg-white appearance-none focus:ring-0 border-0 ml-2 rounded-xl"
          />
        </form>
        <p className="text-lg bg-button-gradient bg-clip-text text-transparent">
          Filter by
        </p>
        <div className="flex flex-wrap lg:flex-nowrapjustify-center sm:justify-between bg-white px-2 py-2 rounded-xl">
          <div className="flex text-sm">
            <button
              onClick={() => setFilter('Topics')}
              className={`flex space-x-1 ${
                filter == 'Topics' && activeFilterClass
              } rounded-xl px-10 py-2 cursor-pointer`}
            >
              <ViewGridIcon className="w-5 mb-0.5" />
              <input type="button" value="Topics" className="cursor-pointer" />
            </button>
            <button
              onClick={() => setFilter('Organizations')}
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
                value="Organizations"
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
