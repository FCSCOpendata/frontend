import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import { Org } from 'portal';

const OrgInfo: React.FC<{ variables: any }> = ({ variables }) => {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Spinner />;

  //  Shows error if no results, as org should exist
  if (error || !data?.dataset)
    return <ErrorMessage error={error} message="Error loading organization" />;

  const { organization } = data.dataset.result;

  return <Org organization={organization} />;
};

export default OrgInfo;
