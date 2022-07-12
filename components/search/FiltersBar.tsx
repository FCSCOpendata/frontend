import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import {
  GET_ORGS_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_TOPICS_TREE_QUERY,
} from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function FiltersBar({ setQvariables, setSideFilter, filters }) {
  // const [showMore, setShowMore] = useState({ orgs: 5, collections: 5 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const queryMultiple = () => {
    const orgsQuery = useQuery(GET_ORGS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });
    const collectionsQuery = useQuery(GET_COLLECTIONS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    const topicsQuery = useQuery(GET_TOPICS_TREE_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

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
    let fq = '';
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
    return fq.trim();
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

  return (
    <div className="">
      {filters === 'Topics' && (
        <>
          <ul className="flex flex-wrap items-center bg-white text-sm p-2 rounded-xl w-fit mx-auto max-w-6xl">
            {topics.map((topic, index) => (
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
            ))}
          </ul>
          <ul className="flex gap-2 mt-4 w-fit mx-auto">
            {topics[currentIndex].children.map((sub, index) => (
              <li
                key={sub.id}
                className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
              >
                <img
                  src={`/images/topics/topic-1.png`}
                  alt=""
                  className="absolute left-0 top-0 w-full h-full object-cover z-0 ease-in-out duration-300 group-hover:scale-110"
                />
                <span className="absolute left-0 top-0 w-full h-full bg-gray-400/60" />
                <input
                  type="checkbox"
                  name={sub.title}
                  id={`checkbox-${index}`}
                  className="peer hidden"
                  onChange={(e) => filterSearch(e, 'groups', sub.name)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="text-white text-sm font-semibold w-full h-full p-4 cursor-pointer select-none z-10"
                >
                  {sub.title}
                </label>
                <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-600 hidden peer-checked:block" />
              </li>
            ))}
          </ul>
        </>
      )}
      {filters === 'Organizations' && (
        <ul className="flex gap-2 mt-4 justify-start">
          {orgsResults.map((org, index) => (
            <li
              key={org.id}
              className="group relative flex flex-wrap bg-gray-200 w-40 h-40 rounded-xl overflow-hidden"
            >
              <img
                src={`/images/topics/topic-2.png`}
                alt=""
                className="absolute left-0 top-0 w-full h-full object-cover z-0 ease-in-out duration-300 group-hover:scale-110"
              />
              <span className="absolute left-0 top-0 w-full h-full bg-gray-400/60" />
              <input
                type="checkbox"
                name={org.title}
                id={`checkbox-${index}`}
                className="peer hidden"
                onChange={(e) => filterSearch(e, 'organization', org.name)}
              />
              <label
                htmlFor={`checkbox-${index}`}
                className="text-white text-sm font-semibold w-full h-full p-4 cursor-pointer z-10"
              >
                {org.title}
              </label>
              <CheckCircleIcon className="absolute top-1 right-1 w-5 text-green-800 hidden peer-checked:block z-0" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
