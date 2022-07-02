import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ErrorMessage } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import * as timeago from 'timeago.js';
import Pagination from './Pagination';
import { CalendarIcon } from '@heroicons/react/outline';

const List: React.FC<{ variables: any; setQvariables: any }> = ({
  variables,
  setQvariables,
}) => {
  const {
    loading: loadSearch,
    error: errorSearch,
    data: dataSearch,
  } = useQuery(SEARCH_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const searchResults = dataSearch.search.result;

  const datasetFiles = [
    { name: 'pdf', icon: '/images/pdf-icon.svg' },
    { name: 'excel', icon: '/images/excel-icon.svg' },
    { name: 'csv', icon: '/images/csv-icon.svg' },
  ];

  return (
    <div>
      <div className="mt-8 sm:mx-12 font-[Avenir]">
        <div className="text-center md:text-left text-2xl text-[#4D4D4D] font-extrabold tracking-tight capitalize px-2 mb-4">
          {loadSearch
            ? 'Loading Datasets'
            : searchResults.count +
              ' ' +
              (searchResults.count === 1 ? 'dataset' : 'datasets')}
        </div>
        <ul className="mb-10">
          {errorSearch && (
            <ErrorMessage message="Error loading search results" />
          )}
          {!loadSearch &&
            searchResults.results.map((dataset, index) => (
              <li
                key={index}
                className="group relative bg-[#F7FAFC] min-w-0 flex-1 sm:flex sm:items-center sm:justify-between mt-6 py-4 px-8 rounded-xl h-32"
              >
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-xl z-0 ease-in-out duration-150" />
                <div className="flex flex-cols items-center h-full z-10">
                  {/* Image */}
                  <div className="h-full w-28 rounded-2xl bg-gray-200">
                    <p className="flex justify-center items-center text-xl font-bold text-white capitalize h-full">
                      {dataset.resources[0].format}
                    </p>
                  </div>
                  {/* Title, description & org */}
                  <div className="px-6 flex flex-col justify-between h-full">
                    <Link
                      href={`/organization/@${
                        dataset.organization
                          ? dataset.organization.name
                          : 'dataset'
                      }/${dataset.name}`}
                    >
                      {/* eslint-disable-next-line */}
                      <a className="block focus:outline-none">
                        <h1 className="text-lg font-semibold text-[#202020] text-center sm:text-left max-w-xl">
                          {dataset.title}
                        </h1>
                        <p className="text-sm font-medium text-[#7C7C7C] line-clamp-2 text-center sm:text-left">
                          {dataset.description ||
                            'This dataset does not have a description'}
                        </p>
                      </a>
                    </Link>
                    <div className="inline-flex items-center py-1 space-x-2 text-[#7C7C7C]">
                      <img
                        src="/images/library-icon.svg"
                        alt="orgs"
                        className="w-4 mb-1 grayscale"
                      />
                      <span className="text-xs capitalize">
                        {dataset.organization.title ||
                          dataset.organization.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start h-full text-[#7C7C7C] z-10">
                  {/* dataset info on hover */}
                  <div className="flex flex-col px-4 border-l-2 border-[#E6E6E6] h-full opacity-0 group-hover:opacity-100 ease-in-out duration-150">
                    <div className="">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="inline mr-1 w-4"
                      >
                        <path
                          d="M4.99982 0C2.24287 0 0 2.24299 0 4.99994C0 7.75702 2.24287 10 4.99982 10C7.75677 10 9.99976 7.75702 9.99976 4.99994C9.99976 2.24299 7.75665 0 4.99982 0ZM4.99982 9.27712C2.64154 9.27712 0.722762 7.35835 0.722762 4.99994C0.722762 2.64153 2.64141 0.722883 4.99982 0.722883C7.35823 0.722883 9.27688 2.64153 9.27688 4.99994C9.27688 7.35835 7.35823 9.27712 4.99982 9.27712Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6.44635 5.46017C6.44443 5.46017 6.44274 5.46017 6.44081 5.46017L5.36107 5.47631V2.65056C5.36107 2.45093 5.19926 2.28912 4.99962 2.28912C4.79999 2.28912 4.63818 2.45093 4.63818 2.65056V5.8433C4.63818 5.84402 4.63842 5.84474 4.63842 5.84547C4.63842 5.84667 4.63818 5.84775 4.63818 5.84872C4.63842 5.86342 4.6412 5.87727 4.64312 5.89137C4.64433 5.90016 4.64445 5.9092 4.64614 5.91787C4.64939 5.93342 4.65481 5.94787 4.65999 5.96245C4.66264 5.97004 4.66433 5.97799 4.66746 5.98522C4.67373 6.00004 4.68216 6.01354 4.69023 6.02739C4.69397 6.03354 4.69674 6.04028 4.70071 6.04631C4.70987 6.05968 4.72083 6.07161 4.73168 6.08378C4.73625 6.08884 4.73999 6.09462 4.74481 6.09956C4.7565 6.11113 4.76963 6.12088 4.78276 6.13088C4.78806 6.13486 4.79276 6.13968 4.79818 6.14341C4.8124 6.15305 4.82794 6.16064 4.84348 6.16811C4.8489 6.17064 4.85372 6.17426 4.85926 6.17655C4.87734 6.18414 4.89661 6.18944 4.91613 6.19414C4.91975 6.19498 4.92312 6.19667 4.92685 6.19739C4.95023 6.20209 4.97444 6.20474 4.99926 6.20474C5.00107 6.20474 5.003 6.20474 5.00481 6.20474L6.45153 6.18305C6.65105 6.18004 6.81045 6.01571 6.80755 5.81619C6.80478 5.61848 6.64346 5.46017 6.44635 5.46017Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-xs">
                        {dataset.resources.length}&nbsp;
                        {dataset.resources.length > 1
                          ? 'resources'
                          : 'resource'}
                      </span>
                    </div>
                    <div className="">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        className="inline mr-1 w-4"
                      >
                        <path
                          d="M4.99982 0C2.24287 0 0 2.24299 0 4.99994C0 7.75702 2.24287 10 4.99982 10C7.75677 10 9.99976 7.75702 9.99976 4.99994C9.99976 2.24299 7.75665 0 4.99982 0ZM4.99982 9.27712C2.64154 9.27712 0.722762 7.35835 0.722762 4.99994C0.722762 2.64153 2.64141 0.722883 4.99982 0.722883C7.35823 0.722883 9.27688 2.64153 9.27688 4.99994C9.27688 7.35835 7.35823 9.27712 4.99982 9.27712Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6.44635 5.46017C6.44443 5.46017 6.44274 5.46017 6.44081 5.46017L5.36107 5.47631V2.65056C5.36107 2.45093 5.19926 2.28912 4.99962 2.28912C4.79999 2.28912 4.63818 2.45093 4.63818 2.65056V5.8433C4.63818 5.84402 4.63842 5.84474 4.63842 5.84547C4.63842 5.84667 4.63818 5.84775 4.63818 5.84872C4.63842 5.86342 4.6412 5.87727 4.64312 5.89137C4.64433 5.90016 4.64445 5.9092 4.64614 5.91787C4.64939 5.93342 4.65481 5.94787 4.65999 5.96245C4.66264 5.97004 4.66433 5.97799 4.66746 5.98522C4.67373 6.00004 4.68216 6.01354 4.69023 6.02739C4.69397 6.03354 4.69674 6.04028 4.70071 6.04631C4.70987 6.05968 4.72083 6.07161 4.73168 6.08378C4.73625 6.08884 4.73999 6.09462 4.74481 6.09956C4.7565 6.11113 4.76963 6.12088 4.78276 6.13088C4.78806 6.13486 4.79276 6.13968 4.79818 6.14341C4.8124 6.15305 4.82794 6.16064 4.84348 6.16811C4.8489 6.17064 4.85372 6.17426 4.85926 6.17655C4.87734 6.18414 4.89661 6.18944 4.91613 6.19414C4.91975 6.19498 4.92312 6.19667 4.92685 6.19739C4.95023 6.20209 4.97444 6.20474 4.99926 6.20474C5.00107 6.20474 5.003 6.20474 5.00481 6.20474L6.45153 6.18305C6.65105 6.18004 6.81045 6.01571 6.80755 5.81619C6.80478 5.61848 6.64346 5.46017 6.44635 5.46017Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-xs capitalize">
                        {timeago.format(dataset.updated)}
                      </span>
                    </div>
                    <div className="">
                      <CalendarIcon className="inline mr-1 w-4" />
                      <span className="text-xs capitalize">2017 -2020</span>
                    </div>
                  </div>
                  {/* file icons */}
                  <div className="grid items-center px-8 ml-8 h-full border-l-2 border-[#E6E6E6]">
                    {datasetFiles.map((file, index) => (
                      <button key={index}>
                        <img src={file.icon} width={20} alt={file.name} />
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-center">
          {!loadSearch && (
            <Pagination
              count={searchResults.count}
              setQvariables={setQvariables}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
