import Head from 'next/head';
import OpenData101 from '../components/home/main/OpenData101';
import Contacts from '../components/contact/Contact';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Contacts />
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export default Contact;
