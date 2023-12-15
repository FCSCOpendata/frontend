import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../../../graphql/queries';
import NavBreadCrumbs from '../../../../../components/resource/NavBreadCrumbs';
import About from '../../../../../components/resource/About';
import DataExplorer from '../../../../../components/resource/ResourceExplorer';
import ChartBuilder from '../../../../../components/resource/ChartBuilder';
import OpenData101 from '../../../../../components/home/main/OpenData101';
import DeveloperExperience from '../../../../../components/_shared/developer_experience/DeveloperExperience';
import ScrollIndicator from '../../../../../components/_shared/ScrollIndicator';
import Citation from '../../../../../components/_shared/Citation';
import { fixTranslations } from '../../../../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { ErrorMessage } from '../../../../../components/_shared';
import FourOhFour from '../../../../404';

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  console.log('======= FRONTEND ERROR LOG ==========');
  const { t } = useTranslation('common');
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>Loading</div>;
  if (error)
    return (
      <ErrorMessage error={error} message="Error loading data"></ErrorMessage>
    );
  console.log('======= FRONTEND ERROR DATASET ==========');
  if (!data?.dataset) {
    console.log('======= FROTEND DATASET NOT AVAILABLE ==========');
    return <FourOhFour></FourOhFour>;
  }
  const { result } = data.dataset;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );
  console.log('======= FRONTEND ERROR RESOURCE ==========');
  if (!resource) {
    console.log('======= FROTEND RESOURCE NOT AVAILABLE ==========');
    return <FourOhFour></FourOhFour>;
  }

  // fixTranslations(result);
  // fixTranslations(result.organization);
  // fixTranslations(resource);

  // if (!resource)
  //   return <ErrorMessage message="Error loading data"></ErrorMessage>;

  return (
    <>
      <Head>
        <title>{`${t('title')} | ${resource.title || resource.name}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBreadCrumbs
        navInfo={{
          resourceTitle: resource.title || resource.name,
          datasetTitle: result.title,
          datasetName: result.name,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />
      <main className={`flex flex-wrap mb-70 px-5 lg:px-12 lg:mr-10`}>
        <ScrollIndicator
          firstImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          lastImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          stops={[
            { id: 'about' },
            { id: 'chart-builder' },
            { id: 'developer-experience' },
            { id: 'open-data-101' },
          ]}
        />
        {/* Dataset About section */}
        <div id="about" className="w-full">
          <About variables={variables} />
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full mb-8" id="data-explorer">
          <DataExplorer dataset={result} columnHeaderStyle={null} />
        </div>

        {/* Citation */}
        <div className="w-full mb-8">
          <Citation dtype={t('resource-single')} title={resource.title} />
        </div>
        {/* Create Visualization */}
        <div className="w-full mb-8" id="chart-builder">
          <ChartBuilder resources={[resource]} />
        </div>
        <div className="w-full" id="developer-experience">
          <DeveloperExperience
            api={
              typeof window !== 'undefined'
                ? `${window.location.origin}/api/dataset/${
                    result.name
                  }/resource/${encodeURI(resource.name)}`
                : ''
            }
          />
        </div>
      </main>
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const variables = {
    id: context.query.dataset,
    resource: context.query.resource,
  };

  await apolloClient.query({
    query: GET_DATASET_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Resource;
