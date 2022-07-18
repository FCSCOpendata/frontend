import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Post from '../../../components/static/Post';
import SuggestedReads from '../../../components/static/SuggestedReads';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => {
  const [post, setPost] = useState({});

  return (
    <>
      <Head>
        <title>Portal | {slug}</title>
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
