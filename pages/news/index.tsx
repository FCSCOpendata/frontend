import Head from 'next/head';
import List from '../../components/static/List';
import useTranslation from 'next-translate/useTranslation';

const News: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>
          {t('news')} | {t('title')}
        </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="relative bg-[#F7FAFC] font-avenir flex flex-col items-center justify-center w-full py-6 overflow-hidden">
        <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
        <h1 className="text-3xl font-extrabold">{t('news')}</h1>
      </div>
      <List />
    </>
  );
};

export default News;
