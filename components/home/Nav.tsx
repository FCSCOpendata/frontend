import Template from './NavTemplate';

const NavBar: React.FC = () => {
  const navMenu = [
    { title: 'Datasets', path: '/search' },
    { title: 'Organizations', path: '/organization' },
    { title: 'Groups', path: '/collection' },
    { title: 'About', path: '/about' },
  ];

  return <Template menu={navMenu} logo={'/images/logopjs.svg'} />;
};

export default NavBar;
