import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ErrorMessage } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import * as timeago from 'timeago.js';
import Sidebar from './Sidebar';
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

  return (
    <div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 w-auto h-auto">
        <div className="col-span-1 min-w-0">
          <Sidebar />
        </div>
        <div className="p-4 col-span-2">
          <div className="bg-gradient-to-r from-red-500 to-pink-700 bg-clip-text text-4xl font-bold px-2 mb-4">
            {searchResults.count}{' '}
            {searchResults.count > 1 ? 'datasets found' : 'dataset found'}
          </div>
          <ul className="mb-10">
            {searchResults.results.map((dataset, index) => (
              <li
                key={index}
                className="flex items-center flex-wrap sm:flex-nowrap p-4"
              >
                <div className="w-20 h-20 bg-yellow-500 rounded-2xl">
                  <p className="text-2xl font-bold text-center text-white capitalize pt-6 px-4">
                    PDF
                  </p>
                </div>
                <div className="ml-6 flex flex-col">
                  <Link
                    href={`/@${
                      dataset.organization
                        ? dataset.organization.name
                        : 'dataset'
                    }/${dataset.name}`}
                  >
                    {/* eslint-disable-next-line */}
                    <a className="block focus:outline-none">
                      <h1 className="text-lg font-semibold text-gray-900 capitalize">
                        {dataset.title}
                      </h1>
                      <p className="text-sm font-medium text-gray-500 line-clamp-2">
                        {dataset.description}
                      </p>
                    </a>
                  </Link>

                  <div className="flex flex-col sm:flex-row mt-2 space-x-3.5">
                    <div className="bg-red-100 px-2 py-0.5 rounded-2xl items-center">
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
                          fill="#B96400"
                        />
                      </svg>

                      <span className="text-xs text-yellow-700 capitalize">
                        &nbsp;{' '}
                        {dataset.organization.title ||
                          dataset.organization.name}
                      </span>
                    </div>
                    <div className="bg-red-100 px-2 py-0.5 rounded-2xl items-center">
                      <img
                        src="/images/time.svg"
                        alt="time-icon"
                        className="inline pr-1"
                      />
                      <span className="text-xs text-yellow-700 capitalize">
                        {timeago.format(dataset.updated)}
                      </span>
                    </div>
                    <div className="bg-red-100 px-2 py-0.5 rounded-2xl items-center">
                      <img
                        src="/images/stars.svg"
                        alt="stars-icon"
                        className="inline pr-1"
                      />
                      <span className="text-xs text-yellow-700 capitalize">
                        4.7
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Pagination count={searchResults.count} variables={setQvariables} />
        </div>
      </div>
    </div>
  );
};

export default List;
