import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import Pagination from './Pagination';
import ListCard from './ListCard';

const List: React.FC<{
  //  TODO: improve this parameterization
  variables: any;
  setQvariables: any;
  show_amount?: boolean;
  no_x_marging?: boolean;
  setQty?: (val: number) => void;
}> = ({ variables, setQvariables, show_amount, no_x_marging, setQty }) => {
  const {
    loading: loadSearch,
    error: errorSearch,
    data: dataSearch,
  } = useQuery(SEARCH_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const searchResults = dataSearch?.search.result;

  if (setQty && searchResults?.count) setQty(searchResults.count);

  return (
    <div>
      <div
        className={`mt-8 font-[Avenir] ${
          no_x_marging == true ? '' : 'sm:mx-12'
        }`}
      >
        <div className="text-center md:text-left text-2xl text-[#4D4D4D] font-extrabold tracking-tight capitalize px-2 mb-4">
          {loadSearch
            ? 'Loading Datasets'
            : show_amount != false
            ? searchResults?.count +
              ' ' +
              (searchResults?.count === 1 ? 'dataset' : 'datasets')
            : ''}
        </div>
        <ul className="mb-10">
          {errorSearch && (
            <ErrorMessage message="Error loading search results" />
          )}
          {!loadSearch &&
            searchResults?.results.map((dataset, index) => (
              <ListCard key={index} dataset={dataset} />
            ))}
        </ul>
        <div className="flex justify-center">
          {!loadSearch && (
            <Pagination
              count={searchResults?.count}
              setQvariables={setQvariables}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
