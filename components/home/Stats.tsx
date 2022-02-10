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
    {
      name: 'Datasets',
      icon: (
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
      ),
      stat: data.datasets.result.count,
    },
    {
      name: 'Organizations',
      icon: (
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      stat: data.orgs.result ? data.orgs.result.length : 0,
    },
    {
      name: 'Groups',
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      stat: data.groups.result ? data.groups.result.length : 0,
    },
  ];

  return (
    <div className="flex justify-between px-2 bg-transparent text-white border border-white border-opacity-30 rounded-md py-10 space-x-5">
      {stats.map((item) => (
        <div key={item.name} className="flex">
          <div className="">{item.icon}</div>
          <div className="text-2xl text-center">
            {' '}
            {item.stat} <div className="text-sm uppercase"> {item.name} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
