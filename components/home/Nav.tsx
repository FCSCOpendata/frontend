import { useEffect, useState } from 'react';
import Template from './NavTemplate';

export const dynamicPages = ['search', 'organization', 'topic', 'news'];

const NavBar: React.FC<any> = ({ settings }) => {
  const [navMenu, setNavMenu] = useState([
    { title: 'Datasets', path: '/search' },
    { title: 'Organizations', path: '/organization', matchExp: '/@' },
    { title: 'Topics', path: '/topic' },
    { title: 'Open Data 101', path: '/p/open-data-101' },
    { title: 'News', path: '/news' },
  ]);

  useEffect(() => {
    const cmsNavigation = settings?.settings?.settings?.navigation
      ?.map((nav) => {
        // The URL can be absolute or relative
        // Gets the last segment of the URL
        let path;

        if (nav.url.includes('//')) {
          const tmp = /[^/]*\w*$/.exec(nav.url);
          path = tmp.length > 0 ? tmp[0] : '';
        } else path = nav.url;

        path = path.replaceAll('/', '');
        path = `${!dynamicPages.includes(path) ? '/p' : ''}/${path}`;

        return {
          title: nav.label,
          path: path.length > 0 ? path : null,
        };
      })
      .filter((el) => el.path != '');

    if (cmsNavigation) {
      setNavMenu(cmsNavigation);
    }
  }, [settings]);

  return <Template menu={navMenu} logo={'/images/bayanat-logo.svg'} />;
};

export default NavBar;
