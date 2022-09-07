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
import { GET_PAGES_BY_TAG_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const Home: React.FC<{ locale: any; locales: any }> = () => {
  //  This gets the CMS page that has the tag
  //  'hash-hero-section' to pull the  custom
  //  images for the header
  const { data } = useQuery(GET_PAGES_BY_TAG_QUERY, {
    variables: {
      tag: 'hash-hero-section',
    },
  });

  const page =
    data?.page?.pages && data?.page?.pages.length > 0
      ? data?.page?.pages[0]
      : {};
  const heroImages = [
    {
      url: '/images/hero-image-1.svg',
      alt: 'UAE places and attractions',
    },
    {
      url: '/images/hero-image-2.svg',
      alt: 'Workspace',
    },
    {
      url: '/images/hero-image-3.svg',
      alt: 'Police robot',
    },
    {
      url: '/images/hero-image-4.svg',
      alt: 'Beautiful beach in the UAE',
    },
  ];

  if(Object.keys(page).length) {
    const html = page.html;
    const regexp = /(?<=<img).*?(?=>)/g;
    const images = html.match(regexp);

    const getProps = (entry) => {
      let url = entry.match(/(?<=src=").*?(?=")/)
      let alt = entry.match(/(?<=alt=").*?(?=")/)

      url = url ? url[0] : null;
      alt = alt ? alt[0] : "";

      return {
        url,
        alt
      }
    }

    let i;
    let max = heroImages.length < images.length ? heroImages.length : images.length;
    for(i = 0; i < max; i++) {
      heroImages[i] = getProps(images[i]); 
    }

  }

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
            src={heroImages[0].url}
            className="rounded-2xl"
            alt={heroImages[0].alt}
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
            src={heroImages[1].url}
            className="rounded-2xl"
            alt={heroImages[1].alt}
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
            src={heroImages[2].url}
            className="rounded-2xl"
            alt={heroImages[2].alt}
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
            src={heroImages[3].url}
            className="rounded-2xl"
            alt={heroImages[3].alt}
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

  await apolloClient.query({
    query: GET_PAGES_BY_TAG_QUERY,
    variables: {
      //  This value is fixed
      tag: 'hash-hero-section',
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
