import Head from 'next/head';
import OpenData101 from '../components/home/main/OpenData101';
import RequestData from '../components/request/RequestData';
import useTranslation from 'next-translate/useTranslation';

const Request: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('request-header')}</title>
      </Head>
      <RequestData />
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export default Request;
