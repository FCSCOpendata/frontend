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
      <main className="flex flex-wrap px-12 mb-70">
        {/* Dataset About section */}
        <About variables={variables} />
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <DataExplorer dataset={result} columnHeaderStyle={null} />
        </div>

        {/* Create Visualization */}
        <ChartBuilder resources={[resource]} />
        <div className="w-full">
          <DeveloperExperience />
        </div>
      </main>
      <OpenData101 />
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
