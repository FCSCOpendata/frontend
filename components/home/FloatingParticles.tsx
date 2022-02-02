import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';

export default function FloatingParticles() {
  const options: ISourceOptions = {
    fullScreen: {
      enable: false,
    },
    interactivity: {
      modes: {
        bubble: {
          distance: 400,
          duration: 1,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 100,
        },
      },
    },
    particles: {
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: 'bounce',
      },
      number: {
        density: {
          enable: true,
        },
        value: 10,
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0.2,
        },
      },
      shape: {
        options: {
          image: [
            {
              src: '/images/particles/bigOBlack.svg',
            },
            {
              src: '/images/particles/bigOBlue.svg',
            },
            {
              src: '/images/particles/bigOWhite.svg',
            },
          ],
        },
        type: 'image',
      },
      size: {
        value: 8,
        animation: {
          speed: 10,
          minimumValue: 0.1,
        },
      },
    },
  };

  return (
    <div>
      <Particles id="tsparticles" options={options} className="absolute" />
    </div>
  );
}
