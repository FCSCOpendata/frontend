import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React, { useState } from 'react';
import SubtopicCarousel from '../../components/subtopic/SubtopicCarousel';
import SubtopicTopDatasets from '../../components/subtopic/SubtopicTopDatasets';
import DeveloperExperience from '../../components/topic/developer_experience/DeveloperExperience';
import TopicCarousel from '../../components/topic/TopicCarousel';
import TopicHeader from '../../components/topic/TopicHeader';
import { ErrorMessage } from '../../components/_shared';
import {
  GET_COLLECTIONS_QUERY,
  GET_TOPICS_QUERY,
} from '../../graphql/queries';
import { useRouter } from 'next/router';

const Topic: React.FC = () => {
  const router = useRouter();
  const { topic: topic_param } = router.query;
  const [devExperience, setDevExperience] = React.useState({
    expanded: false,
    idx: 0,
  });
  const [activeSubtopicId, setActiveSubtopicId] = useState(0);

  //  TODO: retrieve only  the  full  data  of
  //  the selected topic. Currently retrieving
  //  full data of all topics here.

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

  let topicParamIdx = topics.findIndex(
    (topic, index) => topic.name == topic_param
  );
  topicParamIdx = topicParamIdx >= 0 ? topicParamIdx : 0;

  return (
    <>
      <Head>
        <title>Portal | Topics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: check mobile paddings */}
      <main className="py-12 px-8 sm:px-15 md:px-20 lg:px-25">
        <div className="w-100">
          <div className="mb-20">
            {/* TODO: the component needs and indicator
            //  that there's hidden slides so that  the
            //  user knows he should slide */}
            <TopicCarousel topics={topics} />
          </div>
          <div className="mb-20">
            <TopicHeader topic={topics[topicParamIdx]} />
          </div>
          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">Sub Topics</h1>
            <SubtopicCarousel
              subtopics={topics[topicParamIdx].children}
              subtopicChangeCallback={setActiveSubtopicId}
            />
          </div>
          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">
              Explore Top Datasets In This Theme (32)
            </h1>
            <SubtopicTopDatasets subtopic={{ id: topicParamIdx }} />
          </div>
          <div className="mb-20">
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
        </div>
      </main>
    </>
  );
};

export default Topic;
