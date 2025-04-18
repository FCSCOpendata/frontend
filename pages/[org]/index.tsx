import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React, { useState } from 'react';
import {
  GET_ORGS_FULL_INFO_QUERY,
  GET_ORGS_TREE_QUERY,
  GET_ORG_QUERY,
} from '../../graphql/queries';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../lib/apolloClient';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const DeveloperExperience = dynamic(
  () =>
    import('../../components/_shared/developer_experience/DeveloperExperience')
);
const OrgsCarousel = dynamic(
  () => import('../../components/organization/OrgsCarousel')
);
const OpenData101 = dynamic(
  () => import('../../components/home/main/OpenData101')
);
import { ErrorMessage } from '../../components/_shared';
import MainOptions from '../../components/organization/MainOptions';
import ScrollIndicator from '../../components/_shared/ScrollIndicator';
import { fixTranslations } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';

const Organization: React.FC<any> = ({ variables }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { org: orgParam } = router.query;
  const org = (orgParam as string).replace('@', '');
  const [activeOrg, setActiveOrg] = useState({ org: null });

  const handleOrgChange = (org: any) => {
    setActiveOrg({ org });
    router.push(`@${org.name}`, undefined, { shallow: true });
  };

  const {
    data: orgsTreeData,
    loading: orgsTreeLoading,
    error: orgsTreeError,
  } = useQuery(GET_ORGS_TREE_QUERY);

  if (orgsTreeLoading) return <div>Loading Organizations</div>;
  if (orgsTreeError)
    return <ErrorMessage message="Error loading organizations." />;

  const {
    data: orgsData,
    loading: orgsLoading,
    error: orgsError,
  } = useQuery(GET_ORGS_FULL_INFO_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: variables,
  });

  if (orgsTreeLoading || orgsLoading) return <div>Loading Organizations</div>;
  if (orgsError)
    return <ErrorMessage message="Error loading organizations." />;

  const orgs = orgsData.orgs.result;

  orgs.forEach((el) => fixTranslations(el));

  return (
    <>
      <Head>
        <title>{`${t('organization')} | ${t('title')}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-12 mx-5 md:mx-20 pb-20 text-[#4D4D4D]">
        <ScrollIndicator
          firstImage={{
            url: activeOrg?.org?.icon?.url || '/images/no_icon_org.svg',
            alt: 'First stop',
          }}
          lastImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'Last stop',
          }}
          stops={[
            { id: 'organizations' },
            // { id: 'sub-organizations' },
            { id: 'explore-top-datasets' },
            { id: 'developer-experience' },
            { id: 'open-data-101' },
          ]}
        />

        <div className="w-100">
          <div className="mb-10" id="organizations">
            <OrgsCarousel
              orgs={orgs}
              active={{ name: org }}
              orgOnClick={handleOrgChange}
            />
          </div>

          <MainOptions
            org={org}
            orgsTree={orgsTreeData.orgs.result}
            orgOnClick={handleOrgChange}
            setActiveOrg={setActiveOrg}
          ></MainOptions>

          <div id="developer-experience">
            <DeveloperExperience
              api={
                typeof window !== 'undefined'
                  ? `${window.location.origin}/api/organization?id=${org}`
                  : ''
              }
            />
          </div>
        </div>
      </main>
      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const org = (context.query.org as string).replace('@', '');

  await apolloClient.query({
    query: GET_ORG_QUERY,
    variables: {
      id: org,
    },
  });

  await apolloClient.query({
    query: GET_ORGS_TREE_QUERY,
  });

  const orgsTreeData = apolloClient.readQuery({
    query: GET_ORGS_TREE_QUERY,
  })?.orgs?.result;
  const mainOrgsNames = orgsTreeData.map((org) => `"${org.name}"`);

  const variables = {
    organizations: `[${mainOrgsNames.join(',')}]`,
  };

  await apolloClient.query({
    query: GET_ORGS_FULL_INFO_QUERY,
    variables: variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
      org,
    },
  };
};

export default Organization;
