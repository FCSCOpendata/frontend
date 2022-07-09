import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import Head from 'next/head';
import { initializeApollo } from '../../lib/apolloClient';
import ImageHeader from '../../components/_shared/image_header/ImageHeader';
import DeveloperExperience from '../../components/_shared/developer_experience/DeveloperExperience';
import OpenData101 from '../../components/home/main/OpenData101';
import { ErrorMessage } from '../../components/_shared';
import { GET_ORGS_QUERY, GET_ORG_QUERY } from '../../graphql/queries';
import TopicCarousel from '../../components/_shared/carousel/icon_card/Carousel';
import DatasetsList from '../../components/_shared/DatasetsList';

const Org: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, error, loading } = useQuery(GET_ORG_QUERY, { variables });
  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const { result } = data.org;

  const [devExperience, setDevExperience] = useState({
    expanded: false,
    idx: 0,
  });

  const toggleDevExp = () => {
    setDevExperience({
      expanded: !devExperience.expanded,
      idx: devExperience.idx,
    });
  };

  const {
    data: orgsData,
    error: orgsError,
    loading: orgsLoading,
  } = useQuery(GET_ORGS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (orgsError)
    return <ErrorMessage message="Error loading search results." />;
  if (orgsLoading) return <div>Loading</div>;

  const orgs = orgsData.orgs.result;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
      </Head>
      <main className="py-12 mx-10 md:mx-28 pb-20 text-[#4D4D4D]">
        <div className="w-100">
          <div className="mb-20">
            <TopicCarousel items={orgs} activeTopic={orgs} />
          </div>
          <div className="mb-20">
            <ImageHeader items={data} datasetsCount={data.total} />
          </div>

          <div className="mb-20">
            <h1 className="font-semibold text-3xl mb-6">
              Explore Top Datasets In This Theme ({data.total})
            </h1>
            <DatasetsList
              // TODO: improve this logic
              organization={data?.name}
            />
          </div>
          <div>
            <button onClick={() => toggleDevExp()}>
              <h1 className="font-semibold text-3xl mb-6 flex items-center pointer">
                {/* TODO: check this vertical alignment */}
                <span className="bg-[#CBE9FF] p-[9px] w-[30px] rounded-md mr-5">
                  <img
                    src="/images/plus.svg"
                    width={12}
                    alt="Expand developer experience"
                  />
                </span>
                Developer Experience
              </h1>
            </button>
            <div
              className={`transition-all overflow-hidden ${
                devExperience.expanded ? 'max-h-max' : 'max-h-0'
              }`}
            >
              <DeveloperExperience />
            </div>
          </div>
          <OpenData101 />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const variables = {
    id: (context.query.org as string).replace('@', ''),
  };

  const { data } = await apolloClient.query({
    query: GET_ORG_QUERY,
    variables,
  });

  if (!data.org) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Org;
