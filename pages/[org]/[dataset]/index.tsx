/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { SelectorIcon, CloudDownloadIcon } from '@heroicons/react/outline';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../graphql/queries';
import NavBreadCrumbs from '../../../components/dataset/NavBreadCrumbs';
import About from '../../../components/dataset/About';
import SimilarDatasets from '../../../components/dataset/SimilarDatasets';
import { ErrorMessage } from '../../../components/_shared';
import DataExplorer from '../../../components/dataset/DataExplorer';
import OpenData101 from '../../../components/home/main/OpenData101';
import DeveloperExperience from '../../../components/_shared/developer_experience/DeveloperExperience';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />

      <main className="flex flex-wrap px-12 mb-70">
        {/* Dataset About section */}
        <About variables={variables} />
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-baseline font-[Avenir] font-medium text-[16px] text-[#4D4D4D] leading-6 mb-4">
            <SelectorIcon className="w-4 mr-2" />
            <span className="mr-4">Select</span>
            <CloudDownloadIcon className="w-4 mr-2" />
            <span>Download all</span>
          </div>
          <div className="flex flex-row mb-10">
            <DataExplorer
              resources={result.resources}
              columnHeaderStyle={null}
            />
          </div>
        </div>

        {/* Similar Dataset */}
        <SimilarDatasets variables={variables} />
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

export default Dataset;
