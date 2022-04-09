// import { useState } from 'react';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
// import { SearchIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NavBar: React.FC<{ menu: any; logo: string }> = ({ menu, logo }) => {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className={`shadow ${router.pathname != '/' ? 'bg-black' : null}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="">
                    <img
                      className="block lg:hidden h-10 w-auto"
                      src={logo}
                      alt="Portal.js"
                    />
                    <img
                      className="hidden lg:block h-10 w-auto"
                      src={logo}
                      alt="Portal.js"
                    />
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {menu.map((item, index) => (
                    <a
                      key={'menu-link' + index}
                      href={item.path}
                      className="border-transparent text-white hover:border-gray-300 hover:text-gray-200 inline-flex items-center px-2 pt-1 border-b-2 text-base uppercase font-medium"
                    >
                      {item.title}
                    </a>
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
                <a
                  key={'mobile-menu-link' + index}
                  href={item.path}
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
