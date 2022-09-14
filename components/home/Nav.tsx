import { useEffect, useState } from 'react';
import Template from './NavTemplate';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
//  This variable is for listing the hrefs that
//  are not related to CMS pages.  Furthermore,
//  This is needed to check if there should  be
//  a /p/ at the final URL or not.
export const dynamicPages = [
  'search',
  'organization',
  'topic',
  'news',
  'contact',
  'request-form',
];

const NavBar: React.FC<any> = ({ settings }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  //  This initial state behaves as a default,
  //  just in case the servers are unavailable
  //  or something like that.
  const [navMenu, setNavMenu] = useState([
    { title: t('dataset'), path: '/search' },
    { title: t('organization'), path: '/organization', matchExp: '/@' },
    { title: t('topics'), path: '/topic' },
    { title: t('opendata'), path: '/p/open-data-101' },
    { title: t('news'), path: '/news' },
    { title: t('request-header'), path: '/request-form' },
  ]);

  useEffect(() => {
    const navigation_en = settings?.settings?.settings?.navigation.filter(
      (nav) => !nav.url.includes('/ar-')
    );

    const navigation_ar = settings?.settings?.settings?.navigation.filter(
      (nav) => nav.url.includes('/ar-')
    );

    const navigation = navigation_en?.map((nav) => {
      const ar = navigation_ar?.find(
        (el) => el.url.replace('/ar-', '/') == nav.url
      );

      return {
        label: {
          en: nav.label,
          ar: ar?.label,
        },
        url: nav.url,
      };
    });

    const cmsNavigation = navigation
      ?.map((nav) => {
        // The URL can be absolute or relative
        // Gets the last segment of the URL
        let path;

        //  If the path has a `//` it should be
        //  an absolute path
        if (nav.url.includes('//')) {
          //  Gets only the last segment, after
          //  the last '/'
          const tmp = /[^/]*\w*$/.exec(nav.url);
          path = tmp.length > 0 ? tmp[0] : '';
        } else path = nav.url;

        path = path.replaceAll('/', '');
        //  Adds the '/p/' if necessary
        path = `${!dynamicPages.includes(path) ? '/p' : ''}/${path}`;

        //  Can be refactored in  case  there's
        //  any other page that needs this kind
        //  kind of handling.
        const matchExp = path == '/organization' ? '/@' : undefined;

        let label = nav.label.en;

        if (locale.toLocaleLowerCase() == 'ar' && nav.label.ar) {
          label = nav.label.ar;
        }

        return {
          title: label,
          path: path.length > 0 ? path : null,
          matchExp: matchExp,
        };
      })
      //  Filters empty paths
      .filter((el) => el.path != '');

    if (cmsNavigation) {
      setNavMenu(cmsNavigation);
    }
  }, [settings, locale]);

  return <Template menu={navMenu} logo={'/images/bayanat-logo.svg'} />;
};

export default NavBar;
