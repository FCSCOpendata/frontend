import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import {
  GET_COLLECTIONS_QUERY,
  GET_POPULAR_DATASETS_QUERY,
} from '../../../graphql/queries';
import { ErrorMessage } from '../../_shared';

const popularDatasets: React.FC = () => {
  const queryMultiple = () => {
    const popularDatasets = useQuery(GET_POPULAR_DATASETS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });
    const collectionData = useQuery(GET_COLLECTIONS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    return [popularDatasets, collectionData];
  };

  const [
    { loading: loadingDatasets, error: errorDatasets, data: dataDatasets },
    {
      loading: loadingCollections,
      error: errorCollections,
      data: dataCollections,
    },
  ] = queryMultiple();

  if (errorDatasets) return <ErrorMessage message="Error loading datasets." />;
  if (loadingDatasets) return <div>Loading Datasets</div>;
  if (errorCollections)
    return <ErrorMessage message="Error loading collections." />;
  if (loadingCollections) return <div>Loading Collections</div>;

  const collectionResults = dataCollections.collections.result.slice(0, 4);
  const popularDatasets = dataDatasets.popular.result.results;
  return (
    <div className="px-2">
      <Link href="/collection">
        <div className="font-inter uppercase text-xs mt-24 md:text-right text-center mr-2 cursor-pointer">
          View all collections -&gt;
        </div>
      </Link>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-2 gap-6 w-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg row-span-2 col-span-4">
            <div>
              <div className="inline-block align-middle w-12 h-0.5 border border-darkbrown" />
              <span className="inline-block font-roboto text-sm text-center pl-2">
                &nbsp; MOST POPULAR DATASETS
              </span>
              <h1 className="font-inter font-black text-4xl mt-6">
                Highlights
              </h1>
              <div className="flex flex-col mt-14">
                {popularDatasets.map((dataset, index) => (
                  <Link
                    key={index}
                    href={`/organization/@${
                      dataset.organization
                        ? dataset.organization.name
                        : 'dataset'
                    }/${dataset.name}`}
                  >
                    {/* eslint-disable-next-line */}
                    <a className="block mt-6">
                      <div>
                        <h3 className="font-inter font-semibold text-xl">
                          {dataset.title}
                        </h3>
                        <span className="font-roboto font-light text-xs">
                          <img
                            className="inline"
                            src="/images/download-icon.svg"
                            alt="download-icon"
                          />
                          &nbsp; Downloads: 428 &nbsp; &nbsp;
                          <img
                            className="inline"
                            src="/images/update-icon.svg"
                            alt="update-icon"
                          />
                          &nbsp; Last updated:{' '}
                          {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }).format(new Date(dataset.metadata_modified))}
                        </span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {collectionResults.map((collection, index) => (
            <div className="bg-white p-8 col-span-3 rounded-lg" key={index}>
              <img
                src={collection.image_display_url}
                alt={`${collection.name}-collection`}
                width="43"
                height="43"
              />
              <h3 className="font-inter font-semibold text-lg mt-4">
                {collection.display_name}
              </h3>
              <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-2">
                {collection.description}
              </p>
              <Link href={`/collection/${collection.name}`}>
                <span className="font-inter font-medium text-sm text-accent cursor-pointer">
                  View collection -&gt;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default popularDatasets;
