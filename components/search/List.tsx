import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { SEARCH_QUERY } from '../../graphql/queries';
import Pagination from './Pagination';
import ListCard from './ListCard';
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const List: React.FC<{
  //  TODO: improve this parameterization
  variables: any;
  setQvariables: any;
  show_amount?: boolean; //  TODO: this parameter is not respecting the style guide
  noXMargin?: boolean;
  onPageChange?: (page: number) => void;
  page?: number;
  setCount?: (count: number) => void;
}> = ({
  variables,
  setQvariables,
  show_amount,
  noXMargin,
  onPageChange,
  page,
  setCount,
}) => {
  const { t } = useTranslation('common');
  const {
    loading: loadSearch,
    error: errorSearch,
    data: dataSearch,
  } = useQuery(SEARCH_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const searchResults = dataSearch?.search.result;

  useEffect(() => {
    if (setCount) setCount(searchResults?.count | 0);
  }, [searchResults]);

  return (
    <div>
      <div
        className={`mt-8 font-avenir ${noXMargin == true ? '' : 'sm:mx-12'}`}
      >
        <div className="text-center md:text-left text-2xl text-[#4D4D4D] font-extrabold tracking-tight capitalize px-2 mb-4">
          {loadSearch ? (
            <div className="w-100 flex justify-center">
              <Spinner size="10" />
            </div>
          ) : show_amount != false ? (
            searchResults?.count +
            ' ' +
            (searchResults?.count === 1
              ? t('dataset-singular')
              : t('dataset-plural'))
          ) : (
            ''
          )}
        </div>
        <ul className="mb-10" id="datasets">
          {errorSearch && (
            <ErrorMessage message="Error loading search results" />
          )}
          {!loadSearch &&
            searchResults?.results.map((dataset, index) => (
              <ListCard key={index} dataset={dataset} />
            ))}
        </ul>
        <div className="flex justify-center">
          <Pagination
            count={searchResults?.count}
            setQvariables={setQvariables}
            onPageChange={onPageChange}
            initAtPage={page}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
