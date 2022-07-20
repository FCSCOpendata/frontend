import React from 'react';
import Code from './Code';
import Text from './Text';

const Tabs: React.FC<{ api: string }> = ({ api }) => {
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
  ];

  const switchTechRender = () => {
    switch (technologies[activeIdx].id) {
      case 'py':
        return (
          <>
            <Text>Interact with our functional api in python</Text>
            <Code language="python">
              {`
import request

data = request("${api}").json()

              `}
            </Code>
          </>
        );
        break;
      case 'js':
        return (
          <>
            <Text>Interact with our functional api in JavaScript</Text>
            <Code language="javascript">
              {`
const data = fetch("${api}").then(res => res.json())

              `}
            </Code>
          </>
        );
        break;
      case 'curl':
        return (
          <>
            <Text>Interact with our functional api in cURL</Text>
            <Code language="curl">
              {`
curl ${api}

              `}
            </Code>
          </>
        );
        break;
      case 'R':
        return (
          <>
            <Text>Interact with our functional api in R</Text>
            <Code language="curl">
              {`
# installing packages
install.packages("httr")
  
# importing packages
library(httr)
library(jsonlite)
  
# GET() method will store the raw data
# in response variable
jsonResponse < - GET("${api}")
  
# printing response/data
print(jsonResponse)

              `}
            </Code>
          </>
        );
        break;
    }
  };

  return (
    <>
      <div className="bg-[#F7FAFC] px-5 sm:px-16 py-5 sm:py-14 rounded-3xl">
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

export default Tabs;
