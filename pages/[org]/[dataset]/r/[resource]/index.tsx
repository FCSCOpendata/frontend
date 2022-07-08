import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../../../graphql/queries';
import NavBreadCrumbs from '../../../../../components/dataset/NavBreadCrumbs';
import Link from 'next/link';
import DataExplorer from '../../../../../components/resource/ResourceExplorer';
import DeveloperExperience from '../../../../../components/topic/developer_experience/DeveloperExperience';
import OpenData101 from '../../../../../components/home/main/OpenData101';
import { useState } from 'react';

const Resource: React.FC<{ variables: any }> = ({ variables }) => {
  const [devExperience, setDevExperience] = useState({
    expanded: false,
    idx: 0,
  });
  const { data, loading } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  const result = data.dataset.result;
  // Find right resource
  const resource = result.resources.find(
    (item) => item.name === variables.resource
  );

  const toggleDevExp = () => {
    setDevExperience({
      expanded: !devExperience.expanded,
      idx: devExperience.idx,
    });
  };

  return (
    <>
      <Head>
        <title>Portal | {resource.title || resource.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />
      <main className="flex flex-wrap px-12 mb-70">
        {/* Dataset About section */}
        <div className="flex flex-col mb-10">
          <div className="flex xl:flex-row flex-col mb-4 text-[#4D4D4D] font-[Avenir] font-extrabold text-[36px] items-baseline">
            {resource.format === 'CSV' ? (
              <img
                src="/images/csv-icon.svg"
                alt="Dataset title"
                className="inline w-6 xl:mr-2"
              />
            ) : (
              <img
                src="/images/excel-icon.svg"
                alt="Dataset title"
                className="inline w-6 xl:mr-2"
              />
            )}

            <h1 className="inline mr-4">
              {resource.name}{' '}
              <img
                src="/images/plant-icon.svg"
                alt="Dataset title"
                className="inline w-6"
              />
            </h1>
          </div>
          <article className="font-[Avenir] text-[#7C7C7C] text-[20px] font-normal mb-4">
            {resource.description?.replace(/<[^>]*>?/gm, '') ||
              'This dataset does not have a description yet.'}
          </article>
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <DataExplorer resources={[resource]} columnHeaderStyle={null} />
        </div>

        {/* Create Visualization */}
        <div className="flex  justify-start w-full py-10 pl-0">
          <div className="flex flex-col items-between h-full w-1/2 mb-10">
            <div className="self-start mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
              <p>Create Visualization</p>
            </div>
            <div className="flex xl:flex-row flex-col bg-[#F7FAFC] justify-between p-2 rounded-xl xl:w-4/6">
              <button className="flex items-baseline py-4 px-4  bg-button-gradient rounded-2xl text-white justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/pie-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-2"
                />
                Build Basic Charts
              </button>
              <button className="flex items-baseline py-4 px-4 text-[#202020] justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/app-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-4 text-white"
                />
                Build Your Own Application
              </button>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-12 grid-cols-1 pl-0 w-full xl:gap-x-4 gap-y-4 mb-20">
          <div className="xl:col-span-7 rounded-lg">
            <img
              src="/images/graph-img.svg"
              alt="orgs"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-4 col-span-5 rounded-lg flex flex-col p-8 bg-[#F7FAFC]">
            <h1 className="text-center font-[Avenir] text-[30px] text-[#343434] font-extrabold mb-8">
              Visualisation Builder
            </h1>
            <div className="flex flex-col mb-4">
              <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
                Chart Type
              </span>
              <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
                <option className="">Select Chart type</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
                Chart Type
              </span>
              <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
                <option className="">Select Chart type</option>
              </select>
            </div>
            <div className="flex flex-col mb-10">
              <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
                Chart Type
              </span>
              <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
                <option className="">Select Chart type</option>
              </select>
            </div>
            <button className="border font-[Avenir] font-extrabold text-[20px] text-center text-[#FFFFFF] p-4 bg-button-gradient rounded-xl">
              Update
            </button>
          </div>
        </div>
        <div className="w-full">
          <button onClick={() => toggleDevExp()}>
            <h1 className="font-semibold text-3xl mb-6 flex items-center pointer">
              {/* TODO: check this vertical alignment */}
              <span className="bg-[#CBE9FF] p-[9px] w-[30px] rounded-md mr-5">
                <img
                  src="/images/plus.svg"
                  width={12}
                  alt="Expand developer experience"
                />
              </span>
              Developer Experience
            </h1>
          </button>
          <div
            className={`transition-all overflow-hidden ${
              devExperience.expanded ? 'max-h-max' : 'max-h-0'
            }`}
          >
            <DeveloperExperience />
          </div>
        </div>
        <div>
          <OpenData101 />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const variables = {
    id: context.query.dataset,
    resource: context.query.resource,
  };

  await apolloClient.query({
    query: GET_DATASET_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Resource;
