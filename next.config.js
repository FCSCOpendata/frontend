const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextTranslate = require('next-translate');

module.exports = (phase, { defaultConfig }) => {
  const dms = process.env.DMS;
  const cms = process.env.CMS;
  const cmsKey = process.env.CMS_KEY;
  const MAIL_PORT = process.env.EMAIL_PORT;
  const MAIL_SERVER = process.env.MAIL_SERVER;
  const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
  const MAIL_ACCOUNT = process.env.MAIL_ACCOUNT;
  const REQUEST_DATA_EMAIL = process.env.REQUEST_DATA_EMAIL;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    if (dms) {
      console.log('\nYou are running the app in dev mode 🌀');
      console.log(
        'Did you know that you can use mocked CKAN API? Just unset your `DMS` env var.'
      );
      console.log('Happy coding ☀️\n');
    } else {
      const mocks = require('./mocks');
      mocks.initMocks();
      console.log(
        '\nYou have not defined any DMS API so we are activating the mocks ⚠️'
      );
      console.log(
        'If you wish to run against your CKAN API, you can set `DMS` env var.'
      );
      console.log(
        'For example, to run against demo ckan site: `DMS=https://demo.ckan.org`\n'
      );
    }

    return nextTranslate({
      publicRuntimeConfig: {
        DMS: dms ? dms.replace(/\/?$/, '') : 'http://mock.ckan',
        CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
        CMS_KEY: cmsKey,
      },
      serverRuntimeConfig: {
        DMS: dms ? dms.replace(/\/?$/, '') : 'http://mock.ckan',
        CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
        CMS_KEY: cmsKey,
        MAIL_PORT,
        MAIL_PASSWORD,
        MAIL_SERVER,
        CONTACT_EMAIL,
        MAIL_ACCOUNT,
        REQUEST_DATA_EMAIL,
      },
      async rewrites() {
        return {
          afterFiles: [
            {
              source:
                '/dataset/:datasetId/resource/:resourceId/download/:file',
              destination: `${
                dms ? dms.replace(/\/?$/, '') : 'https://demo.dev.datopian.com'
              }/dataset/:datasetId/resource/:resourceId/download/:file`,
            },
          ],
        };
      },
      images: {
        domains: [
          dms.replace(/\/?$/, '').replace(/https:\/\//, ''),
          cms.replace(/\/?$/, '').replace(/https:\/\//, ''),
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
          "default-src 'self'; script-src 'none'; sandbox;",
      },
    });
  }
  return nextTranslate({
    publicRuntimeConfig: {
      DMS: dms ? dms.replace(/\/?$/, '') : 'https://demo.dev.datopian.com',
      CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
      CMS_KEY: cmsKey,
    },
    serverRuntimeConfig: {
      DMS: dms ? dms.replace(/\/?$/, '') : 'https://demo.dev.datopian.com',
      CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
      CMS_KEY: cmsKey,
      MAIL_PORT,
      MAIL_PASSWORD,
      MAIL_SERVER,
      CONTACT_EMAIL,
      MAIL_ACCOUNT,
      REQUEST_DATA_EMAIL,
    },
    async rewrites() {
      return {
        afterFiles: [
          {
            source: '/dataset/:datasetId/resource/:resourceId/download/:file',
            destination: `${
              dms ? dms.replace(/\/?$/, '') : 'https://demo.dev.datopian.com'
            }/dataset/:datasetId/resource/:resourceId/download/:file`,
          },
        ],
      };
    },
    output: 'standalone',
    images: {
      domains: [
        dms.replace(/\/?$/, '').replace(/https:\/\//, ''),
        cms.replace(/\/?$/, '').replace(/https:\/\//, ''),
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  });
};
