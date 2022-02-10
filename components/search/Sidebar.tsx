import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import {
  GET_ORGS_QUERY,
  GET_CATEGORIES_QUERY,
  GET_KEYWORDS_QUERY,
} from '../../graphql/queries';
import { ErrorMessage } from '../_shared';

export default function Sidebar({ setQvariables, sideFilter, setSideFilter }) {
  const [showMore, setShowMore] = useState({ orgs: 5, category: 5 });

  const queryMultiple = () => {
    const orgsQuery = useQuery(GET_ORGS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });
    const categoriesQuery = useQuery(GET_CATEGORIES_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    const keywordsQuery = useQuery(GET_KEYWORDS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    return [orgsQuery, categoriesQuery, keywordsQuery];
  };
  const [
    { loading: loadOrgs, error: errorOrg, data: dataOrgs },
    { loading: loadCategories, error: errorCategories, data: dataCategories },
    { loading: loadingKeywords, error: errorKeywords, data: dataKeywords },
  ] = queryMultiple();

  if (errorOrg) return <ErrorMessage message="Error loading organizations" />;
  if (loadOrgs) return <div>Loading Organizations</div>;
  if (errorCategories)
    return <ErrorMessage message="Error loading Categories" />;
  if (loadCategories) return <div>Loading Categories</div>;
  if (errorKeywords) return <ErrorMessage message="Error loading keywords" />;
  if (loadingKeywords) return <div>Loading Keywords</div>;
  const orgsResults = dataOrgs.orgs.result;
  const categoriesResults = dataCategories.categories.result;
  const keywordsResults =
    dataKeywords.keywords.result.search_facets.tags.items;

  const showMoreEvt = (btnType) => {
    if (btnType === 'orgs') {
      setShowMore((prev) => {
        const newShow = { ...prev, orgs: orgsResults.length };
        return newShow;
      });
    } else {
      setShowMore((prev) => {
        const newShow = { ...prev, category: orgsResults.length };
        return newShow;
      });
    }
  };

  const showLessEvt = (btnType) => {
    if (btnType === 'orgs') {
      setShowMore((prev) => {
        const newShow = { ...prev, orgs: 5 };
        return newShow;
      });
    } else {
      setShowMore((prev) => {
        const newShow = { ...prev, category: 5 };
        return newShow;
      });
    }
  };

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
    } else {
      setSideFilter((prev) => {
        const newFilter = { ...prev };
        const index = newFilter[btnType].indexOf(name);
        newFilter[btnType].splice(index, 1);

        const fq = generateFq(newFilter);

        setQvariables((prev) => {
          const newQ = { ...prev, fq: fq };
          console.log(newQ);
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

  return (
    <div className="p-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Organizations
        </h3>
        <div className="flex flex-col sm:h-3/4 overflow-y-scroll">
          <ul className="max-h-64 pb-4">
            {orgsResults.slice(0, showMore.orgs).map((org, index) => (
              <li key={index} className="mb-4">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={org.title}
                  value={org.title}
                  className="rounded focus:ring-0 ring-offset-0"
                  onChange={(e) => filterSearch(e, 'organization', org.name)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="text-sm font-medium text-center text-gray-600 capitalize pl-4"
                >
                  {org.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
        {orgsResults.length > 5 && showMore.orgs === 5 ? (
          <div className="mt-4">
            <button
              className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500"
              onClick={() => showMoreEvt('orgs')}
            >
              Show More
            </button>
          </div>
        ) : (
          ''
        )}
        {orgsResults.length > 5 && showMore.orgs > 5 ? (
          <div className="mt-4">
            <button
              className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500"
              onClick={() => showLessEvt('orgs')}
            >
              Show Less
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mt-12 mb-12">
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Themes
        </h3>
        <div className="flex flex-col sm:h-3/4 overflow-y-scroll">
          <ul className="max-h-64 pb-4">
            {categoriesResults
              .slice(0, showMore.category)
              .map((category, index) => (
                <li key={index} className="mb-4">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={category.name}
                    value={category.name}
                    onChange={(e) => filterSearch(e, 'groups', category.name)}
                    className="rounded focus:ring-0 ring-offset-0"
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="text-sm font-medium text-center text-gray-600 capitalize pl-4"
                  >
                    {category.display_name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {categoriesResults.length > 5 && showMore.category === 5 ? (
          <div className="mt-4">
            <button
              className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500"
              onClick={() => showMoreEvt('category')}
            >
              Show More
            </button>
          </div>
        ) : (
          ''
        )}
        {categoriesResults.length > 5 && showMore.category > 5 ? (
          <div className="mt-4">
            <button
              className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500"
              onClick={() => showLessEvt('category')}
            >
              Show Less
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Keywords
        </h3>
        <div className="grid grid-cols-2 grid-rows-auto gap-4">
          {keywordsResults
            ? keywordsResults.map((keyword, index) => (
                <button
                  key={index}
                  className="bg-gray-100 rounded-2xl capitalize text-center appearance-none focus:outline-none focus:bg-blue-400"
                >
                  <span className="text-xs">{keyword.display_name}</span>
                </button>
              ))
            : 'N/A'}
        </div>
      </div>
    </div>
  );
}
