import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../../../graphql/queries';
import NavBreadCrumbs from '../../../../../components/dataset/NavBreadCrumbs';
import Link from 'next/link';
import DataExplorer from '../../../../../components/resource/ResourceExplorer';

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  const result = data.dataset.result;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  console.log(resource);
  return (
    <>
      <Head>
        <title>Portal | {resource.title || resource.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />
      <main className="flex flex-wrap px-12 mb-96">
        {/* Dataset About section */}
        <div className="flex flex-col mb-10">
          <div className="flex xl:flex-row flex-col mb-4 text-[#4D4D4D] font-[Avenir] font-extrabold text-[36px] items-baseline">
            <img
              src="/images/csv-icon.svg"
              alt="Dataset title"
              className="inline w-6 xl:mr-2"
            />
            <h1 className="inline mr-4">
              {resource.name}{' '}
              <img
                src="/images/plant-icon.svg"
                alt="Dataset title"
                className="inline w-6"
              />
            </h1>
          </div>
          <article className="font-[Avenir] text-[#7C7C7C] text-[20px] font-normal mb-4">
            {resource.description?.replace(/<[^>]*>?/gm, '') ||
              'This dataset does not have a description yet.'}
          </article>
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <DataExplorer resources={[resource]} columnHeaderStyle={null} />
        </div>

        {/* Create Visualization */}
        <div className="flex  justify-start w-full py-10 pl-0">
          <div className="flex flex-col items-between h-full w-1/2 mb-10">
            <div className="self-start mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
              <p>Create Visualization</p>
            </div>
            <div className="flex flex-row bg-[#F7FAFC] justify-between p-2 rounded-xl w-4/6">
              <button className="flex items-baseline py-4 px-4  bg-button-gradient rounded-2xl text-white justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/pie-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-2"
                />
                Build Basic Charts
              </button>
              <button className="flex items-baseline py-4 px-4 text-[#202020] justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/app-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-4 text-white"
                />
                Build Your Own Application
              </button>
            </div>
          </div>
        </div>
      </main>
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
