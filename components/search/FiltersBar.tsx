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

export default function FiltersBar({
  qvariables,
  setQvariables,
  setSideFilter,
  filters,
}) {
  const { query } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topicNavBtn, setTopicNavBtn] = useState(false);
  const [subNavBtn, setSubNavBtn] = useState(false);
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
    if (event.target.checked) {
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

  return (
    <div className="">
      {filters === 'Topics' && (
        <>
          <ul
            className="flex flex-wrap items-center bg-white text-sm p-2 rounded-xl w-fit mx-auto max-w-6xl overflow-hidden"
            onMouseEnter={(e) => {
              setTopicNavBtn(true);
            }}
            onMouseLeave={(e) => {
              setTopicNavBtn(false);
            }}
          >
            <FilterCarousel enableNavBtn={topicNavBtn}>
              {topics.map((topic, index) => (
                <SwiperSlide key={index}>
                  <li
                    key={topic.id}
                    className={`py-2 px-4 rounded-xl ${
                      currentIndex === index
                        ? 'bg-button-gradient text-white'
                        : 'text-black'
                    }`}
                  >
                    <input
                      type="button"
                      value={topic.display_name || topic.title}
                      onClick={() => setCurrentIndex(index)}
                      className="cursor-pointer"
                    />
                  </li>
                </SwiperSlide>
              ))}
            </FilterCarousel>
          </ul>
          <ul
            className="flex flex-wrap items-center bg-white text-sm p-2 rounded-xl w-fit mx-auto max-w-6xl overflow-hidden mt-2"
            onMouseEnter={(e) => {
              setSubNavBtn(true);
            }}
            onMouseLeave={(e) => {
              setSubNavBtn(false);
            }}
          >
            <FilterCarousel enableNavBtn={subNavBtn}>
              {topics[currentIndex].children.map((sub, index) => (
                <SwiperSlide key={index}>
                  <li
                    key={sub.id}
                    className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
                  >
                    <img
                      src={`/images/topics/topic-1.png`}
                      alt={sub.title}
                      className="absolute left-0 top-0 w-full h-full object-cover z-0"
                    />
                    <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10" />
                    <input
                      type="checkbox"
                      name={sub.title}
                      id={`checkbox-${index}`}
                      className="peer hidden"
                      onChange={(e) => filterSearch(e, 'groups', sub.name)}
                      checked={
                        matchesForGroups &&
                        matchesForGroups[3].includes(sub.name)
                      }
                    />
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none z-10 group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black"
                    >
                      {sub.title}
                    </label>
                    <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-600 hidden peer-checked:block" />
                  </li>
                </SwiperSlide>
              ))}
            </FilterCarousel>
          </ul>
        </>
      )}
      {filters === 'Organizations' && (
        <ul
          className="flex gap-2 mt-4 justify-start max-w-full overflow-hidden mt-2"
          onMouseEnter={(e) => {
            setSubNavBtn(true);
          }}
          onMouseLeave={(e) => {
            setSubNavBtn(false);
          }}
        >
          <FilterCarousel enableNavBtn={subNavBtn}>
            {orgsResults.map((org, index) => (
              <SwiperSlide key={index}>
                <li
                  key={org.id}
                  className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
                >
                  <img
                    src={`/images/topics/topic-2.png`}
                    alt=""
                    className="absolute left-0 top-0 w-full h-full object-cover z-0"
                  />
                  <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10" />
                  <input
                    type="checkbox"
                    name={org.title}
                    id={`checkbox-${index}`}
                    className="peer hidden"
                    onChange={(e) => filterSearch(e, 'organization', org.name)}
                    checked={
                      matchesForOrgs && matchesForOrgs[3].includes(org.name)
                    }
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none z-10 group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black"
                  >
                    {org.title}
                  </label>
                  <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-800 hidden peer-checked:block z-0" />
                </li>
              </SwiperSlide>
            ))}
          </FilterCarousel>
        </ul>
      )}
    </div>
  );
}
