import { MouseEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AR } from '../../hooks/locale';

const languages = ['ar', 'en'];

const NavBar: React.FC<{ menu: any; logo: string }> = ({ menu, logo }) => {
  const router = useRouter();

  function handleLocale(e: MouseEvent<HTMLButtonElement>) {
    router.push(router.asPath, null, {
      locale: e.currentTarget.value.toLocaleLowerCase(),
    });
  }

  useEffect(() => {
    const dir = router.locale.toLowerCase() == 'ar' ? 'rtl' : 'ltr';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', router.locale);
  }, [router.locale]);

  return (
    <Disclosure as="nav" className={`bg-white`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:px-14">
            <div className="flex justify-between h-24">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a href="/">
                      <img
                        className="block lg:hidden h-10 w-auto"
                        src={logo}
                        alt="bayanat.ae"
                      />
                      <img
                        className="hidden lg:block h-7 w-auto"
                        src={logo}
                        alt="bayanat.ae"
                      />
                    </a>
                  </Link>
                </div>
                <div
                  className={`hidden lg:flex lg:space-x-6 ${
                    AR() ? 'lg:mr-8' : 'lg:ml-8 '
                  }`}
                >
                  {menu.map((item, index) => (
                    <Link key={'menu-link' + index} href={item.path}>
                      <a
                        href={item.path}
                        className="group relative self-center h-fit text-black inline-flex items-center px-2 pt-1 text-[13px] leading--[0] tracking-widest uppercase font-poppins font-medium"
                      >
                        {item.title}
                        <span
                          className={`hidden lg:opacity-0 lg:flex absolute left-3 right-3 -bottom-2.5 h-0.5 ease-in-out duration-300
                          ${
                            router.asPath.startsWith(item.path) ||
                            router.asPath.startsWith(item.matchExp)
                              ? 'lg:opacity-100 bg-nav-underline'
                              : 'group-hover:bg-nav-underline lg:group-hover:opacity-100'
                          }
                        `}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="space-x-2 text-[#525252]">
                  {languages.map((name) => (
                    <input
                      key={name}
                      type="button"
                      value={name.toUpperCase()}
                      onClick={handleLocale}
                      className={`
                        rounded-[3px] py-1 px-2 uppercase cursor-pointer
                        ${
                          router.locale.toLocaleLowerCase() ==
                          name.toLocaleLowerCase()
                            ? 'bg-lang-gradient text-white'
                            : 'bg-transparent text-inherit'
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menu.map((item, index) => (
                <Link key={'mobile-menu-link' + index} href={item.path}>
                  <a
                    href={item.href}
                    className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
