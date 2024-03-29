import { useQuery } from '@apollo/react-hooks';
import { useRef, useState } from 'react';
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
import MultiRangeSlider from '../_shared/MultiRangeSlider/MultiRangeSlider';
import useTranslation from 'next-translate/useTranslation';
import { AR, fixTranslations } from '../../hooks/locale';
import NavButton from '../_shared/carousel/NavButton';
const TopicsCarousel = dynamic(() => import('./filters/TopicFilterCarousel'));

export default function FiltersBar({
  qvariables,
  setQvariables,
  setSideFilter,
  filters,
  sideFilter,
  onPageChange,
}) {
  const { t } = useTranslation('common');
  const { query } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const [slider, setSlider] = useState({
    max: new Date().getFullYear(),
    min: 1980,
  });
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(42);
  const minValRef = useRef(0);
  const maxValRef = useRef(42);
  const [modal, setModal] = useState(false);

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

  if (errorOrg)
    return (
      <ErrorMessage error={errorOrg} message="Error loading organizations" />
    );
  if (loadOrgs) return <Spinner />;
  if (errorCollections)
    return (
      <ErrorMessage
        error={errorCollections}
        message="Error loading Collections"
      />
    );
  if (loadCollections) return <Spinner />;
  if (errorTopics)
    return (
      <ErrorMessage error={errorTopics} message="Error loading topics tree" />
    );
  if (loadTopics) return <Spinner />;
  const orgsResults = dataOrgs?.orgs?.result;
  const collectionsResults = dataCollections?.collections?.result;

  const filterSearch = (event, btnType, item) => {
    if (event.target.id !== 'true') {
      setSideFilter((prev) => {
        const newFilter = { ...prev };
        newFilter[btnType].push(item);

        const fq = generateFq(newFilter);

        setQvariables((prev) => {
          const newQ = { ...prev, fq: fq };
          return newQ;
        });
        return newFilter;
      });
      onPageChange(1);
    } else if (btnType === 'keyword') {
      const fq = `tags:${item}`;
      setQvariables((prev) => ({
        ...prev,
        fq: fq,
      }));
      onPageChange(1);
    } else {
      setSideFilter((prev) => {
        const newFilter = { ...prev };
        const index = newFilter[btnType].indexOf(item);
        newFilter[btnType].splice(index, 1);

        const fq = generateFq(newFilter);

        setQvariables((prev) => {
          const newQ = { ...prev, fq: fq };

          return newQ;
        });
        return newFilter;
      });
      onPageChange(1);
    }
  };

  const generateFq = (sideFilter) => {
    const getValue = (item) => {
      return typeof item === 'string' ? item : item.name;
    };

    let fq = query.fq || '';
    let keyIndex = 0;
    for (const key of Object.keys(sideFilter)) {
      if (sideFilter[key].length > 0) {
        let innerFq;
        if (keyIndex > 0) {
          innerFq = `+${key}:(${getValue(sideFilter[key][0])}`;
        } else {
          innerFq = `${key}:(${getValue(sideFilter[key][0])}`;
        }
        for (let i = 1; i < sideFilter[key].length; i++) {
          innerFq += ` OR ${getValue(sideFilter[key][i])}`;
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
    [t('ds-bt-time-cust')]: null,
    [t('ds-bt-time-1yr')]: 1,
    [t('ds-bt-time-2yr')]: 2,
    [t('ds-bt-time-3yr')]: 3,
    [t('ds-bt-time-4yr')]: 4,
    [t('ds-bt-time-5yr')]: 5,
  };
  const setTimeSearchValue = (key, index) => {
    if (key !== 'Custom') {
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
    } else {
      setCurrentTimeIndex(index);
    }
  };

  const setCustomTimeSearchValue = (min, max) => {
    const minDate = 1980;
    setSlider({ ...slider, min: minDate + min, max: minDate + max });
    const startString = `[${minDate + min} TO ${minDate + max + 1}]`;
    setSideFilter((prev) => {
      const newFilter = { ...prev };
      newFilter['start_period'] = [startString];
      const fq = generateFq(newFilter);
      setQvariables((prev) => {
        const newQ = { ...prev, fq: fq };
        return newQ;
      });
      return newFilter;
    });
  };

  const setMax = (event) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
    setCustomTimeSearchValue(minVal, value);
  };

  const setMin = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    setCustomTimeSearchValue(value, maxVal);
  };

  const clearCustom = () => {
    setMaxVal(42);
    maxValRef.current = 42;
    setMinVal(0);
    minValRef.current = 0;
    setSlider({
      max: new Date().getFullYear(),
      min: 1980,
    });
    setSideFilter((prev) => {
      const newFilter = { ...prev };
      newFilter['start_period'] = [];
      const fq = generateFq(newFilter);
      setQvariables((prev) => {
        const newQ = { ...prev, fq: fq };
        return newQ;
      });
      return newFilter;
    });
  };

  topics.forEach((el) => fixTranslations(el));
  orgsResults.forEach((el) => fixTranslations(el));
  collectionsResults.forEach((el) => fixTranslations(el));

  sideFilter.groups.forEach((el) => fixTranslations(el));
  sideFilter.organization.forEach((el) => fixTranslations(el));

  return (
    <div className="w-full">
      {filters === t('topics') && (
        <>
          <div className="">
            <div id="topics" className="mx-5 bg-white rounded-xl py-2">
              <TopicsCarousel
                items={topics}
                active={{ name: null }}
                currentIndex={currentIndex}
                itemOnClick={setCurrentIndex}
                identifier="topics-carousel"
              />
            </div>
          </div>

          <div className="w-100 max-w-6xl mt-2 mx-auto px-5">
            <div className="relative">
              <div className="peer">
                <FilterCarousel identifier="sub-topics-carousel">
                  {topics[currentIndex].children.map((sub, index) => (
                    <SwiperSlide key={index} className="p-1">
                      <button
                        key={sub.id}
                        className="group relative flex flex-wrap bg-gray-200 h-40 w-full rounded-xl overflow-hidden"
                        onClick={(e) => filterSearch(e, 'groups', sub)}
                      >
                        <img
                          src={
                            sub.image_display_url ||
                            `/images/topics/topic-1.png`
                          }
                          alt={sub.title}
                          width="100%"
                          className="top-0 w-full h-full object-cover z-0"
                        />
                        <span
                          className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 transition-all border-[#22B373] rounded-b-l z-10"
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
                          className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none group-hover:bg-slate-200 transition-all group-hover:opacity-75 group-hover:text-black font-avenir"
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
              <div
                className={`transition-all opacity-0 peer-hover:opacity-100 hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 ml-[-1.5rem] md:left-0 z-50 nav-prev-button--sub-topics-carousel`}
              >
                <NavButton orientation="left" />
              </div>
              <div
                className={`transition-all opacity-0 peer-hover:opacity-100 hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 mr-[-1.5rem] md:right-0 z-50 nav-next-button--sub-topics-carousel`}
              >
                <NavButton orientation="right" />
              </div>
            </div>
          </div>
        </>
      )}
      {filters === t('organization') && (
        <div className="w-100 lg:max-w-6xl mx-5 mt-2">
          <div className="relative">
            <div className="peer">
              <FilterCarousel identifier="orgs-carousel">
                {orgsResults.map((org, index) => (
                  <SwiperSlide key={index} className="p-1">
                    <button
                      key={org.id}
                      className="group relative flex flex-wrap bg-gray-200 w-full h-40 rounded-xl overflow-hidden"
                      onClick={(e) => filterSearch(e, 'organization', org)}
                    >
                      <img
                        src={org.image || '/images/org-default.png'}
                        alt={org.name}
                        className="absolute left-0 top-0 w-full h-full  object-cover z-0 rounded-xl"
                      />
                      <span
                        className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 transition-all border-[#22B373] rounded-b-l z-10"
                        id={`${
                          matchesForOrgs &&
                          matchesForOrgs[3].includes(org.name)
                        }`}
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        //  NOTE: z-index removed because it makes
                        //  the onclick not work and  doen't  seem
                        //  to be necessary for the UI. Was `z-10`
                        className="absolute left-0 bottom-0 text-white text-sm font-semibold w-full p-4 cursor-pointer select-none group-hover:bg-slate-200 transition-all group-hover:opacity-75 group-hover:text-black font-avenir"
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
            <div
              className={`transition-all opacity-0 peer-hover:opacity-100 hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 ml-[-1.5rem] md:left-0 z-50 nav-prev-button--orgs-carousel`}
            >
              <NavButton orientation="left" />
            </div>
            <div
              className={`transition-all opacity-0 peer-hover:opacity-100 hover:opacity-100 absolute hidden lg:block top-[50%] -translate-y-2/4 mr-[-1.5rem] md:right-0 z-50 nav-next-button--orgs-carousel`}
            >
              <NavButton orientation="right" />
            </div>
          </div>
        </div>
      )}

      {filters === t('ds-bt-time') && (
        <div className="min-w-full px-5">
          <div className="w-full rounded-xl mt-2 can mt-2 bg-white flex flex-col sm:flex-row">
            {Object.keys(timeFrames).map((timeframe, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-xl font-avenir ${
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
        </div>
      )}

      {currentTimeIndex === 0 && filters === t('ds-bt-time') && (
        <div className="w-full mt-4 px-5">
          <div className="flex flex-col w-full lg:w-1/2  pt-6 px-8 font-[Raleway] bg-white relative rounded-xl triangle">
            <div>
              <MultiRangeSlider
                min={0}
                max={42}
                minVal={minVal}
                maxVal={maxVal}
                minValRef={minValRef}
                maxValRef={maxValRef}
                setMin={setMin}
                setMax={setMax}
              />
            </div>
            <div className="flex w-full mb-4 mt-8">
              <div className="flex rounded-xl p-2 bg-[#F6F6F6]  w-2/5 mr-4 text-[14px] font-medium text-[#464646]">
                <img
                  src="/images/calender-icon.svg"
                  alt="orgs"
                  className="w-5 mb-1 "
                />
                <span>{slider.min}</span>
              </div>
              <span className="self-center">-</span>
              <div className="flex rounded-xl p-2  w-2/5 ml-4 bg-[#F6F6F6] text-[14px] font-medium text-[#464646]">
                <img
                  src="/images/calender-icon.svg"
                  alt="orgs"
                  className="w-5 mb-1 "
                />
                <span>{slider.max}</span>
              </div>
            </div>
            <div>
              <button
                className="text-blue-500 font-[Raleway] text-[10px]"
                onClick={() => clearCustom()}
              >
                {t('ds-bt-time-clear')}
              </button>
            </div>
          </div>
        </div>
      )}
      {(sideFilter.groups.length > 0 ||
        sideFilter.organization.length > 0) && (
        <div className="flex flex-col mx-5 mt-5">
          <span className="font-bold">{t('active-filters')}</span>
          {sideFilter.groups.length > 0 && (
            <div className="flex w-100 max-w-6xl items-between">
              <span className="mt-2 font-bold">{t('topics')}:</span>
              <div className="flex flex-wrap ml-12">
                {sideFilter.groups.map((group, index) => (
                  <div
                    className={`${AR(
                      'mr-2',
                      'ml-2'
                    )} px-2 bg-blue-100 rounded-lg mt-2`}
                    key={index}
                  >
                    <span className={`${AR('ml-2', 'mr-2')}`}>
                      {group.title}
                    </span>
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
              <span className="mt-2 font-bold">{t('organization')}:</span>
              <div className="flex flex-wrap">
                {sideFilter.organization.map((org, index) => (
                  <div
                    className={`${AR(
                      'mr-2',
                      'ml-2'
                    )} px-2 bg-blue-100 rounded-lg mt-2`}
                    key={index}
                  >
                    <span className={`${AR('ml-2', 'mr-2')}`}>
                      {org.title}
                    </span>
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
