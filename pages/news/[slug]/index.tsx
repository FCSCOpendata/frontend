import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Post from '../../../components/static/Post';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => (
  <>
    <Head>
      <title>Portal | {slug}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main className="grid place-content-center font-[Avenir]">
      <Post slug={slug} />
    </main>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  return {
    props: {
      slug,
    },
  };
};

export default PageItem;