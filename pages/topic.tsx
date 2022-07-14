import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { GET_TOPICS_TREE_QUERY } from '../graphql/queries';

const Topic: React.FC = () => {
  return <>Redirecting...</>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_TOPICS_TREE_QUERY,
    variables: {},
  });

  const firstTopicName = data.topics.result[0].name;

  return {
    redirect: {
      permanent: false,
      destination: `/topic/${firstTopicName}`,
    },
    props: {},
  };
};

export default Topic;
