import { useQuery } from '@apollo/react-hooks';
import { GET_DATASTORE_DATA } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart: React.FC<{ view: any }> = ({ view }) => {
  const { data, loading, error } = useQuery(GET_DATASTORE_DATA, {
    variables: { resource_id: view.resources[0].id },
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message="Error loading datastore" />;
  const { result } = data.datastore || {
    result: { sample: [], count: 0, fields: [] }, // this is needed when datastore is inactive
  };

  const chartData = {
    labels: result.sample.map((item) => item[view.spec.group]),
    datasets: [
      {
        data: result.sample.map((item) => item[view.spec.series[0]]),
        backgroundColor: '#CBE9FF',
        borderColor: '#CBE9FF',
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card-custom w-full h-64">
      {view.spec.type === 'bar' ? (
        <Bar data={chartData} height={300} options={options} />
      ) : (
        <Line data={chartData} height={300} options={options} />
      )}
    </div>
  );
};

export default Chart;
