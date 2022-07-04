import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import utils from '../utils';
import Head from 'next/head';
import Form from '../components/search/NewForm';
import List from '../components/search/List';
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

  return (
    <>
      <Head>
        <title>Search | Bayanat</title>
      </Head>
      <Form variables={qvariables} setQvariables={setQvariables} />
      <div className="">
        <div className="mx-4">
          <List variables={qvariables} setQvariables={setQvariables} />
        </div>
      </div>
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
