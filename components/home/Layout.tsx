import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
