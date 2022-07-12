import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import {
  GET_ORGS_FULL_INFO_QUERY,
  GET_ORG_FULL_INFO_QUERY,
} from '../../graphql/queries';
import dynamic from 'next/dynamic';

const DatasetsList = dynamic(
  () => import('../../components/organization/DatasetsList')
);
const OrgHeader = dynamic(
  () => import('../../components/organization/Header')
);
const SubOrgsCarousel = dynamic(() => import('./SubOrgsCarousel'));

import { ErrorMessage } from '../../components/_shared';

const MainOptions: React.FC<any> = ({ org, orgsTree, orgOnClick }) => {
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

  //  TODO: not the best way to find the
  //  org's children
  const name = org;
  const findOrgChildren = (orgs) => {
    for (org of orgs) {
      if (org.name == name) return org.children;
      else if (org.children?.length > 0) {
        return findOrgChildren(org);
      }
    }
    return [];
  };

  const children = findOrgChildren(orgsTree);

  //  TODO: this is not completely right,
  //  as it's going to load all the  orgs
  //  case there's no children. Same  for
  //  topics.
  const childrenFilter = children?.map((o) => `"${o.name}"`);

  const {
    data: subOrgsData,
    loading: subOrgsLoading,
    error: subOrgsError,
  } = useQuery(GET_ORGS_FULL_INFO_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      organizations: `[${childrenFilter.join(',')}]`,
    },
  });

  if (subOrgsLoading || orgLoading) return <div>Loading Organization</div>;
  if (subOrgsError || orgError)
    return <ErrorMessage message="Error loading organization." />;

  const activeOrg = orgData?.org?.result;
  const subOrgs = subOrgsData?.orgs?.result;

  return (
    <>
      <div className="mb-20">
        <OrgHeader org={activeOrg} datasetsCount={activeOrg?.package_count} />
      </div>
      {children?.length > 0 && (
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-6">Sub Organizations</h1>
          <SubOrgsCarousel orgs={subOrgs} orgOnClick={orgOnClick} />
        </div>
      )}

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
