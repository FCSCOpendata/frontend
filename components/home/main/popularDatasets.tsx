import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../../_shared';
import Link from 'next/link';
import {
  GET_POPULAR_DATASETS_QUERY,
  GET_CATEGORIES_QUERY,
} from '../../../graphql/queries';

const popularDatasets: React.FC = () => {
  //   const queryMultiple = () => {
  //     const popularDatasets = useQuery(GET_POPULAR_DATASETS_QUERY, {
  //       notifyOnNetworkStatusChange: true,
  //     });
  //     const categoryData = useQuery(GET_CATEGORIES_QUERY, {
  //       notifyOnNetworkStatusChange: true,
  //     });

  //     return [popularDatasets, categoryData];
  //   };

  // const [
  //   { loading: loadingDatasets, error: errorDatasets, data: dataDatasets },
  //   {
  //     loading: loadingCategories,
  //     error: errorCategories,
  //     data: dataCategories,
  //   },
  // ] = queryMultiple();

  // if (errorDatasets) return <ErrorMessage message="Error loading datasets." />;
  // if (loadingDatasets) return <div>Loading Datasets</div>;
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
                <a href="https://datahub.io/core/bond-yields-us-10y">
                  <div className="mt-4">
                    <h3 className="font-inter font-semibold text-xl">
                      10 year US Government Bond Yields (long-term interest
                      rate)
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
                      &nbsp; Last updated: January 25, 2022
                    </span>
                  </div>
                </a>
                <a href="https://datahub.io/core/world-cities">
                  <div className="mt-4">
                    <h3 className="font-inter font-semibold text-xl">
                      Major cities of the world
                    </h3>
                    <span className="font-roboto font-light text-xs">
                      <img
                        className="inline"
                        src="/images/download-icon.svg"
                        alt="download-icon"
                      />
                      &nbsp; Downloads: 855 &nbsp; &nbsp;
                      <img
                        className="inline"
                        src="/images/update-icon.svg"
                        alt="update-icon"
                      />
                      &nbsp; Last updated: November 12, 2021
                    </span>
                  </div>
                </a>
                <a href="https://datahub.io/core/country-list">
                  <div className="mt-4">
                    <h3 className="font-inter font-semibold text-xl">
                      List of all countries with their 2 digit codes (ISO
                      3166-1)
                    </h3>
                    <span className="font-roboto font-light text-xs">
                      <img
                        className="inline"
                        src="/images/download-icon.svg"
                        alt="download-icon"
                      />
                      &nbsp; Downloads: 855 &nbsp; &nbsp;
                      <img
                        className="inline"
                        src="/images/update-icon.svg"
                        alt="update-icon"
                      />
                      &nbsp; Last updated: August 30, 2021
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 col-span-3 rounded-lg">
            <img src="/images/groups/climate.svg" alt="climate category" />
            <h3 className="font-inter font-semibold text-lg mt-4">
              Climate Change
            </h3>
            <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-3">
              The most important &quot;general&quot; datasets on climate
              change.
            </p>
            <Link href="/category/">
              <span className="font-inter font-medium text-sm text-accent cursor-pointer">
                View collection -&gt;
              </span>
            </Link>
          </div>
          <div className="bg-white p-8 col-span-3 rounded-lg">
            <img src="/images/groups/education.svg" alt="education category" />
            <h3 className="font-inter font-semibold text-lg mt-4">
              Education
            </h3>
            <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-3">
              Ready-to-use datasets on US education data.
            </p>
            <Link href="/category/">
              <span className="font-inter font-medium text-sm text-accent cursor-pointer">
                View collection -&gt;
              </span>
            </Link>
          </div>
          <div className="bg-white p-8 col-span-3 rounded-lg">
            <img src="/images/groups/economic.svg" alt="economic category" />
            <h3 className="font-inter font-semibold text-lg mt-4">
              Economic Data
            </h3>
            <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-3">
              A collection of economic indicators available on Portal.
            </p>
            <Link href="/category/">
              <span className="font-inter font-medium text-sm text-accent cursor-pointer">
                View collection -&gt;
              </span>
            </Link>
          </div>
          <div className="bg-white p-8 col-span-3 rounded-lg">
            <img
              src="/images/groups/machine.svg"
              alt="Machine Learning category"
            />
            <h3 className="font-inter font-semibold text-lg mt-4">
              Machine Learning
            </h3>
            <p className="font-inter font-medium text-sm mt-1 mb-6 line-clamp-3">
              Examples of machine learning datasets.
            </p>
            <Link href="/category/">
              <span className="font-inter font-medium text-sm text-accent cursor-pointer">
                View collection -&gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default popularDatasets;
