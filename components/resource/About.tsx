import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';

const About: React.FC<{ variables: any }> = ({ variables }) => {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { result } = data.dataset;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  return (
    <>
      <div className="flex flex-col mb-10">
        <div className="flex xl:flex-row flex-col mb-4 text-[#4D4D4D] font-avenir font-extrabold text-[36px] items-baseline">
          {resource.format === 'CSV' ? (
            <img
              src="/images/csv-icon.svg"
              alt="Dataset title"
              className="inline w-6 xl:mr-2"
            />
          ) : (
            <img
              src="/images/excel-icon.svg"
              alt="Dataset title"
              className="inline w-6 xl:mr-2"
            />
          )}

          <h1 className="inline mr-4">
            {resource.name}{' '}
            <img
              src="/images/plant-icon.svg"
              alt="Dataset title"
              className="inline w-6"
            />
          </h1>
        </div>
        <article className="font-avenir text-[#7C7C7C] text-[20px] font-normal mb-4">
          {resource.description?.replace(/<[^>]*>?/gm, '') ||
            'This resource does not have a description yet.'}
        </article>
      </div>
    </>
  );
};

export default About;
