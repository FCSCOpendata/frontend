import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import Link from 'next/link';
import { ErrorMessage } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import * as timeago from 'timeago.js';
import Pagination from './Pagination';

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

  if (errorSearch)
    return <ErrorMessage message="Error loading search results." />;
  if (loadSearch) return <div>Loading</div>;
  const searchResults = dataSearch.search.result;

  const datasetColors = {
    0: { format: '#FF8A00', text: '#B96400', divBg: '#FFEFDC' },
    1: { format: '#4ECC4B', text: '#05A300', divBg: '#C3F4C2' },
    2: { format: '#7000FF', text: '#6200DF', divBg: '#E0C8FF' },
  };

  const getColor = (index) => datasetColors[index % 3];

  return (
    <div>
      <div className="mt-8 sm:ml-6">
        <div className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#e66433] to-[#94368C] font-bold px-2 mb-4">
          {searchResults.count}{' '}
          {searchResults.count === 1 ? 'dataset found' : 'datasets found'}
        </div>
        <ul className="mb-10">
          {searchResults.results.map((dataset, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row justify-center md:justify-start items-center max-w-xs md:max-w-full mt-10"
            >
              <div
                className="w-20 h-20 rounded-2xl"
                style={{ backgroundColor: getColor(index).format }}
              >
                <p className="flex justify-center items-center pt-6 px-4 text-xl font-bold text-white capitalize">
                  {dataset.resources[0].format}
                </p>
              </div>
              <div className="px-6">
                <Link
                  href={`/@${
                    dataset.organization
                      ? dataset.organization.name
                      : 'dataset'
                  }/${dataset.name}`}
                >
                  {/* eslint-disable-next-line */}
                  <a className="block focus:outline-none">
                    <h1 className="text-lg font-semibold text-gray-900 capitalize text-center sm:text-left">
                      {dataset.title}
                    </h1>
                    <p className="text-sm font-medium text-gray-500 line-clamp-2 text-center sm:text-left">
                      {dataset.description ||
                        'This dataset does not have a description'}
                    </p>
                  </a>
                </Link>

                <div className="pt-4 px-6 md:px-0 space-x-3">
                  <div
                    className="inline-block px-2 py-0.5 rounded-2xl mb-1"
                    style={{ backgroundColor: getColor(index).divBg }}
                  >
                    <svg
                      width="11"
                      height="9"
                      viewBox="0 0 11 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                    >
                      <path
                        d="M10.7744 6.09007H10.0789V5.63834C10.0789 4.83336 9.42412 4.17867 8.61926 4.17867H5.91687V2.90989H6.60372C6.72828 2.90989 6.82936 2.8088 6.82936 2.68425V0.476801C6.82936 0.352247 6.72828 0.25116 6.60372 0.25116H4.39628C4.27172 0.25116 4.17064 0.352247 4.17064 0.476801V2.68425C4.17064 2.8088 4.27172 2.90989 4.39628 2.90989H5.08302V4.17855H2.38085C1.57588 4.17855 0.921179 4.83336 0.921179 5.63822V6.08996H0.225641C0.101087 6.08996 0 6.19104 0 6.3156V8.52316C0 8.64771 0.101087 8.7488 0.225641 8.7488H2.43309C2.55764 8.7488 2.65873 8.64771 2.65873 8.52316V6.31571C2.65873 6.19116 2.55764 6.09007 2.43309 6.09007H1.75515V5.63834C1.75515 5.29333 2.03573 5.01275 2.38074 5.01275H5.0829V6.09007H4.39616C4.27161 6.09007 4.17052 6.19116 4.17052 6.31571V8.52316C4.17052 8.64771 4.27161 8.7488 4.39616 8.7488H6.60361C6.72816 8.7488 6.82925 8.64771 6.82925 8.52316V6.31571C6.82925 6.19116 6.72816 6.09007 6.60361 6.09007H5.91687V5.01275H8.61904C8.96404 5.01275 9.24463 5.29333 9.24463 5.63834V6.09007H8.56657C8.44202 6.09007 8.34093 6.19116 8.34093 6.31571V8.52316C8.34093 8.64771 8.44202 8.7488 8.56657 8.7488H10.7744C10.8989 8.7488 11 8.64771 11 8.52316V6.31571C11 6.19104 10.8989 6.09007 10.7744 6.09007Z"
                        fill={getColor(index).text}
                      />
                    </svg>

                    <span
                      className="text-xs capitalize"
                      style={{ color: getColor(index).text }}
                    >
                      &nbsp;{' '}
                      {dataset.organization.title || dataset.organization.name}
                    </span>
                  </div>
                  <div
                    className="inline-block px-2 py-0.5 rounded-2xl mb-1"
                    style={{ backgroundColor: getColor(index).divBg }}
                  >
                    <svg
                      width="11"
                      height="9"
                      viewBox="0 0 11 10"
                      fill="none"
                      className="inline mr-1"
                    >
                      <path
                        d="M4.99982 0C2.24287 0 0 2.24299 0 4.99994C0 7.75702 2.24287 10 4.99982 10C7.75677 10 9.99976 7.75702 9.99976 4.99994C9.99976 2.24299 7.75665 0 4.99982 0ZM4.99982 9.27712C2.64154 9.27712 0.722762 7.35835 0.722762 4.99994C0.722762 2.64153 2.64141 0.722883 4.99982 0.722883C7.35823 0.722883 9.27688 2.64153 9.27688 4.99994C9.27688 7.35835 7.35823 9.27712 4.99982 9.27712Z"
                        fill={getColor(index).text}
                      />
                      <path
                        d="M6.44635 5.46017C6.44443 5.46017 6.44274 5.46017 6.44081 5.46017L5.36107 5.47631V2.65056C5.36107 2.45093 5.19926 2.28912 4.99962 2.28912C4.79999 2.28912 4.63818 2.45093 4.63818 2.65056V5.8433C4.63818 5.84402 4.63842 5.84474 4.63842 5.84547C4.63842 5.84667 4.63818 5.84775 4.63818 5.84872C4.63842 5.86342 4.6412 5.87727 4.64312 5.89137C4.64433 5.90016 4.64445 5.9092 4.64614 5.91787C4.64939 5.93342 4.65481 5.94787 4.65999 5.96245C4.66264 5.97004 4.66433 5.97799 4.66746 5.98522C4.67373 6.00004 4.68216 6.01354 4.69023 6.02739C4.69397 6.03354 4.69674 6.04028 4.70071 6.04631C4.70987 6.05968 4.72083 6.07161 4.73168 6.08378C4.73625 6.08884 4.73999 6.09462 4.74481 6.09956C4.7565 6.11113 4.76963 6.12088 4.78276 6.13088C4.78806 6.13486 4.79276 6.13968 4.79818 6.14341C4.8124 6.15305 4.82794 6.16064 4.84348 6.16811C4.8489 6.17064 4.85372 6.17426 4.85926 6.17655C4.87734 6.18414 4.89661 6.18944 4.91613 6.19414C4.91975 6.19498 4.92312 6.19667 4.92685 6.19739C4.95023 6.20209 4.97444 6.20474 4.99926 6.20474C5.00107 6.20474 5.003 6.20474 5.00481 6.20474L6.45153 6.18305C6.65105 6.18004 6.81045 6.01571 6.80755 5.81619C6.80478 5.61848 6.64346 5.46017 6.44635 5.46017Z"
                        fill={getColor(index).text}
                      />
                    </svg>

                    <span
                      className="text-xs capitalize"
                      style={{ color: getColor(index).text }}
                    >
                      {timeago.format(dataset.updated)}
                    </span>
                  </div>
                  <div
                    className="inline-block px-2 py-0.5 rounded-2xl mb-1"
                    style={{ backgroundColor: getColor(index).divBg }}
                  >
                    <img
                      src="/images/stars.svg"
                      alt="stars-icon"
                      className="inline pr-1"
                    />
                    <span
                      className="text-xs capitalize"
                      style={{ color: getColor(index).text }}
                    >
                      4.7
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Pagination
            count={searchResults.count}
            setQvariables={setQvariables}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
