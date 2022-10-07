import { useQuery } from '@apollo/react-hooks';
import { GET_POPULAR_DATASETS_QUERY } from '../../graphql/queries';
import { ErrorMessage } from '../_shared';

const SearchSuggestions: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_DATASETS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading Search Suggestions</div>;
  if (error)
    return (
      <ErrorMessage error={error} message="Error loading search suggestions" />
    );

  const result = data.popular.result.results;

  return (
    <div className="mt-16 mb-32">
      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-8">
        Search Suggestions
      </h3>
      <div className=" text-xs text-blue-800 font-bold space-x-2">
        {result.map((dataset, index) => (
          <div
            key={index}
            className="inline-block bg-blue-100 items-center rounded-2xl capitalize px-3 py-1 mb-2"
          >
            {dataset.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
