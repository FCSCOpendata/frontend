import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Page from '../../../components/static/Page';

const PageItem: React.FC<{ slug: string }> = ({ slug }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Page slug={slug} />
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
