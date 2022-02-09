import { useQuery } from '@apollo/react-hooks';
import { GET_ORG_WITH_PACKAGES_QUERY } from '../../graphql/queries';
import { ErrorMessage } from '../_shared';
import Link from 'next/link';

export default function SimilarDatasets({ organization }) {
  const orgName = organization.name;
  const { loading, error, data } = useQuery(GET_ORG_WITH_PACKAGES_QUERY, {
    variables: { id: orgName },
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading similar datasets" />;
  if (loading) return <div>Loading Similar Datasets</div>;
  const orgPackages = data.org.result.packages.slice(0, 2);
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-8">
        More Datasets By {organization.title}
      </h3>
      <div className="flex flex-1 space-x-5">
        {orgPackages.map((dataset, index) => (
          <Link key={index} href={`/@${orgName}/${dataset.name}`}>
            {/* eslint-disable-next-line */}
            <a className="flex bg-blue-100 rounded-2xl capitalize px-6 py-2 text-center">
              <span className="flex-1 text-xs text-blue-800 font-bold">
                {dataset.title}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
