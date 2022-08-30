import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AR } from '../../hooks/locale';
import { dynamicPages } from './Nav';

const Footer: React.FC<any> = ({ settings }) => {
  const [navigation, setNavigation] = useState({
    menu: [
      { name: 'Datasets', href: '/search' },
      { name: 'Organizations', href: '/organization' },
      { name: 'Topics', href: '/topic' },
      { name: 'Open Data 101', href: '/p/open-data-101' },
      { name: 'News', href: '/news' },
      { name: 'About', href: '/p/about' },
      { name: 'Terms of Use', href: '/p/terms-of-use' },
      { name: 'Contact', href: '/p/contact' },
    ],
    social: [],
  });

  useEffect(() => {
    const cmsNavigation = settings?.settings?.settings?.secondary_navigation
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
          name: nav.label,
          href: path.length > 0 ? path : null,
        };
      })
      .filter((el) => el.path != '');

    if (cmsNavigation) {
      setNavigation({ menu: cmsNavigation, social: [] });
    }
  }, [settings]);

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute h-full -left-14 right-0 bg-footer-background -z-10" />
      <div className="mb-10 px-14">
        <div className="flex flex-col flex-wrap mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <img
            className="h-8"
            src="/images/bayanat-logo.svg"
            alt="bayanat.ae"
          />
        </div>
        <div className="flex flex-col flex-wrap mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="w-full text-center md:text-left">
            <p
              className={`mt-4 mb-4 text-[#001240] text-lg leading-[22px] font-montserrat font-semibold ${
                AR() ? 'text-right' : 'text-left'
              }`}
            >
              Official Portal of the UAE government
            </p>
            <ul className="flex space-x-6 text-sm list-none">
              {navigation.menu.map((item) => (
                <li key={item.name} className={AR() ? 'ml-5' : ''}>
                  <Link href={item.href}>
                    <a
                      href={item.href}
                      className="font-poppins font-medium text-[13px] leading-[0] tracking-widest uppercase"
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
