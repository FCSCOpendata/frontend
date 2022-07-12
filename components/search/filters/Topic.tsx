import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../../_shared';
import { GET_TOPICS_QUERY } from '../../../graphql/queries';

export default function Topic() {
  const { loading, error, data } = useQuery(GET_TOPICS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { result } = data.topics;

  const activeFilterClass = 'text-white bg-button-gradient';

  return (
    <span className="z-10">
      {result.map((item, index) => (
        <button
          key={`topic-${index}`}
          className={`${activeFilterClass} rounded-xl px-4 py-1 mr-2 text-xs cursor-pointer`}
        >
          <input type="button" value={item.title} className="cursor-pointer" />
        </button>
      ))}
    </span>
  );
}
