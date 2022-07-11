import Link from 'next/link';

const Footer: React.FC = () => {
  const navigation = {
    menu: [
      { name: 'Datasets', href: '/search' },
      { name: 'Organizations', href: '/organization' },
      { name: 'Topics', href: '/topic' },
      { name: 'Open Data 101', href: '/p/open-data-101' },
      { name: 'Applications', href: '/p/application' },
      { name: 'Community', href: '/p/community' },
      { name: 'About', href: '/p/about' },
      { name: 'Contact', href: '/p/contact' },
    ],
    social: [],
  };

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
            <p className="mt-4 mb-4 text-[#001240] text-lg leading-[22px] font-montserrat font-semibold">
              Official Portal of the UAE government
            </p>
            <ul className="flex space-x-6 text-sm list-none">
              {navigation.menu.map((item) => (
                <li key={item.name}>
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
