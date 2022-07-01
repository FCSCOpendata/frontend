import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';
import TopicCarousel from '../components/topic/TopicCarousel';
import TopicHeader from '../components/topic/TopicHeader';
import { ErrorMessage } from '../components/_shared';
import { GET_COLLECTIONS_QUERY } from '../graphql/queries';

const Topics: React.FC = () => {
  const [activeTopicIdx, setActiveTopicIdx] = React.useState(0);

  const {
    loading: loading,
    error: error,
    data,
  } = useQuery(GET_COLLECTIONS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading topics." />;
  if (loading) return <div>Loading Topics</div>;

  const topics = data.collections.result;

  console.log(topics);

  return (
    <>
      <Head>
        <title>Portal | Topics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-20 py-12">
        <div className="flex flex-wrap">
          <TopicCarousel
            topics={topics}
            topicChangeCallback={(topic, idx) => setActiveTopicIdx(idx)}
          />
          <TopicHeader
            title={topics[activeTopicIdx].name}
            text="test"
            icon_url="trest"
            dataset_qty={2}
            image_url="dsa"
          />
        </div>
      </main>
    </>
  );
};

export default Topics;
