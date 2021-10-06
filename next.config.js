const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const dms = process.env.DMS;
  const cms = process.env.CMS;
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

    return {
      i18n: {
        locales: ['en', 'fr', 'nl-NL'],
        defaultLocale: 'en',
      },
      publicRuntimeConfig: {
        DMS: dms ? dms.replace(/\/?$/, '') : 'http://mock.ckan',
        CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
      },
    };
  }
  return {
    i18n: {
      locales: ['en', 'fr', 'nl-NL'],
      defaultLocale: 'en',
    },
    publicRuntimeConfig: {
      DMS: dms ? dms.replace(/\/?$/, '') : 'https://demo.dev.datopian.com',
      CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
    },
  };
};
