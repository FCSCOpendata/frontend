import { useQuery } from '@apollo/react-hooks';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import Card from '../search/ListCard';
import { ErrorMessage } from '../_shared';

const SubtopicTopDatasets: React.FC = ({ subtopic }) => {
  const {
    loading: loadingDatasets,
    error: errorDatasets,
    data: dataDatasets,
    //  TODO: change this query to get only the topics
    //  datasets
  } = useQuery(GET_DATASET_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (errorDatasets) return <ErrorMessage message="Error loading datasets." />;
  if (loadingDatasets) return <div>Loading Datasets</div>;

  const datasets = dataDatasets;

  console.log(datasets);

  return (
    <>
      {/* {datasets.map((dataset, index) => (
        <Card dataset={dataset} key={index} />
      ))} */}
    </>
  );
};

export default SubtopicTopDatasets;
