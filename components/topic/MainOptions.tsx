import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_TOPICS_QUERY, GET_TOPIC_QUERY } from '../../graphql/queries';
import dynamic from 'next/dynamic';

const SubtopicsCarousel = dynamic(
  () => import('../../components/topic/SubtopicsCarousel')
);
const DatasetsList = dynamic(
  () => import('../../components/topic/DatasetsList')
);
const TopicHeader = dynamic(() => import('../../components/topic/Header'));
import { ErrorMessage } from '../../components/_shared';

const MainOptions: React.FC<any> = ({ topic, topicsTree, topicOnClick }) => {
  //  Loads the selected topic
  const {
    loading: topicLoading,
    error: topicError,
    data: topicData,
  } = useQuery(GET_TOPIC_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: topic,
    },
  });

  //  Finds a topic in the topics tree
  const findTopic = (topic, list) => {
    let found = null;
    const findTopicChildren = (topics) => {
      topics.forEach((t) => {
        if (t.name == topic) {
          found = t;
        } else if (t.children) {
          findTopicChildren(t.children);
        }
      });
    };
    findTopicChildren(list);
    return found;
  };

  //  Finds the children of the selected topic
  const children = findTopic(topic, topicsTree)?.children;

  //  Creates a group filter for the subtopics
  const subtopicsFilter = children?.map((child) => `"${child.name}"`);

  const {
    loading: subtopicsLoading,
    error: subtopicsError,
    data: subtopicsData,
  } = useQuery(GET_TOPICS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      groups: `[${subtopicsFilter.join(',')}]`,
    },
  });

  if (topicError || subtopicsError)
    return <ErrorMessage message="Error loading topics." />;
  if (topicLoading || subtopicsLoading) return <div>Loading Topics</div>;

  const activeTopic = topicData.topic.result;

  const findAndAddDetails = (topics, coll) => {
    topics.forEach((t: any, idx: number) => {
      if (t.children.length > 0 && t.id != coll.id) {
        findAndAddDetails(t.children, coll);
      } else {
        if (t.id == coll.id) {
          topics[idx] = { ...t, ...coll };
        }
      }
    });
  };

  const collections = subtopicsData.topics.result;

  collections.forEach((collection) => {
    findAndAddDetails(topicsTree, collection);
  });

  //  TODO: should not execute the query when there are
  //  no children.
  const subtopics = children.length ? subtopicsData.topics.result : [];

  return (
    <>
      <div className="mb-20">
        <TopicHeader
          topic={activeTopic}
          datasetsCount={activeTopic.package_count}
        />
      </div>
      {subtopics?.length > 0 && (
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-6">Sub Topics</h1>
          <SubtopicsCarousel
            subtopics={subtopics}
            subtopicOnClick={topicOnClick}
          />
        </div>
      )}

      <div className="mb-20">
        <h1 className="font-semibold text-3xl mb-6">
          Explore Top Datasets In This Theme ({activeTopic.package_count})
        </h1>
        <DatasetsList
          // TODO: improve this logic
          topic={activeTopic?.name}
        />
      </div>
    </>
  );
};

export default MainOptions;