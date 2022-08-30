import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/home/Hero';
import MainOptions from '../components/home/MainOptions';
import OpenData101 from '../components/home/main/OpenData101';
import ScrollIndicator from '../components/_shared/ScrollIndicator';
import { useRouter } from 'next/router';

const Home: React.FC<{ locale: any; locales: any }> = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  return (
    <>
      <div className="container max-w-full mx-auto">
        <Head>
          <title>{t(`common:title`)}</title>
        </Head>
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
            { id: 'hero' },
            { id: 'discover-topics' },
            { id: 'explore-orgs' },
            { id: 'news' },
            { id: 'open-data-101' },
          ]}
        />
      </div>
      <div
        className={`relative ${
          locale.toLowerCase() == 'ar' ? 'bg-hero-RTL' : 'bg-hero'
        } bg-lightestblue hero-pattern overflow-hidden h-screen`}
        id="hero"
      >
        <Hero />
      </div>
      <MainOptions />
      <div id="open-data-101">
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
