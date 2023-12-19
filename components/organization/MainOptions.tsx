import { useQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import {
  GET_ORGS_FULL_INFO_QUERY,
  GET_ORG_FULL_INFO_QUERY,
} from '../../graphql/queries';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

const DatasetsList = dynamic(
  () => import('../../components/organization/DatasetsList')
);
const OrgHeader = dynamic(
  () => import('../../components/organization/Header')
);
const SubOrgsCarousel = dynamic(() => import('./SubOrgsCarousel'));

import { ErrorMessage, Spinner } from '../../components/_shared';
import { useRouter } from 'next/router';
import { fixTranslations } from '../../hooks/locale';

const MainOptions: React.FC<any> = ({
  org,
  orgsTree,
  orgOnClick,
  setActiveOrg,
}) => {
  const { t } = useTranslation('common');
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

  useEffect(() => {
    if (orgData?.org) {
      const tmp = orgData.org.result;
      setActiveOrg({
        org: {
          icon: {
            url: tmp?.logo_display_url || tmp?.logo_url,
          },
        },
      });
    }
  }, [orgData]);

  //  TODO: not the best way to find the
  //  org's children
  const name = org;
  const findOrgChildren = (orgs) => {
    if (orgs)
      for (org of orgs) {
        if (org.name == name) return org.children;
        else if (org.children?.length > 0) {
          return findOrgChildren(org.children);
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

  if (subOrgsLoading || orgLoading)
    return (
      <div className="w-full flex justify-center">
        <Spinner className="mt-10" size="10" id="loading" />
      </div>
    );
  if (subOrgsError || orgError || !orgData?.org)
    return (
      <ErrorMessage
        error={subOrgsError || orgError}
        message="Error loading organization."
      />
    );

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

  fixTranslations(activeOrg);
  subOrgs.forEach((subOrg) => fixTranslations(subOrg));

  return (
    <>
      <div className="mb-20">
        <OrgHeader
          color="#188154"
          org={activeOrg}
          datasetsCount={activeOrg?.package_count}
          badgeOnClick={() => {
            document
              .getElementById('explore-top-datasets')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
      {children?.length > 0 && (
        <div className="mb-20">
          <h1 className="font-semibold text-2xl sm:text-3xl mb-6">
            {t('og-h-sub')}
          </h1>
          <SubOrgsCarousel orgs={subOrgs} orgOnClick={onSubOrgClick} />
        </div>
      )}

      <div className="mb-20" id="explore-top-datasets">
        <h1 className="font-semibold text-2xl sm:text-3xl">
          {t('og-h-expl', { count: activeOrg?.package_count })}
        </h1>
        <DatasetsList
          key={activeOrg.name}
          // TODO: improve this logic
          org={{ name: activeOrg.name }}
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
