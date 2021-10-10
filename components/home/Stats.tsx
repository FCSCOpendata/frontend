/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_STATS_QUERY } from '../../graphql/queries';

const Stats: React.FC = () => {
  const { loading, error, data } = useQuery(GET_STATS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const stats = [
    { name: 'Datasets', stat: data.datasets.result.count },
    {
      name: 'Organizations',
      stat: data.orgs.result ? data.orgs.result.length : 0,
    },
    {
      name: 'Groups',
      stat: data.groups.result ? data.groups.result.length : 0,
    },
  ];

  return (
    <div className="flex justify-between px-10 bg-transparent text-white border border-white border-opacity-30 rounded-md py-10">
      {stats.map((item) => (
        <div key={item.name} className="flex flex-row flex-wrap">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mr-2 mt-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <div className="text-2xl">
            {' '}
            {item.stat} <div className="text-sm uppercase"> {item.name} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
