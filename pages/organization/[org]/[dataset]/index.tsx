import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../lib/apolloClient';
import Nav from '../../../../components/home/Nav';
import About from '../../../../components/dataset/About';
import Footer from '../../../../components/home/Footer';
import { GET_DATASET_QUERY } from '../../../../graphql/queries';
import SimilarDatasets from '../../../../components/dataset/SimilarDatasets';
import BottomBanner from '../../../../components/_shared/BottomBanner';
import NavBreadCrumbs from '../../../../components/dataset/NavBreadCrumbs';
import DatasetNav from '../../../../components/dataset/DatasetNav';
import NavBody from '../../../../components/dataset/NavBody';
import { ErrorMessage } from '../../../../components/_shared';
import { useState } from 'react';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });
  // single page navbar rendering without change in route
  const [navBody, setNavBody] = useState('overview');

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />
      <main className="flex flex-wrap p-8 justify-center">
        <div className="sm:w-1/3">
          <About datasetData={result} />
        </div>
        <div className="flex flex-col sm:w-1/2">
          <DatasetNav setNavBody={setNavBody} />
          <NavBody navtype={navBody} datasetData={result} />
          <SimilarDatasets organization={result.organization} />
        </div>
      </main>
      <BottomBanner />
      <Footer />
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
