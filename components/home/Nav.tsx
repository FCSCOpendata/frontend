import Template from './NavTemplate';

const NavBar: React.FC = () => {
  const navMenu = [
    { title: 'Datasets', path: '/search' },
    { title: 'Organizations', path: '/organizations' },
    { title: 'Topics', path: '/topics' },
    { title: 'Open Data 101', path: '/open-data-101' },
    { title: 'Applications', path: '/applications' },
  ];

  return <Template menu={navMenu} logo={'/images/bayanat-logo.svg'} />;
};

export default NavBar;
