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

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  const { result } = data.dataset;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  return (
    <>
      <Head>
        <title>{resource.title || resource.name} | Open Data UAE</title>
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
      <main className="flex flex-wrap pl-12 pr-20 mb-70">
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
        <div id="about">
          <About variables={variables} />
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full" id="data-explorer">
          <DataExplorer dataset={result} columnHeaderStyle={null} />
        </div>

        {/* Create Visualization */}
        <div className="w-full" id="chart-builder">
          <ChartBuilder resources={[resource]} />
        </div>
        <div className="w-full" id="developer-experience">
          <DeveloperExperience />
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
