import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Page from '../../../components/static/Page';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => (
  <>
    <Head>
      <title>Portal | {slug}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main className="grid place-content-center">
      <Page slug={slug} />
    </main>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.page;
  return {
    props: {
      slug,
    },
  };
};

export default PageItem;
