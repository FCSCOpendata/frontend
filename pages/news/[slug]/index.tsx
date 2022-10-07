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
import FourOhFour from '../../404';

const PageItem: React.FC<{
  slug: string;
  variables: any;
}> = ({ slug, variables }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { data } = useQuery(GET_POST_QUERY, { variables });

  //  Ensures that the URL is right after
  //  switching language
  useEffect(() => {
    router.query.slug = slug;
    router.push(router, null, { shallow: true });
  }, [router.locale]);

  const post = data?.post?.posts[0];

  if (!post) return <FourOhFour></FourOhFour>;

  return (
    <>
      <Head>
        <title>
          {post?.title} | {t('news')} | {t('title')}
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Post variables={{ slug }} />
      {post && <SuggestedReads from={post} />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let slug = context.query.slug as string;

  //  The posts might not have  a  translation,
  //  in this case, the equivalent post should
  //  be displayed
  const slugEn = slug.replace(/^ar-/, '');
  const slugAr = 'ar-' + slugEn;

  const apolloClient = initializeApollo();

  const variablesEn = {
    slug: slugEn,
  };

  const variablesAr = {
    slug: slugAr,
  };

  await apolloClient.query({ query: GET_POST_QUERY, variables: variablesEn });
  await apolloClient.query({ query: GET_POST_QUERY, variables: variablesAr });

  const dataEn = apolloClient.readQuery({
    query: GET_POST_QUERY,
    variables: variablesEn,
  });

  const dataAr = apolloClient.readQuery({
    query: GET_POST_QUERY,
    variables: variablesAr,
  });

  let variables = variablesEn;
  if (context.locale.toLowerCase() == 'ar') {
    if (dataAr.post?.posts) {
      variables = variablesAr;
      slug = slugAr;
    } else {
      variables = variablesEn;
      slug = slugEn;
    }
  } else {
    if (dataEn.post?.posts) {
      variables = variablesEn;
      slug = slugEn;
    } else {
      variables = variablesAr;
      slug = slugAr;
    }
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
      slug,
    },
  };
};

export default PageItem;
