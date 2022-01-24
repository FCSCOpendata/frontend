import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../../_shared';
import Link from 'next/link';
import {
  GET_POPULAR_DATASETS_QUERY,
  GET_CATEGORIES_QUERY,
} from '../../../graphql/queries';

const popularDatasets: React.FC = () => {
  const queryMultiple = () => {
    const popularDatasets = useQuery(GET_POPULAR_DATASETS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });
    const categoryData = useQuery(GET_CATEGORIES_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    return [popularDatasets, categoryData];
  };

  const [
    { loading: loadingDatasets, error: errorDatasets, data: dataDatasets },
    {
      loading: loadingCategories,
      error: errorCategories,
      data: dataCategories,
    },
  ] = queryMultiple();

  if (errorDatasets) return <ErrorMessage message="Error loading datasets." />;
  if (loadingDatasets) return <div>Loading Datasets</div>;
  if (errorCategories)
    return <ErrorMessage message="Error loading categories." />;
  if (loadingCategories) return <div>Loading Categories</div>;
  const popular = dataDatasets.popular.result.results;
  const categories = dataCategories.categories.result.slice(0, 4);

  const dd = new Date(popular[0].metadata_modified);
  console.log(dd.getFullYear());

  return (
    <div>
      <Link href="/category">
        <div className="px-2 font-inter uppercase text-xs mt-24 md:text-right text-center mr-2 cursor-pointer">
          View all categories -&gt;
        </div>
      </Link>
      <div className="px-2 flex flex-row flex-wrap sm:flex-no-wrap mt-2">
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-2 gap-6 w-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg row-span-2 col-span-4">
            <div>
              <div className="inline-block align-middle w-12 border border-green-500" />
              <span className="inline-block font-roboto text-sm text-center pl-2">
                &nbsp; MOST POPULAR DATASETS
              </span>
              <h1 className="font-inter font-black text-4xl mt-6">
                Highlights
              </h1>
              <div className="mt-16">
                {popular.map((dataset) => (
                  <div key={dataset.title} className="mt-4">
                    <h3 className="font-inter font-semibold text-xl">
                      {dataset.title}
                    </h3>
                    <span className="font-roboto font-light text-xs">
                      <img
                        className="inline"
                        src="/images/download-icon.svg"
                        alt="download-icon"
                      />
                      &nbsp; Downloads 6100+ &nbsp; &nbsp;
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
                ))}
              </div>
            </div>
          </div>
          {categories.map((category) => (
            <div
              className="bg-white p-8 col-span-3 rounded-lg"
              key={category.name}
            >
              <img src={category.image_display_url} alt="category-icon" />
              <h3 className="font-inter font-semibold text-lg mt-4">
                {category.display_name}
              </h3>
              <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-3">
                {category.description}
              </p>
              <Link href={'/category/' + category.id}>
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
