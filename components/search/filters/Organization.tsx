import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../../_shared';
import { GET_ORGS_QUERY } from '../../../graphql/queries';

export default function Organization() {
  const { loading, error, data } = useQuery(GET_ORGS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <div>Loading</div>;

  const { result } = data.topics;

  return result.map((item, index) => <div key={index}></div>);
}
