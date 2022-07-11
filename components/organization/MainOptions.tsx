import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_ORG_FULL_INFO_QUERY } from '../../graphql/queries';
import dynamic from 'next/dynamic';

const DatasetsList = dynamic(
  () => import('../../components/organization/DatasetsList')
);
const OrgHeader = dynamic(
  () => import('../../components/organization/Header')
);
import { ErrorMessage } from '../../components/_shared';

const MainOptions: React.FC<any> = ({ org }) => {
  const {
    loading: orgLoading,
    error: orgError,
    data: orgData,
  } = useQuery(GET_ORG_FULL_INFO_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: org,
    },
  });

  if (orgError) return <ErrorMessage message="Error loading topics." />;
  if (orgLoading) return <div>Loading Topics</div>;

  const activeOrg = orgData?.org?.result;

  return (
    <>
      <div className="mb-20">
        <OrgHeader org={activeOrg} datasetsCount={activeOrg?.package_count} />
      </div>

      <div className="mb-20">
        <h1 className="font-semibold text-3xl mb-6">
          Explore Top Datasets In This Theme ({activeOrg?.package_count})
        </h1>
        <DatasetsList
          // TODO: improve this logic
          org={activeOrg?.name}
        />
      </div>
    </>
  );
};

export default MainOptions;
