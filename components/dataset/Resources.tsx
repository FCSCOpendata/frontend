import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';

const Resources: React.FC<{ variables: any }> = ({ variables }) => {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <div>Loading</div>;

  const { result } = data.dataset;

  return (
    <div className="flex flex-col p-8 bg-gray-200 rounded-xl mt-10">
      <div className="flex justify-end">
        <div className="flex mr-4">
          <img src="/images/resources/select.svg" alt="select-icon" />
          <span className="text-xs font-medium text-gray-500">
            &nbsp;Select
          </span>
        </div>
        <div className="flex">
          <img src="/images/resources/download.svg" alt="download-icon" />
          <span className="text-xs font-medium text-gray-500">
            &nbsp;Download all
          </span>
        </div>
      </div>
      <ul className="mb-10">
        {result.resources.map((resource, index) => (
          <li
            key={index}
            className="flex justify-center sm:justify-start flex-wrap sm:flex-nowrap p-2 mt-8"
          >
            <img src="/images/resources/pdf.svg" alt="resource-icon" />
            <div className="ml-2 flex flex-col">
              {/* eslint-disable-next-line */}
              <h1 className="font-semibold capitalize">
                {resource.name} (
                {resource.size ? `${resource.size} KB` : 'Size N/A'})
              </h1>
              <p className="text-sm font-medium text-gray-500 text-left line-clamp-1">
                {resource.description ||
                  'This resource does not have a description'}
              </p>
              <p className="text-xs font-semibold text-gray-500 mt-1">
                Last updated:{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(
                  new Date(
                    resource.last_modified
                      ? resource.last_modified
                      : resource.created
                  )
                )}
              </p>
            </div>
            <div className="flex ml-6 space-x-3.5">
              <button className="flex sm:h-1/3 sm:w-1/2 items-center justify-center bg-gray-50 border rounded-xl border-gray-900 px-5">
                <span className="text-xs font-bold text-gray-900">
                  Preview
                </span>
              </button>
              <button className="flex sm:h-1/3 sm:w-1/2 items-center justify-center bg-blue-900 border rounded-xl border-gray-900 px-5">
                <span className="text-xs font-bold text-white">Download</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
