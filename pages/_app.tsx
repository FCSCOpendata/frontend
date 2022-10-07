import { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import I18nProvider from 'next-translate/I18nProvider';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../cms/styles.css';
import Layout from '../components/home/Layout';
import NProgress from 'nprogress';
import Router from 'next/router';

interface I8nObject {
  [property: string]: any;
}

export async function loadNamespaces(
  namespaces: string[],
  lang: string
): Promise<I8nObject> {
  const res = {};
  for (const ns of namespaces) {
    res[ns] = await import(`../locales/${lang}/${ns}.json`).then(
      (m) => m.default
    );
  }
  return res;
}

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [theme] = useState(DEFAULT_THEME); // setTheme
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  useEffect(() => {
    /**
     * We can switch theme.
     * e.g. setTheme('primary');
     * */

    applyTheme(theme);
  }, [theme]);

  return (
    <I18nProvider lang={router.locale} namespaces={pageProps._ns}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </I18nProvider>
  );
};

export default MyApp;
