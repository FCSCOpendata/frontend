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
import { AR } from '../hooks/locale';
import Image from 'next/image';

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

  if (Object.keys(page).length > 0) {
    const html = page.html;
    const regexp = /(?<=<img).*?(?=>)/g;

    if (html) {
      const images = html.match(regexp);

      const getProps = (entry) => {
        let url = entry.match(/(?<=src=").*?(?=")/);
        let alt = entry.match(/(?<=alt=").*?(?=")/);

        url = url ? url[0] : null;
        alt = alt ? alt[0] : '';

        return {
          url,
          alt,
        };
      };

      let i;
      const max =
        heroImages.length < images.length ? heroImages.length : images.length;
      for (i = 0; i < max; i++) {
        heroImages[i] = getProps(images[i]);
      }
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
        className={`relative ${AR(
          'bg-hero-RTL',
          'bg-hero'
        )} bg-lightestblue hero-pattern overflow-hidden h-screen`}
        id="hero"
      >
        {/* Hero image tiles */}
        <div
          className={`absolute
          ${AR(
            'right-[calc(68vw-(100vw-1024px)/4)] 3xl:right-[calc(57vw+(100vw-1600px)/8)] top-[8%] 3xl:top-[calc(8%-(100vw-1600px)/5)]',
            'left-[calc(68vw-(100vw-1024px)/4)] 3xl:left-[calc(57vw+(100vw-1600px)/8)] top-[8%] 3xl:top-[calc(8%-(100vw-1600px)/5)]'
          )}
          hidden lg:block w-[150px] 3xl:w-[calc(155px+(100vw-1600px)/30)]`}
        >
          <Image
            layout="responsive"
            width={170}
            height={170}
            src={heroImages[0].url}
            className="rounded-[35px] border-white border-[10px] box-content"
            alt={heroImages[0].alt}
          />
        </div>
        <div
          className={`absolute w-full
          ${AR(
            'right-[calc(92vw-(100vw-1024px)/2)] 3xl:right-[calc(72vw+(100vw-1600px)/8)] top-[18%] 3xl:top-[calc(21%-(100vw-1600px)/5)]',
            'left-[calc(92vw-(100vw-1024px)/2)] 3xl:left-[calc(72vw+(100vw-1600px)/8)] top-[18%] 3xl:top-[calc(21%-(100vw-1600px)/5)]'
          )}
          hidden lg:block w-[150px] 3xl:w-[calc(155px+(100vw-1600px)/30)]`}
        >
          <Image
            layout="responsive"
            width={170}
            height={170}
            src={heroImages[1].url}
            className="rounded-[35px] border-white border-[10px] box-content"
            alt={heroImages[1].alt}
          />
        </div>
        <div
          className={`absolute
          ${AR(
            'right-[calc(64vw-(100vw-1024px)/4)] 3xl:right-[calc(53vw+(100vw-1600px)/8)] top-[49%] 3xl:top-[calc(58%-(100vw-1600px)/5)]',
            'left-[calc(64vw-(100vw-1024px)/4)] 3xl:left-[calc(53vw+(100vw-1600px)/8)] top-[49%] 3xl:top-[calc(58%-(100vw-1600px)/5)]'
          )}
          hidden lg:block w-[150px] 3xl:w-[calc(155px+(100vw-1600px)/30)]`}
        >
          <Image
            layout="responsive"
            width={170}
            height={170}
            src={heroImages[2].url}
            className="rounded-[35px] border-white border-[10px] box-content"
            alt={heroImages[2].alt}
          />
        </div>
        <div
          className={`absolute w-full
          ${AR(
            'right-[calc(90vw-(100vw-1024px)/2)] top-[59%] 3xl:right-[calc(70vw+(100vw-1600px)/8)] 3xl:top-[calc(65%-(100vw-1600px)/30)]',
            'left-[calc(90vw-(100vw-1024px)/2)] top-[59%] 3xl:left-[calc(70vw+(100vw-1600px)/8)] 3xl:top-[calc(65%-(100vw-1600px)/30)]'
          )}
          hidden lg:block w-[150px] 3xl:w-[calc(155px+(100vw-1600px)/30)]`}
        >
          <Image
            layout="responsive"
            width={170}
            height={170}
            src={heroImages[3].url}
            className="rounded-[35px] border-white border-[10px] box-content"
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
