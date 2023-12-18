import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import useTranslation from 'next-translate/useTranslation';
import { fixTranslations } from '../../hooks/locale';

const About: React.FC<{ variables: any }> = ({ variables }) => {
  const { t } = useTranslation('common');
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Spinner />;
  if (error || !data?.dataset)
    return <ErrorMessage error={error} message="Error loading dataset" />;

  const { result } = data.dataset;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  if (!resource?.id)
    return (
      <ErrorMessage
        error="Resource not found in dataset"
        message="Error loading resource data"
      ></ErrorMessage>
    );

  fixTranslations(result);
  fixTranslations(resource);

  return (
    <>
      <div className="flex flex-col mb-10">
        <div className="flex xl:flex-row flex-col mb-4 text-[#4D4D4D] font-avenir font-extrabold  text-2xl lg:text-[36px] lg:leading-[56px] items-baseline">
          {resource.format === 'CSV' ? (
            <img
              src="/images/csv-icon.svg"
              alt="CSV"
              className="inline w-6 xl:mr-2"
            />
          ) : (
            <img
              src="/images/excel-icon.svg"
              alt="Excel"
              className="inline w-6 xl:mr-2"
            />
          )}

          <h1 className="inline mr-4">
            {resource.title}{' '}
            <img
              src="/images/plant-icon.svg"
              alt="Dataset title"
              className="inline w-6"
            />
          </h1>
        </div>
        <article className="font-avenir text-[#545454] text-[20px] font-normal mb-4">
          {resource.description?.replace(/<[^>]*>?/gm, '') || ''}
        </article>
      </div>
    </>
  );
};

export default About;
