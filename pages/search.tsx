import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import utils from '../utils';
import Head from 'next/head';
import Form from '../components/search/NewForm';
import List from '../components/search/List';
import { SEARCH_QUERY } from '../graphql/queries';
import { useState } from 'react';
import SearchSuggestions from '../components/search/SearchSuggestions';
import BottomBanner from '../components/_shared/BottomBanner';
import Sidebar from '../components/search/Sidebar';

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
        <title>Portal | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-20 py-12">
        <Form variables={qvariables} setQvariables={setQvariables} />
        <div className="flex flex-wrap">
          <div className="sm:w-1/4">
            <Sidebar
              setQvariables={setQvariables}
              setSideFilter={setSideFilter}
            />
          </div>
          <div className="sm:w-3/4">
            <List variables={qvariables} setQvariables={setQvariables} />
            <SearchSuggestions />
          </div>
        </div>
      </main>
      <BottomBanner />
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
