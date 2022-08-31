import Head from 'next/head';
import Link from 'next/link';
import List from '../../components/static/List';

const News: React.FC = () => (
  <>
    <Head>
      <title>News | Open Data UAE</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <div className="relative bg-[#F7FAFC] font-avenir flex flex-col items-center justify-center w-full py-6 overflow-hidden">
      <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
      <h1 className="text-3xl font-extrabold">News</h1>
    </div>
    <List />
  </>
);

export default News;
