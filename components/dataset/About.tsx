import { useQuery } from '@apollo/react-hooks';
import * as timeago from 'timeago.js';
import { ErrorMessage } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import Dataset from '../../pages/[org]/[dataset]';

const About: React.FC<{ variables: any }> = ({ variables }) => {
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

  console.log(result);
  const stats = [
    {
      name: 'Formats',
      stat: result.resources.map((item) => item.format).join(', '),
    },
    {
      name: 'Updated',
      stat: result.updated && timeago.format(result.updated),
    },
    {
      name: 'Licenses',
      stat: result.licenses?.length
        ? result.licenses.map((item, index) => (
            <a
              className="text-yellow-600"
              href={item.path || '#'}
              title={item.title || ''}
              key={index}
            >
              {item.name}
            </a>
          ))
        : 'N/A',
    },
  ];

  return (
    <div>
      <div className="flex flex-col flex-wrap px-4">
        <h1 className="text-2xl font-bold text-purple-800 capitalize">
          {result.title}
        </h1>
        <div className="inline-flex mt-4 space-x-3">
          <img src="/images/dataset-page/location.svg" alt="location-icon" />
          <span className="font-medium text-sm text-gray-500">Dubai, UAE</span>
        </div>
        <div className="inline-flex mt-4 space-x-3">
          <img src="/images/dataset-page/category.svg" alt="category-icon" />
          <span className="font-medium text-sm text-gray-500">
            {result.organization.title}
          </span>
        </div>
        <div className="inline-flex mt-4 space-x-5">
          <img src="/images/dataset-page/time.svg" alt="time-icon" />
          <span className="font-medium text-sm text-gray-500">
            Last Updated: {timeago.format(result.updated)}
          </span>
        </div>
        <div className="inline-flex mt-4 space-x-5">
          <img src="/images/dataset-page/downloads.svg" alt="download-icon" />
          <span className="font-medium text-sm text-gray-500">
            Downloads: 2048
          </span>
        </div>
        <hr className="inline-block align-middle w-3/4 mt-8 h-0.5 border bg-gray-100 rounded" />
        <span className="mt-8 text-sm">rating goes here</span>
        <hr className="inline-block align-middle w-3/4 mt-8 h-0.5 border bg-gray-100 rounded" />
        <div className="mt-4 text-sm sm:w-3/4 line-clamp-6">
          {result.notes || 'This dataset does not have a description'}
        </div>
        <hr className="inline-block align-middle w-3/4 mt-6 h-0.5 border bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default About;
