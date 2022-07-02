import React from 'react';
import Text from './Text';

const DeveloperExperience: React.FC = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const technologies = [
    {
      id: 'py',
      name: 'Python',
    },
    {
      id: 'js',
      name: 'JavaScript',
    },
  ];

  const switchtechRender = () => {
    switch (technologies[activeIdx].id) {
      case 'py':
        return (
          <>
            <Text>
              For Python, first install the `datapackage` library (all the
              datasets on DataHub are Data Packages):
            </Text>
          </>
        );
        break;
      case 'js':
        return <></>;
        break;
    }
  };

  return (
    <>
      <div className="bg-[#F7FAFC] px-10 py-8 rounded-3xl">
        <div className="mb-8">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className={`${
                index == activeIdx
                  ? 'bg-[#CBE9FF] text-[#255B9B]'
                  : 'text-[#202020]'
              } py-2 px-5 rounded-md font-semibold mr-2 `}
              onClick={() => setActiveIdx(index)}
            >
              {tech.name}
            </button>
          ))}
        </div>
        <div>{switchtechRender()}</div>
      </div>
    </>
  );
};

export default DeveloperExperience;
