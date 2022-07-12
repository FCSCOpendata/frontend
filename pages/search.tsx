import { GetServerSideProps } from 'next';
import utils from '../utils';
import Head from 'next/head';
import Form from '../components/search/NewForm';
import List from '../components/search/List';
import OpenData101 from '../components/home/main/OpenData101';
import { useState } from 'react';
import DeveloperExperience from '../components/_shared/developer_experience/DeveloperExperience';

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
        <DeveloperExperience />
      </div>
      <OpenData101 />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query || {};

  const variables = utils.convertToCkanSearchQuery(query);

  return {
    props: {
      variables,
    },
  };
};

export default Search;
