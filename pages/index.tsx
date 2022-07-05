import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
import { SEARCH_QUERY } from '../graphql/queries';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/home/Hero';
import MainOptions from '../components/home/MainOptions';
import OpenData101 from '../components/home/main/OpenData101';

const Home: React.FC<{ locale: any; locales: any }> = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container max-w-full mx-auto">
        <Head>
          <title>{t(`common:title`)}</title>
        </Head>
        <div className="relative bg-hero bg-lightestblue hero-pattern overflow-hidden h-screen">
          <Hero />
        </div>
        <MainOptions />
        <OpenData101 />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  locales,
}) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SEARCH_QUERY,
    variables: {
      sort: 'metadata_created desc',
      rows: 3,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      _ns: await loadNamespaces(['common'], locale),
      locale,
      locales,
    },
  };
};

export default Home;
