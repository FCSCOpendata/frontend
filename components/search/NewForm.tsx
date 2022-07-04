/* eslint-disable jsx-a11y/no-onchange */ //This is for the Filter Group because OnBlur doesn't work.
import { useQuery } from '@apollo/react-hooks';
import { GetServerSideProps } from 'next';
import { useRef, useState } from 'react';
import { GET_RESOURCE_FORMATS_QUERY } from '../../graphql/queries';
import { initializeApollo } from '../../lib/apolloClient';
import { ErrorMessage } from '../_shared';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/outline';
import FiltersBar from './FiltersBar';

const SearchForm: React.FC<{
  variables: any;
  setQvariables: any;
  setSideFilter: any;
}> = ({ variables, setQvariables, setSideFilter }) => {
  const {
    loading: loadFormats,
    error: errorFormats,
    data: dataFormats,
  } = useQuery(GET_RESOURCE_FORMATS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const searchQueryRef = useRef<HTMLInputElement>(null);
  const [searchFormat, setSearchFormat] = useState('');
  const [showFilters, setShowFilters] = useState('');

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
    setShowFilters((prev) => (prev === e.target.value ? '' : e.target.value));
  };

  // if (errorFormats) return <ErrorMessage message="Error loading Categories" />;
  // if (loadFormats) return <div>Loading Formats</div>;

  return (
    <div className="relative bg-[#F7FAFC] font-[Avenir] flex flex-col items-center justify-center w-full py-12 overflow-hidden">
      <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
      <h1 className="text-3xl text-center font-extrabold !mt-0 mb-8 capitalize z-10">
        Search Data
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
            placeholder="Search by keyword"
            defaultValue={variables.q}
            className="flex-1 bg-white appearance-none focus:ring-0 border-0 ml-2 rounded-xl"
          />
        </form>
        <p className="text-lg text-center xl:text-left bg-button-gradient bg-clip-text text-transparent">
          Filter by
        </p>
        <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between bg-white w-fit !mx-auto xl:!ml-4 p-2 rounded-xl">
          <div className="flex text-sm">
            <div
              className={`relative flex space-x-1 rounded-xl px-10 py-2 ${
                showFilters === 'Themes'
                  ? 'bg-button-gradient text-white'
                  : 'text-black'
              }`}
            >
              <ViewGridIcon className="w-5 mb-0.5" />
              <input
                type="button"
                value="Themes"
                onClick={handleClick}
                className="cursor-pointer"
              />
            </div>
            <div
              className={`relative flex space-x-1 rounded-xl px-10 py-2 ${
                showFilters === 'Organizations'
                  ? 'bg-button-gradient text-white'
                  : 'text-black'
              }`}
            >
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-5 mb-1"
              />
              <input
                type="button"
                value="Organizations"
                onClick={handleClick}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 z-10">
        <FiltersBar
          setQvariables={setQvariables}
          setSideFilter={setSideFilter}
          filters={showFilters}
        />
      </div>
      {/* <div
        className={`w-full p-8 bg-gray-200 z-10 ${
          showFilters ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-red-200 border border-black w-full h-32" />
      </div> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const variables = {};

  await apolloClient.query({
    query: GET_RESOURCE_FORMATS_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default SearchForm;
