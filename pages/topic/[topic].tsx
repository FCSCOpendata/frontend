import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';
import {
  GET_TOPICS_QUERY,
  GET_TOPICS_TREE_QUERY,
} from '../../graphql/queries';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../lib/apolloClient';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const DeveloperExperience = dynamic(
  () =>
    import('../../components/_shared/developer_experience/DeveloperExperience')
);
const TopicsCarousel = dynamic(
  () => import('../../components/topic/TopicsCarousel')
);
const OpenData101 = dynamic(
  () => import('../../components/home/main/OpenData101')
);
import { ErrorMessage } from '../../components/_shared';
import MainOptions from '../../components/topic/MainOptions';

const Topic: React.FC<any> = ({ variables }) => {
  const router = useRouter();
  // eslint-disable-next-line prefer-const
  let { searchPage, topic } = router.query;

  const goToTopic = (topic: any) => {
    router.push(`/topic/${topic.name}`, undefined, { shallow: true });
  };

  const {
    data: topicsTreeData,
    loading: topicsTreeLoading,
    error: topicstreeError,
  } = useQuery(GET_TOPICS_TREE_QUERY);

  const {
    data: mainTopicsData,
    loading: mainTopicsLoading,
    error: mainTopicsError,
  } = useQuery(GET_TOPICS_QUERY, { variables });

  if (topicsTreeLoading || mainTopicsLoading) return <div>Loading Topics</div>;
  if (topicstreeError || mainTopicsError)
    return <ErrorMessage message="Error loading topics." />;

  const mainTopics = mainTopicsData.topics.result;
  const topicsTree = topicsTreeData.topics.result;
  topic = topic ? topic : topicsTreeData.topics.result[0].name;

  return (
    <>
      <Head>
        <title>Portal | Topics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-12 mx-10 md:mx-28 pb-20 text-[#4D4D4D]">
        <div className="w-100">
          <div className="mb-20">
            <TopicsCarousel
              topics={mainTopics}
              active={{ name: topic }}
              topicOnClick={goToTopic}
            />
          </div>

          <MainOptions
            topic={topic}
            topicsTree={topicsTree}
            topicOnClick={goToTopic}
            searchPage={searchPage}
          ></MainOptions>
          <DeveloperExperience />
          <OpenData101 />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TOPICS_TREE_QUERY,
  });

  const topicsTreeData = apolloClient.readQuery({
    query: GET_TOPICS_TREE_QUERY,
  })?.topics?.result;
  const mainTopicsNames = topicsTreeData.map((topic) => `"${topic.name}"`);

  const variables = {
    groups: `[${mainTopicsNames.join(',')}]`,
  };

  await apolloClient.query({
    query: GET_TOPICS_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Topic;
