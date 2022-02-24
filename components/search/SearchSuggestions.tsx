import { useQuery } from '@apollo/react-hooks';
import { GET_POPULAR_DATASETS_QUERY } from '../../graphql/queries';

const SearchSuggestions: React.FC = () => {
  // const { data, loading, error } = useQuery(GET_POPULAR_DATASETS_QUERY);

  return (
    <div className="mt-16 mb-32">
      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-8">
        Search Suggestions
      </h3>
      <div className=" text-xs text-blue-800 font-bold space-x-2">
        <div className="inline-block bg-blue-100 items-center rounded-2xl capitalize px-3 py-1 mb-2">
          Data Policies of UAE
        </div>
        <div className="inline-block bg-blue-100 items-center rounded-2xl capitalize px-3 py-1 mb-2 ">
          Covid-19 Testing in Dubai
        </div>
        <div className="inline-block bg-blue-100 items-center rounded-2xl capitalize px-3 py-1 mb-2 ">
          Child Count and Educational Environment
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
