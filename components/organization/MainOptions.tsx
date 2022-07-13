import { useQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
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
import { useRouter } from 'next/router';
import CopyButton from '../_shared/CopyButton';

const MainOptions: React.FC<any> = ({ org, orgsTree, orgOnClick }) => {
  const router = useRouter();
  const { searchPage } = router.query;

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

  useEffect(() => {
    if (searchPage && !subOrgsLoading) {
      setTimeout(() => {
        document
          .getElementById('explore-top-datasets')
          .scrollIntoView({ behavior: 'smooth' });
        //  NOTE: this timeout might not be ideal
        //  but without it there must be  another
        //  wait to wait for the datasets loading
      }, 1000);
    }
  }, [subOrgsLoading]);

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

      <div className="mb-20" id="explore-top-datasets">
        <div className="lg:flex justify-between items-center mb-6">
          <h1 className="font-semibold text-2xl sm:text-3xl">
            Explore Top Datasets In This Theme ({activeOrg?.package_count})
          </h1>
          <span className="ml-3 select-none">
            <CopyButton content={document.location.href}>
              Copy this page{"'"}s URL
            </CopyButton>
          </span>
        </div>
        <DatasetsList
          // TODO: improve this logic
          org={activeOrg?.name}
          onPageChange={(page) => {
            router.query.searchPage = page + '';
            router.push(router, undefined, { shallow: true });
            document
              .getElementById('explore-top-datasets')
              .scrollIntoView({ behavior: 'smooth' });
          }}
          page={searchPage}
        />
      </div>
    </>
  );
};

export default MainOptions;
