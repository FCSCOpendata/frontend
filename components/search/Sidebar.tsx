import { useQuery } from '@apollo/react-hooks';
import { GET_ORGS_QUERY, GET_CATEGORIES_QUERY } from '../../graphql/queries';
import { ErrorMessage } from '../_shared';

export default function Sidebar(variables) {
  const queryMultiple = () => {
    const orgs_query = useQuery(GET_ORGS_QUERY, {
      notifyOnNetworkStatusChange: true,
    });
    const categories_query = useQuery(GET_CATEGORIES_QUERY, {
      notifyOnNetworkStatusChange: true,
    });

    return [orgs_query, categories_query];
  };
  const [
    { loading: loadOrgs, error: errorOrg, data: dataOrgs },
    { loading: loadCategories, error: errorCategories, data: dataCategories },
  ] = queryMultiple();

  if (errorOrg) return <ErrorMessage message="Error loading organizations" />;
  if (loadOrgs) return <div>Loading Organizations</div>;
  if (errorCategories)
    return <ErrorMessage message="Error loading Categories" />;
  if (loadCategories) return <div>Loading Categories</div>;
  const org_results = dataOrgs.orgs.result;
  const categories_results = dataCategories.categories.result;

  return (
    <div className="p-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Organizations
        </h3>
        <div className="flex flex-col sm:h-3/4 overflow-y-scroll">
          <ul className="max-h-64 pb-4">
            {org_results.map((org, index) => (
              <li key={index} className="mb-4">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={org.title}
                  value={org.title}
                  className="rounded"
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
        <div className="mt-4">
          <button className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500">
            Show More
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mt-12 mb-12">
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Themes
        </h3>
        <div className="flex flex-col sm:h-3/4 overflow-y-scroll">
          <ul className="max-h-64 pb-4">
            {categories_results.map((category, index) => (
              <li key={index} className="mb-4">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={category.name}
                  value={category.name}
                  className="rounded"
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
        <div className="mt-4">
          <button className="bg-gray-200 rounded px-2 py-1 text-xs text-gray-500">
            Show More
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-900 capitalize mb-4">
          Refine By Keywords
        </h3>
      </div>
    </div>
  );
}
