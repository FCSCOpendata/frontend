import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React, { useState } from 'react';
import {
  GET_TOPICS_QUERY,
  GET_TOPICS_TREE_QUERY,
} from '../../graphql/queries';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../lib/apolloClient';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import fsPromises from 'fs/promises';
import path from 'path';

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
import ScrollIndicator from '../../components/_shared/ScrollIndicator';

const Topic: React.FC<any> = ({ variables, topicsConfigs }) => {
  const router = useRouter();
  // eslint-disable-next-line prefer-const
  let { searchPage, topic } = router.query;
  const [activeTopic, setActiveTopic] = useState({ topic: null });

  const handleTopicChange = (topic: any) => {
    setActiveTopic({ topic });
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
        <ScrollIndicator
          firstImage={{
            url:
              activeTopic.topic?.icon?.url ||
              '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          lastImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          stops={[
            { id: 'topics' },
            // { id: 'subtopics' },
            { id: 'explore-top-datasets' },
            { id: 'developer-experience' },
            { id: 'open-data-101' },
          ]}
        />
        <div className="w-100">
          <div className="mb-10" id="topics">
            <TopicsCarousel
              topics={mainTopics}
              active={{ name: topic }}
              topicOnClick={handleTopicChange}
              configs={topicsConfigs}
            />
          </div>

          <MainOptions
            topic={topic}
            topicsTree={topicsTree}
            topicOnClick={handleTopicChange}
            searchPage={searchPage}
            setActiveTopic={setActiveTopic}
            configs={topicsConfigs}
          ></MainOptions>
          <div id="developer-experience">
            <DeveloperExperience
              api={
                typeof window !== 'undefined'
                  ? `${window.location.origin}/api/topic?id=${topic}`
                  : ''
              }
            />
          </div>
        </div>
      </main>
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const getTopicsConfigs = async () => {
    const filePath = path.join(process.cwd(), '/public/configs/topics.json');
    const data = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(data)?.topics;
  };

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
      topicsConfigs: await getTopicsConfigs(),
    },
  };
};

export default Topic;
