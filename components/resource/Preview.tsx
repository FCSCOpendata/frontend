import { useQuery } from '@apollo/react-hooks';
import { Table } from 'portal';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASTORE_DATA } from '../../graphql/queries';

const Preview: React.FC<{ view: any }> = ({ view }) => {
  const variables = {
    resource_id: view.resources,
  };
  const { loading, error, data } = useQuery(GET_DATASTORE_DATA, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Spinner />;
  if (error)
    return <ErrorMessage error={error} message="Error loading data." />;

  const { result } = data.datastore || {
    result: { sample: [], count: 0, fields: [] },
  };

  // Assuming for now it is always a table view
  const columns = result.fields.map((field) => ({
    field: field.id,
    headerName: field.id,
  }));

  return <Table columns={columns} data={result.records} />;
};

export default Preview;
