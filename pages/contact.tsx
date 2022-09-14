import Head from 'next/head';
import OpenData101 from '../components/home/main/OpenData101';
import Contacts from '../components/contact/Contact';
import useTranslation from 'next-translate/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('contact')}</title>
      </Head>
      <Contacts />
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export default Contact;
