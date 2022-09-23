import { useQuery } from '@apollo/react-hooks';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Post from '../../../components/static/Post';
import SuggestedReads from '../../../components/static/SuggestedReads';
import { GET_POST_QUERY } from '../../../graphql/queries';
import { initializeApollo } from '../../../lib/apolloClient';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => {
  const { t } = useTranslation('common');

  const { data } = useQuery(GET_POST_QUERY, {
    variables: { slug },
  });

  const post = data?.post?.posts[0];

  return (
    <>
      <Head>
        <title>
          {post?.title} | {t('news')} | {t('title')}
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Post slug={slug} />
      {post && <SuggestedReads from={post} />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POST_QUERY,
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
