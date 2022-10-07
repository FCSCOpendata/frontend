import { useQuery } from '@apollo/react-hooks';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Page from '../../../components/static/Page';
import { GET_PAGE_QUERY } from '../../../graphql/queries';
import { AR } from '../../../hooks/locale';
import { initializeApollo } from '../../../lib/apolloClient';
import FourOhFour from '../../404';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => {
  const { t } = useTranslation('common');

  const { data } = useQuery(GET_PAGE_QUERY, {
    variables: { slug: AR(`ar-${slug}`, slug) },
  });

  const page = data?.page?.pages[0];

  if (!page) return <FourOhFour></FourOhFour>;

  return (
    <>
      <Head>
        {page?.title} | {t('title')}
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Page slug={slug} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.page;

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PAGE_QUERY,
    variables: { slug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug,
    },
  };
};

export default PageItem;
