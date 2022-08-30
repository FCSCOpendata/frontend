import { useEffect, useState } from 'react';
import Template from './NavTemplate';

//  This variable is for listing the hrefs that
//  are not related to CMS pages.  Furthermore,
//  This is needed to check if there should  be
//  a /p/ at the final URL or not.
export const dynamicPages = ['search', 'organization', 'topic', 'news'];

const NavBar: React.FC<any> = ({ settings }) => {
  //  This initial state behaves as a default,
  //  just in case the servers are unavailable
  //  or something like that.
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

        return {
          title: nav.label,
          path: path.length > 0 ? path : null,
          matchExp: nav.matchExp
        };
      })
      //  Filters empty paths
      .filter((el) => el.path != '');

    if (cmsNavigation) {
      setNavMenu(cmsNavigation);
    }
  }, [settings]);

  return <Template menu={navMenu} logo={'/images/bayanat-logo.svg'} />;
};

export default NavBar;
