import { useQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import { GET_TOPICS_QUERY, GET_TOPIC_QUERY } from '../../graphql/queries';
import dynamic from 'next/dynamic';

const SubtopicsCarousel = dynamic(
  () => import('../../components/topic/SubtopicsCarousel')
);
const DatasetsList = dynamic(
  () => import('../../components/topic/DatasetsList')
);
const TopicHeader = dynamic(() => import('../../components/topic/Header'));
const CopyButton = dynamic(() => import('../_shared/CopyButton'));
import { ErrorMessage } from '../../components/_shared';
import { useRouter } from 'next/router';

const MainOptions: React.FC<any> = ({
  topic,
  topicsTree,
  topicOnClick,
  searchPage,
  page,
}) => {
  const router = useRouter();

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

  useEffect(() => {
    if (searchPage && !subtopicsLoading) {
      setTimeout(() => {
        document
          .getElementById('explore-top-datasets')
          .scrollIntoView({ behavior: 'smooth' });
        //  NOTE: this timeout might not be ideal
        //  but without it there must be  another
        //  wait to wait for the datasets loading
      }, 500);
    }
  }, [subtopicsLoading]);

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

      <div className="mb-20" id="explore-top-datasets">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-semibold text-2xl sm:text-3xl">
            Explore Top Datasets In This Theme ({activeTopic.package_count})
          </h1>
          <span className="ml-3 select-none">
            <CopyButton content={document.location.href}>
              Click to copy this page's URL
            </CopyButton>
          </span>
        </div>
        <DatasetsList
          topic={activeTopic?.name}
          onPageChange={(page) => {
            router.query.searchPage = page + '';
            router.push(router, undefined, { shallow: true });
            document
              .getElementById('explore-top-datasets')
              .scrollIntoView({ behavior: 'smooth' });
          }}
          page={searchPage}
        />
      </div>
    </>
  );
};

export default MainOptions;
