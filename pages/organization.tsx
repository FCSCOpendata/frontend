import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { GET_ORGS_LIST_QUERY } from '../graphql/queries';

const Org: React.FC = () => {
  return <>Redirecting...</>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_ORGS_LIST_QUERY,
    variables: {},
  });

  const firstOrgName = data.orgs.result[0];

  return {
    redirect: {
      permanent: false,
      destination: `/@${firstOrgName}`,
    },
    props: {},
  };
};

export default Org;
