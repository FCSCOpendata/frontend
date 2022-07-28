import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { GET_CMS_SETTINGS } from '../../graphql/queries';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  const {
    data: settings,
    loading,
    error,
  } = useQuery(GET_CMS_SETTINGS, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Nav settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </>
  );
}
