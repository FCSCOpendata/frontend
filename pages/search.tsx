import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import utils from '../utils';
import Head from 'next/head';
import Form from '../components/search/NewForm';
import List from '../components/search/List';
import DeveloperExperience from '../components/topic/developer_experience/DeveloperExperience';
import OpenData101 from '../components/home/main/OpenData101';
import { SEARCH_QUERY } from '../graphql/queries';
import { useState } from 'react';

type Props = {
  variables: any;
};

const Search: React.FC<Props> = ({ variables }) => {
  const [qvariables, setQvariables] = useState(variables);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sideFilter, setSideFilter] = useState({
    organization: [],
    groups: [],
  });

  const [devExperience, setDevExperience] = useState({
    expanded: false,
    idx: 0,
  });

  const toggleDevExp = () => {
    setDevExperience({
      expanded: !devExperience.expanded,
      idx: devExperience.idx,
    });
  };

  return (
    <>
      <Head>
        <title>Search | Bayanat</title>
      </Head>
      <Form
        variables={qvariables}
        setQvariables={setQvariables}
        setSideFilter={setSideFilter}
      />
      <div className="mb-12">
        <div className="px-4">
          <List variables={qvariables} setQvariables={setQvariables} />
        </div>
      </div>
      <div className="px-16">
        <button onClick={() => toggleDevExp()}>
          <h2 className="font-[Avenir] font-semibold text-2xl mb-6 flex items-center pointer">
            {/* TODO: check this vertical alignment */}
            <span className="bg-[#CBE9FF] p-[9px] w-[30px] rounded-md mr-5">
              <img
                src="/images/plus.svg"
                width={12}
                alt="Expand developer experience"
              />
            </span>
            Developer Experience
          </h2>
        </button>
        <div
          className={`transition-all overflow-hidden ${
            devExperience.expanded ? 'max-h-max' : 'max-h-0'
          }`}
        >
          <DeveloperExperience />
        </div>
      </div>
      <OpenData101 />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query || {};

  const variables = utils.convertToCkanSearchQuery(query);

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SEARCH_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Search;
