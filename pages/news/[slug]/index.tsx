import { useQuery } from '@apollo/react-hooks';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Post from '../../../components/static/Post';
import SuggestedReads from '../../../components/static/SuggestedReads';
import { GET_POST_QUERY } from '../../../graphql/queries';
import { initializeApollo } from '../../../lib/apolloClient';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { data } = useQuery(GET_POST_QUERY, {
    variables: { slug },
  });

  //  Ensures that the URL is right after
  //  switching language
  useEffect(() => {
    router.query.slug = slug;
    router.push(router, null, { shallow: true });
  }, [router.locale]);

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
  let slug = context.query.slug as string;

  //  It's needed to ensure that when the language
  //  is set to Arabic the Arabic posts are pulled
  if (context.locale.toLowerCase() == 'ar') {
    //  Checks if current slug starts with 'ar-'
    if (!slug.startsWith('ar-')) {
      slug = `ar-${slug}`;
    }
  } else {
    if (slug.startsWith('ar-')) {
      slug = slug.replace('ar-', '');
    }
  }

  const apolloClient = initializeApollo();

  const queryParams = {
    query: GET_POST_QUERY,
    variables: { slug },
  };

  await apolloClient.query(queryParams);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug,
    },
  };
};

export default PageItem;
