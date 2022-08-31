import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'G-NX72GYFHFS';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || 'en' };
  }

  render() {
    return (
      <Html
        dir={this.props.locale.toLowerCase() === 'ar' ? 'rtl' : 'ltr'}
        lang={this.props.locale}
      >
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NX72GYFHFS"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}',{
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
