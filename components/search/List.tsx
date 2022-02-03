import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ErrorMessage } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import * as timeago from 'timeago.js';
import Sidebar from './Sidebar';

const List: React.FC<{ variables: any }> = ({ variables }) => {
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
  const search_results = dataSearch.search.result;

  return (
    <div>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2 w-auto h-auto">
        <div className="col-span-1 min-w-0">
          <Sidebar />
        </div>
        <div className="p-4 col-span-2">
          <div className="bg-gradient-to-r from-red-500 to-pink-700 bg-clip-text text-4xl font-bold capitalize px-2 mb-4">
            {search_results.count} Datasets
          </div>
          <ul className="mb-10">
            {search_results.results.map((dataset, index) => (
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
                        {dataset.notes}
                      </p>
                    </a>
                  </Link>

                  <div className="flex flex-col sm:flex-row mt-2 space-x-3.5">
                    <div className="bg-red-100 px-2 py-0.5 rounded-2xl items-center">
                      <img
                        src="/images/category.svg"
                        alt="category-icon"
                        className="inline pr-1"
                      />
                      <span className="text-xs text-yellow-700 capitalize">
                        {dataset.organization.title}
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
        </div>
      </div>
    </div>
  );
};

export default List;
