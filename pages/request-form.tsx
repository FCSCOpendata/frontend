import Head from 'next/head';
import OpenData101 from '../components/home/main/OpenData101';
import RequestData from '../components/request/RequestData';

const Request: React.FC = () => {
  return (
    <>
      <Head>
        <title>Request Form</title>
      </Head>
      <RequestData />
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export default Request;
