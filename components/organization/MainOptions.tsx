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

  const onSubOrgClick = (subOrg) => {
    orgOnClick(subOrg);
    //  TODO: this scroll is glitching in some occasions.
    //  I think it's related to the loading states.
    //  Currently it's pointing to body because it  works
    //  more consistently, but ideally it would be better
    //  to scroll to the center of the header...
    setTimeout(() => {
      const el = document.getElementsByTagName('body')[0];

      el.scrollIntoView({
        behavior: 'smooth',
        //  ... using these props
        // block: 'center',
        // inline: 'center',
      });
    }, 250);
  };

  return (
    <>
      <div className="mb-20">
        <OrgHeader org={activeOrg} datasetsCount={activeOrg?.package_count} />
      </div>
      {children?.length > 0 && (
        <div className="mb-20">
          <h1 className="font-semibold text-3xl mb-6">Sub Organizations</h1>
          <SubOrgsCarousel orgs={subOrgs} orgOnClick={onSubOrgClick} />
        </div>
      )}

      <div className="mb-20" id="explore-top-datasets">
        <h1 className="font-semibold text-2xl sm:text-3xl">
          Explore Top Datasets In This Theme ({activeOrg?.package_count})
        </h1>
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
