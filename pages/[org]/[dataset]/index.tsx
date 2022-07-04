import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../graphql/queries';
import NavBreadCrumbs from '../../../components/dataset/NavBreadCrumbs';
import { ErrorMessage } from '../../../components/_shared';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />

      <main className="flex flex-wrap pl-12 mb-96">
        <div className="flex flex-col">
          <div className="flex flex-row mb-4 text-[#4D4D4D] font-[Avenir] font-extrabold text-[36px]">
            <div className="mr-4">
              Child Counts And Educational Enviroments
            </div>
            <img src="/images/plant-icon.svg" alt="orgs" className="w-5" />
          </div>
          <div className="grid grid-cols-4 mb-4 w-1/2 text-[#787878] text-[20px] font-normal">
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-5 h-3"
              />
              <span>Organization: UNESCO</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/satelite-icon.svg"
                alt="orgs"
                className="w-5 h-3 "
              />
              <span>Created: 27 Nov 2021</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img src="/images/bus-icon.svg" alt="orgs" className="w-5 h-3" />
              <span>Last Updated: 37 minutes ago</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/edu-icon.svg"
                alt="orgs"
                className="w-5  h-3"
              />
              <span>Licene: Creative Commons</span>
            </div>
          </div>
          <article className="font-[Avenir] text-[#7C7C7C] text-[20px] font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            quod doloremque illo sint! Unde natus ipsum laboriosam culpa
            labore, debitis esse doloremque. Quaerat, dolor incidunt laborum
            ipsum eaque assumenda ratione. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Cumque quod doloremque illo sint!
            Unde natus ipsum laboriosam culpa labore, debitis esse doloremque.
            Quaerat, dolor incidunt laborum ipsum eaque assumenda ratione.
          </article>
          <div className="flex flex-row font-[Avenir] font-medium text-[15px] text-[#086F06]">
            <button className="rounded-full bg-[#80E47E] py-2 px-4 mr-4">
              Keyword 1
            </button>
            <button className="rounded-full bg-[#80E47E] py-2 px-4 mr-4">
              Keyword 2
            </button>
            <button className="rounded-full bg-[#80E47E] py-2 px-4 ">
              Keyword 3
            </button>
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
