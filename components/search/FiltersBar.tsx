import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  GET_ORGS_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_TOPICS_TREE_QUERY,
} from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import { CheckCircleIcon } from '@heroicons/react/outline';
import FilterCarousel from './filters/FilterCarousel';
import { SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';

const TopicsCarousel = dynamic(() => import('./filters/TopicFilterCarousel'));

export default function FiltersBar({
  qvariables,
  setQvariables,
  setSideFilter,
  filters,
  sideFilter,
}) {
  const { query } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const [slider, setSlider] = useState({
    max: 100,
    min: 0,
    value: 0,
  });

  const variables = { notifyOnNetworkStatusChange: true };
  const queryMultiple = () => {
    const orgsQuery = useQuery(GET_ORGS_QUERY, variables);
    const collectionsQuery = useQuery(GET_COLLECTIONS_QUERY, variables);
    const topicsQuery = useQuery(GET_TOPICS_TREE_QUERY, variables);

    return [orgsQuery, collectionsQuery, topicsQuery];
  };
  const [
    { loading: loadOrgs, error: errorOrg, data: dataOrgs },
    {
      loading: loadCollections,
      error: errorCollections,
      data: dataCollections,
    },
    { loading: loadTopics, error: errorTopics, data: dataTopics },
  ] = queryMultiple();

  if (errorOrg) return <ErrorMessage message="Error loading organizations" />;
  if (loadOrgs) return <Spinner />;
  if (errorCollections)
    return <ErrorMessage message="Error loading Collections" />;
  if (loadCollections) return <Spinner />;
  if (errorTopics) return <ErrorMessage message="Error loading topics tree" />;
  if (loadTopics) return <Spinner />;
  const orgsResults = dataOrgs.orgs.result;
  const collectionsResults = dataCollections.collections.result;

  const filterSearch = (event, btnType, name) => {
    if (event.target.id !== 'true') {
      setSideFilter((prev) => {
        const newFilter = { ...prev };
        newFilter[btnType].push(name);

        const fq = generateFq(newFilter);

        setQvariables((prev) => {
          const newQ = { ...prev, fq: fq };
          return newQ;
        });
        return newFilter;
      });
    } else if (btnType === 'keyword') {
      const fq = `tags:${name}`;
      setQvariables((prev) => ({
        ...prev,
        fq: fq,
      }));
    } else {
      setSideFilter((prev) => {
        const newFilter = { ...prev };
        const index = newFilter[btnType].indexOf(name);
        newFilter[btnType].splice(index, 1);

        const fq = generateFq(newFilter);

        setQvariables((prev) => {
          const newQ = { ...prev, fq: fq };

          return newQ;
        });
        return newFilter;
      });
    }
  };

  const generateFq = (sideFilter) => {
    let fq = query.fq || '';
    let keyIndex = 0;
    for (const key of Object.keys(sideFilter)) {
      if (sideFilter[key].length > 0) {
        let innerFq;
        if (keyIndex > 0) {
          innerFq = `+${key}:(${sideFilter[key][0]}`;
        } else {
          innerFq = `${key}:(${sideFilter[key][0]}`;
        }
        for (let i = 1; i < sideFilter[key].length; i++) {
          innerFq += ` OR ${sideFilter[key][i]}`;
        }

        fq += ' ' + innerFq + ')';
        keyIndex += 1;
      }
    }
    return (fq as string).trim();
  };

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

  collectionsResults.forEach((collection) => {
    findAndAddDetails(dataTopics.topics.result, collection);
  });

  const topics = dataTopics.topics.result;

  const regexForGroups = /((\bgroups\b):\(([^)]+)\))/;
  const matchesForGroups = regexForGroups.exec(qvariables.fq);
  const regexForOrgs = /((\borganization\b):\(([^)]+)\))/;
  const matchesForOrgs = regexForOrgs.exec(qvariables.fq);
  const timeFrames = {
    Custom: null,
    'Last Year': 1,
    'Last 2 years': 2,
    'Last 3 years': 3,
    'Last 4 years': 4,
    'Last 5 years': 5,
  };
  const setTimeSearchValue = (key, index) => {
    setCurrentTimeIndex(index);
    const now = new Date().getFullYear();
    const end = now + 1;
    const start = now - timeFrames[key];
    const startString = `[${start} TO ${end}]`;
    const endString = `[${now} TO ${end}]`;

    setSideFilter((prev) => {
      const newFilter = { ...prev };
      newFilter['start_period'] = [startString];
      // newFilter['end_period'] = [endString]; need clarity

      const fq = generateFq(newFilter);

      setQvariables((prev) => {
        const newQ = { ...prev, fq: fq };
        return newQ;
      });
      return newFilter;
    });
  };

  return (
    <div className="">
      {filters === 'Topics' && (
        <>
          <div className="w-100 max-w-6xl bg-white">
            <div id="topics">
              <TopicsCarousel
                items={topics}
                active={{ name: null }}
                currentIndex={currentIndex}
                itemOnClick={setCurrentIndex}
              />
            </div>
          </div>

          <div className="w-100 max-w-6xl mt-2">
            <div>
              <FilterCarousel>
                {topics[currentIndex].children.map((sub, index) => (
                  <SwiperSlide key={index}>
                    <button
                      key={sub.id}
                      className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
                      onClick={(e) => filterSearch(e, 'groups', sub.name)}
                    >
                      <img
                        src={
                          sub.image_display_url || `/images/topics/topic-1.png`
                        }
                        alt={sub.title}
                        className="absolute left-0 top-0 w-full h-full object-scale-down z-0"
                      />
                      <span
                        className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10"
                        id={`${
                          matchesForGroups &&
                          matchesForGroups[3].includes(sub.name)
                        }`}
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        //  NOTE: z-index removed because it makes
                        //  the onclick not work and  doen't  seem
                        //  to be necessary for the UI. Was `z-10`
                        className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black"
                      >
                        {sub.title}
                      </label>
                      {matchesForGroups &&
                        matchesForGroups[3].includes(sub.name) && (
                          <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-600" />
                        )}
                    </button>
                  </SwiperSlide>
                ))}
              </FilterCarousel>
            </div>
          </div>
        </>
      )}
      {filters === 'Organizations' && (
        <div className="w-100 max-w-6xl mt-2">
          <div>
            <FilterCarousel>
              {orgsResults.map((org, index) => (
                <SwiperSlide key={index}>
                  <button
                    key={org.id}
                    className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
                    onClick={(e) => filterSearch(e, 'organization', org.name)}
                  >
                    <img
                      src={org.image || `/images/topics/topic-2.png`}
                      alt=""
                      className="absolute left-0 top-0 w-full h-full object-scale-down z-0"
                    />
                    <span
                      className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10"
                      id={`${
                        matchesForOrgs && matchesForOrgs[3].includes(org.name)
                      }`}
                    />
                    <label
                      htmlFor={`checkbox-${index}`}
                      //  NOTE: z-index removed because it makes
                      //  the onclick not work and  doen't  seem
                      //  to be necessary for the UI. Was `z-10`
                      className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black"
                    >
                      {org.title}
                    </label>
                    {matchesForOrgs &&
                      matchesForOrgs[3].includes(org.name) && (
                        <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-800 z-0" />
                      )}
                  </button>
                </SwiperSlide>
              ))}
            </FilterCarousel>
          </div>
        </div>
      )}

      {filters === 'Time Frame' && (
        <div className="w-full can mt-2 bg-white">
          {Object.keys(timeFrames).map((timeframe, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-xl font-[Avenir] ${
                currentTimeIndex === index
                  ? 'bg-button-gradient text-white'
                  : 'text-black'
              }`}
              onClick={() => setTimeSearchValue(timeframe, index)}
            >
              {timeframe}
            </button>
          ))}
        </div>
      )}

      {currentTimeIndex === 0 && filters === 'Time Frame' && (
        <div className="w-full mt-2">
          <div className="flex flex-col w-1/2 border pt-6 px-8 font-[Raleway] bg-white rounded-xl">
            <div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                value={slider.value}
                id="myRange"
                className="slider"
                onChange={() =>
                  setSlider({ ...slider, value: slider.value + 2 })
                }
              />
            </div>
            <div className="flex w-full mb-12">
              <div className="flex rounded-xl p-2 bg-[#F6F6F6]  w-2/5 mr-4 text-[14px] font-medium text-[#464646]">
                <img
                  src="/images/calender-icon.svg"
                  alt="orgs"
                  className="w-5 mb-1 "
                />
                <span>1940</span>
              </div>
              <span className="self-center">-</span>
              <div className="flex rounded-xl p-2  w-2/5 ml-4 bg-[#F6F6F6] text-[14px] font-medium text-[#464646]">
                <img
                  src="/images/calender-icon.svg"
                  alt="orgs"
                  className="w-5 mb-1 "
                />
                <span>2022</span>
              </div>
            </div>
            <div>
              <button className="text-blue-500 font-[Raleway">clear</button>
            </div>
          </div>
        </div>
      )}
      {(sideFilter.groups.length > 0 ||
        sideFilter.organization.length > 0) && (
        <div className="flex flex-col">
          <span className="font-bold">Active Filters</span>
          {sideFilter.groups.length > 0 && (
            <div className="flex w-100 max-w-6xl items-between">
              <span className="mt-2 font-bold">Topics:</span>
              <div className="flex flex-wrap ml-12">
                {sideFilter.groups.map((group, index) => (
                  <div
                    className="ml-2 px-2 bg-blue-100 rounded-lg mt-2"
                    key={index}
                  >
                    <span className="mr-2">{group}</span>
                    <button
                      id="true"
                      onClick={(e) => filterSearch(e, 'groups', group)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {sideFilter.organization.length > 0 && (
            <div className="flex w-100 max-w-6xl items-between mt-4">
              <span className="mt-2 font-bold">Organization:</span>
              <div className="flex flex-wrap">
                {sideFilter.organization.map((org, index) => (
                  <div
                    className="ml-2 px-2 bg-blue-100 rounded-lg mt-2"
                    key={index}
                  >
                    <span className="mr-2">{org}</span>
                    <button
                      id="true"
                      onClick={(e) => filterSearch(e, 'organization', org)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
