import Particles from 'react-tsparticles';

const FloatingParticles = () => {
  const options = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        speed: 1,
        out_mode: 'out',
      },
      shape: {
        type: 'image',
        image: [
          {
            src: '/images/search.svg',
            height: 5,
            width: 5,
          },
        ],
      },
      size: {
        value: 5,
        random: false,
        anim: {
          enable: true,
          speed: 4,
          size_min: 5,
          sync: false,
        },
      },
    },
    retina_detect: false,
  };
  return <Particles id="tsparticles" options={options} />;
};
export default FloatingParticles;
