import React from 'react';
import Code from './Code';
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
    {
      id: 'R',
      name: 'R',
    },
    {
      id: 'curl',
      name: 'Curl',
    },
    {
      id: 'pandas',
      name: 'Pandas',
    },
  ];

  const switchTechRender = () => {
    switch (technologies[activeIdx].id) {
      case 'py':
        return (
          <>
            <Text>
              For Python, first install the `datapackage` library (all the
              datasets on DataHub are Data Packages):
            </Text>
            <Code language="python">{`  pip install datapackage`}</Code>
            <Text>
              To get Data Package into your Python environment, run the
              following code:
            </Text>
            <Code language="python">
              {`
  from datapackage import Package


  package = Package( 'https://datahub.io/core/gdp/datapackage.json' )


  # print list of all resources:
  print(package.resource_names)


  # print processed tabular data (if exists any)
  for resource in package.resources:
    if resource.descriptor['datahub']['type'] == 'derived/csv':
      print(resource.read())
              `}
            </Code>
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
      <div className="bg-[#F7FAFC] px-16 py-14 rounded-3xl">
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
        <div>{switchTechRender()}</div>
      </div>
    </>
  );
};

export default DeveloperExperience;
