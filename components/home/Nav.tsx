import Template from './NavTemplate';

const NavBar: React.FC = () => {
  const navMenu = [
    { title: 'Datasets', path: '/search' },
    { title: 'Organizations', path: '/organization', matchExp: '/@' },
    { title: 'Topics', path: '/topic' },
    { title: 'Open Data 101', path: '/p/open-data-101' },
    { title: 'Applications', path: '/p/application' },
  ];

  return <Template menu={navMenu} logo={'/images/bayanat-logo.svg'} />;
};

export default NavBar;
