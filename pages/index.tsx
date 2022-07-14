import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/home/Hero';
import MainOptions from '../components/home/MainOptions';
import OpenData101 from '../components/home/main/OpenData101';
import ScrollIndicator from '../components/_shared/ScrollIndicator';

const Home: React.FC<{ locale: any; locales: any }> = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container max-w-full mx-auto">
        <Head>
          <title>{t(`common:title`)}</title>
        </Head>
        <div className="relative bg-hero bg-lightestblue hero-pattern overflow-hidden h-screen">
          <div className="absolute right-10 top-[50%] translate-y-[-50%] z-50">
            <ScrollIndicator
              stops={[
                { name: '1' },
                { name: '2' },
                { name: '3' },
                { name: '4' },
              ]}
            />
          </div>
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
