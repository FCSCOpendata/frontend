import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';
import {
  GET_TOPICS_QUERY,
  GET_TOPIC_QUERY,
  GET_TOPICS_TREE_QUERY,
} from '../../graphql/queries';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../lib/apolloClient';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const SubtopicCarousel = dynamic(
  () => import('../../components/subtopic/SubtopicCarousel')
);
const SubtopicTopDatasets = dynamic(
  () => import('../../components/subtopic/SubtopicTopDatasets')
);
const DeveloperExperience = dynamic(
  () =>
    import('../../components/topic/developer_experience/DeveloperExperience')
);
const TopicCarousel = dynamic(
  () => import('../../components/topic/TopicCarousel')
);
const TopicHeader = dynamic(
  () => import('../../components/topic/TopicHeader')
);
const OpenData101 = dynamic(
  () => import('../../components/home/main/OpenData101')
);
import { ErrorMessage } from '../../components/_shared';

const Topic: React.FC<any> = () => {
  const router = useRouter();
  let { topic: topicParam } = router.query;

  const [devExperience, setDevExperience] = React.useState({
    expanded: false,
    idx: 0,
  });

  //  Loads the topics tree. It would be better to load
  //  only the selected topic sub topics, but it  seems
  //  that there isn't this parameter in the API.
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loading: topicsTreeLoading,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error: topicsTreeError,
    data: topicsTreeData,
  } = useQuery(GET_TOPICS_TREE_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  //  Creates a filter to filter the topics query later
  const mainTopicsFilter = topicsTreeData.topics.result.map(
    (topic) => `"${topic.name}"`
  );

  //  if the query parameter is empty, use first topic
  if (!topicParam) topicParam = topicsTreeData.topics.result[0].name;
  else topicParam = topicParam[0];

  //  Loads the selected topic
  const {
    loading: topicLoading,
    error: topicError,
    data: topicData,
  } = useQuery(GET_TOPIC_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: topicParam,
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
  const children = findTopic(
    topicParam,
    topicsTreeData.topics.result
  ).children;

  //  Creates a group filter for the subtopics
  const subtopicsFilter = children.map((child) => `"${child.name}"`);

  const {
    loading: subtopicsLoading,
    error: subtopicsError,
    data: subtopicsData,
  } = useQuery(GET_TOPICS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      groups: `[${subtopicsFilter.concat(mainTopicsFilter).join(',')}]`,
    },
  });

  if (topicsTreeError || topicError || subtopicsError)
    return <ErrorMessage message="Error loading topics." />;
  if (topicsTreeLoading || topicLoading || subtopicsLoading)
    return <div>Loading Topics</div>;

  const activeTopic = topicData.topic.result;

  const findAndAddDetails = (topics, coll) => {
    topics.forEach((topic: any, idx: number) => {
      if (topic.children.length > 0 && topic.id != coll.id) {
        findAndAddDetails(topic.children, coll);
      } else {
        if (topic.id == coll.id) {
          topics[idx] = { ...topic, ...coll };
        }
      }
    });
  };

  const collections = subtopicsData.topics.result;

  collections.forEach((collection) => {
    findAndAddDetails(topicsTreeData.topics.result, collection);
  });

  const topics = topicsTreeData.topics.result;

  const toggleDevExp = () => {
    setDevExperience({
      expanded: !devExperience.expanded,
      idx: devExperience.idx,
    });
  };

  return (
    <>
      <Head>
        <title>Portal | Topics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: check mobile paddings */}
      <main className="py-12 mx-10 md:mx-28 pb-20 text-[#4D4D4D]">
        <div className="w-100">
          <div className="mb-20">
            {/* TODO: the component needs and indicator
            //  that there's hidden slides so that  the
            //  user knows he should slide */}
            <TopicCarousel topics={topics} activeTopic={activeTopic} />
          </div>
          <div className="mb-20">
            <TopicHeader
              topic={activeTopic}
              datasetsCount={activeTopic.package_count}
            />
          </div>
          {topics?.length > 0 && (
            <div className="mb-20">
              <h1 className="font-semibold text-3xl mb-6">Sub Topics</h1>
              <SubtopicCarousel subtopics={topics} />
            </div>
          )}

          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">
              Explore Top Datasets In This Theme ({activeTopic.package_count})
            </h1>
            <SubtopicTopDatasets
              // TODO: improve this logic
              subtopic={activeTopic?.name}
            />
          </div>
          <div>
            <button onClick={() => toggleDevExp()}>
              <h1 className="font-semibold text-3xl mb-6 flex items-center pointer">
                {/* TODO: check this vertical alignment */}
                <span className="bg-[#CBE9FF] p-[9px] w-[30px] rounded-md mr-5">
                  <img
                    src="/images/plus.svg"
                    width={12}
                    alt="Expand developer experience"
                  />
                </span>
                Developer Experience
              </h1>
            </button>
            <div
              className={`transition-all overflow-hidden ${
                devExperience.expanded ? 'max-h-max' : 'max-h-0'
              }`}
            >
              <DeveloperExperience />
            </div>
          </div>
          <div>
            <OpenData101 />
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_TOPICS_TREE_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Topic;
