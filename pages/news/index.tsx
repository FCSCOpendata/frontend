import Head from 'next/head';
import List from '../../components/static/List';

const News: React.FC = () => (
  <>
    <Head>
      <title>Portal | News</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main className="grid place-content-center font-[Avenir] mb-12">
      <h1 className="text-3xl font-extrabold">News</h1>
      <List />
    </main>
  </>
);

export default News;
