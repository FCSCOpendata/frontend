import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';
import SubtopicCarousel from '../components/subtopic/SubtopicCarousel';
import DeveloperExperience from '../components/topic/developer_experience/DeveloperExperience';
import TopicCarousel from '../components/topic/TopicCarousel';
import TopicHeader from '../components/topic/TopicHeader';
import { ErrorMessage } from '../components/_shared';
import { GET_COLLECTIONS_QUERY, GET_TOPICS_QUERY } from '../graphql/queries';

const Topics: React.FC = () => {
  const [devExperience, setDevExperience] = React.useState({
    expanded: false,
    idx: 0,
  });
  const [activeTopicIdx, setActiveTopicIdx] = React.useState(0);

  //  Topics  holds  hierarchical  information
  //  about `groups` and `subgroups`.
  //  TODO: check if there's a way to retrieve
  //  a group's full  info  here. `all_fields`
  //  ins't working for that case.
  const {
    loading: topicsLoading,
    error: topicsError,
    data: topicsData,
  } = useQuery(GET_TOPICS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  //  Collections holds topics's details
  const {
    loading: collectionsLoading,
    error: collectionsError,
    data: collectionsData,
  } = useQuery(GET_COLLECTIONS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (topicsError || collectionsError)
    return <ErrorMessage message="Error loading topics." />;
  if (topicsLoading || collectionsLoading) return <div>Loading Topics</div>;

  const findAndAddDetails = (topics, coll) => {
    topics.forEach((topic: any, idx: number) => {
      if (topic.children.length > 0 && topic.id != coll.id) {
        findAndAddDetails(topic.children, coll);
      } else {
        if (topic.name == 'transport' || coll.name == 'transport') {
          console.log(topic, coll);
        }

        if (topic.id == coll.id) {
          topics[idx] = { ...topic, ...coll };
        }
      }
    });
  };

  const collections = collectionsData.collections.result;

  collections.forEach((collection) => {
    findAndAddDetails(topicsData.topics.result, collection);
  });

  const topics = topicsData.topics.result;

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
      <main className="px-20 py-12">
        <div className="w-100">
          <div className="mb-20">
            <TopicCarousel
              topics={topics}
              topicChangeCallback={(topic, idx) => setActiveTopicIdx(idx)}
            />
          </div>
          <div className="mb-20">
            <TopicHeader topic={topics[activeTopicIdx]} />
          </div>
          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">Sub Topics</h1>
            <SubtopicCarousel subtopics={topics[activeTopicIdx].children} />
          </div>
          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">
              Explore Top Datasets In This Theme (32)
            </h1>
          </div>
          <div className="mb-20">
            <button onClick={() => toggleDevExp()}>
              <h1 className="font-semibold text-3xl mb-6 flex items-center pointer">
                {/* TODO: check this vertical alignment */}
                <button className="bg-[#CBE9FF] p-[9px] w-[30px] rounded-md mr-5">
                  <img
                    src="/images/plus.svg"
                    width={12}
                    alt="Expand developer experience"
                  />
                </button>
                Developer Experience
              </h1>
            </button>
            <div className={devExperience.expanded ? '' : ''}>
              <DeveloperExperience />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Topics;
