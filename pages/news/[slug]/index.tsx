import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useState } from 'react';
import Post from '../../../components/static/Post';
import SuggestedReads from '../../../components/static/SuggestedReads';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => {
  const { t } = useTranslation('common');
  const [post, setPost] = useState({} as any);

  return (
    <>
      <Head>
        <title>
          {post?.title} | {t('news')} | {t('title')}
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Post slug={slug} setPost={setPost} />
      <SuggestedReads from={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  return {
    props: {
      slug,
    },
  };
};

export default PageItem;
