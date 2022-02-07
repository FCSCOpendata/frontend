import { useQuery } from '@apollo/react-hooks';
import { useRef } from 'react';
import { GET_CATEGORIES_QUERY } from '../../graphql/queries';
import { ErrorMessage } from '../_shared';
const SearchForm: React.FC<{ variables: any; setQvariables: any }> = ({
  variables,
  setQvariables,
}) => {
  const {
    loading: loadCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(GET_CATEGORIES_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const searchQueryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    setQvariables((prev) => {
      const newdata = { ...prev, q: searchQueryRef.current.value };
      return newdata;
    });
  };

  const handlekeyEvent = (event) => {
    if (event.key === 'Enter') {
      setQvariables((prev) => {
        const newdata = { ...prev, q: searchQueryRef.current.value };
        return newdata;
      });
    }
  };

  if (errorCategories)
    return <ErrorMessage message="Error loading Categories" />;
  if (loadCategories) return <div>Loading Categories</div>;

  return (
    <div>
      <div className="bg-gradient-to-r from-red-500 to-pink-700 rounded-2xl w-full h-64 mb-8">
        <div className="text-center pt-20">
          <h1 className="text-5xl font-bold text-white">
            Search Datasets
            <br />
          </h1>
          <span className="text-lg font-semibold text-center text-white">
            Interested in data around specific subjects or topics?
          </span>
        </div>
      </div>
      <div className="flex flex-wrap bg-gray-50 rounded-2xl mb-20 px-4 py-4 sm:w-10/12 sm:-mt-20 sm:ml-24">
        <form
          className="flex flex-1 relative sm:w-1/2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center absolute left-0 inset-y-0">
            <svg
              width="17"
              height="17"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6054 40.8045C9.45038 40.8045 0.375 31.7356 0.375 20.5897C0.375 9.44388 9.45038 0.375 20.6054 0.375C31.7605 0.375 40.8359 9.44388 40.8359 20.5897C40.8359 31.7356 31.7605 40.8045 20.6054 40.8045ZM20.6054 3.52827C11.1906 3.52827 3.53125 11.1814 3.53125 20.5897C3.53125 29.9981 11.1906 37.6512 20.6054 37.6512C30.0203 37.6512 37.6797 29.9981 37.6797 20.5897C37.6797 11.1814 30.0203 3.52827 20.6054 3.52827ZM49.1629 46.9336C49.779 47.5492 49.779 48.5474 49.1629 49.1632L49.1629 49.1632C48.8546 49.4712 48.4515 49.625 48.0469 49.625C47.6423 49.625 47.239 49.4711 46.9308 49.1632L38.1906 40.4296C37.5745 39.814 37.5745 38.8158 38.1906 38.2001C38.8069 37.5842 39.8063 37.5842 40.4227 38.2001L49.1629 46.9336Z"
                fill="#ABABAB"
                stroke="white"
                strokeWidth="0.75"
              />
            </svg>
          </div>
          <input
            id="search2"
            type="text"
            name="search"
            ref={searchQueryRef}
            onKeyPress={handlekeyEvent}
            placeholder="Type your search terms and hit enter"
            defaultValue={variables.q}
            className="flex-1 border-0 md:border-r-2 border-gray-100 focus:border-gray-100 bg-gray-50 appearance-none focus:border-0 focus:ring-0 ml-6"
          />
        </form>
        <div className="flex flex-wrap lg:flex-nowrap sm:w-1/2 justify-center sm:justify-between">
          <div className="">
            <select
              name="themes"
              id="themes"
              className="border-0 md:border-r-2 bg-gray-50 border-gray-100 appearance-none focus:border-0 focus:ring-0 focus:border-gray-100"
            >
              <option>Filter By group</option>
              {dataCategories.categories.result.map((theme, index) => (
                <option key={index} value={theme.name}>
                  {theme.display_name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <select
              name="lastUpdated"
              id="lastUpdated"
              className="border-0 md:border-r-2 bg-gray-50 border-gray-100 appearance-none focus:border-0 focus:ring-0 focus:outline-none focus:border-gray-100"
            >
              <option value="update1">Last Updated</option>
            </select>
          </div>
          <button
            onClick={() => handleSubmit(false)}
            type="button"
            className="text-lg font-medium px-10 py-2 leading-none border bg-purple-800 rounded-2xl text-white appearance-none focus:border-0 focus:ring-0 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
