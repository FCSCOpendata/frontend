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
        {/* Hero image tiles */}
        <div
          className="absolute 
          2xl:right-[32%] 2xl:top-[2%]
          xl:right-[26%] xl:top-[5%]
          lg:right-[18%] lg:top-[5%]
          hidden lg:block"
        >
          <img
            src="/images/hero-image-1.svg"
            className="rounded-2xl"
            alt="First header item"
          />
        </div>
        <div
          className="absolute 
          2xl:right-[17%] 2xl:top-[15%]
          xl:right-[10%] xl:top-[22%]
          lg:right-[-2%] lg:top-[22%]
          hidden lg:block"
        >
          <img
            src="/images/hero-image-2.svg"
            className="rounded-2xl"
            alt="Second header item"
          />
        </div>
        <div
          className="absolute 
          2xl:right-[35%] 2xl:top-[45%]
          xl:right-[30%] xl:top-[45%]
          lg:right-[24%] lg:top-[48%]
          hidden lg:block"
        >
          <img
            src="/images/hero-image-3.svg"
            className="rounded-2xl"
            alt="Third header item"
          />
        </div>
        <div
          className="absolute 
          2xl:right-[20%] 2xl:top-[70%]
          xl:right-[15%] xl:top-[70%]
          lg:right-[12%] lg:top-[78%]
          hidden lg:block"
        >
          <img
            src="/images/hero-image-4.svg"
            className="rounded-2xl"
            alt="Fourth header item"
          />
        </div>

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
