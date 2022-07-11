import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import React from 'react';
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

const Organization: React.FC<any> = ({ variables }) => {
  const router = useRouter();
  const { org: orgParam } = router.query;
  const org = (orgParam as string).replace('@', '');

  const goToOrg = (org: any) => {
    router.push(`${org.name}`, undefined, { shallow: true });
  };

  const {
    data: orgsTreeData,
    loading: orgsTreeLoading,
    error: orgsTreeError,
  } = useQuery(GET_ORGS_TREE_QUERY);

  const {
    data: orgsData,
    loading: orgsLoading,
    error: orgsError,
  } = useQuery(GET_ORGS_FULL_INFO_QUERY);

  if (orgsTreeLoading || orgsLoading) return <div>Loading Topics</div>;
  if (orgsError)
    return <ErrorMessage message="Error loading organizations." />;

  console.log(orgsTreeData.orgs.result.filter((el) => el.length > 0));

  const orgs = orgsData.orgs.result;

  return (
    <>
      <Head>
        {/* TODO: should be the name of the active
            org here */}
        <title>Portal | Organizations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-12 mx-10 md:mx-28 pb-20 text-[#4D4D4D]">
        <div className="w-100">
          <div className="mb-20">
            <OrgsCarousel
              orgs={orgs}
              active={{ name: org }}
              orgOnClick={goToOrg}
            />
          </div>

          <MainOptions org={org}></MainOptions>

          <DeveloperExperience />
          <div>
            <OpenData101 />
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const org = (context.query.org as string).replace('@', '');

  const variables = {
    id: org,
  };
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ORG_QUERY,
    variables,
  });

  await apolloClient.query({
    query: GET_ORGS_FULL_INFO_QUERY,
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
