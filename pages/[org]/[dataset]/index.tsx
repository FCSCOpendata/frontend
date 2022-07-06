import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../graphql/queries';
import NavBreadCrumbs from '../../../components/dataset/NavBreadCrumbs';
import { ErrorMessage } from '../../../components/_shared';
import { datapackage } from '../../../utils/resource';
import DataExplorer from '../../../components/dataset/DataExplorer';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />

      <main className="flex flex-wrap pl-12 mb-96">
        {/* Dataset About section */}
        <div className="flex flex-col mb-10">
          <div className="flex flex-row mb-4 text-[#4D4D4D] font-[Avenir] font-extrabold text-[36px]">
            <div className="mr-4">{result.title}</div>
            <img src="/images/plant-icon.svg" alt="orgs" className="w-5" />
          </div>
          <div className="grid grid-cols-4 mb-4 w-1/2 text-[#787878] text-[20px] font-normal">
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-5 h-3"
              />
              <span>Organization: UNESCO</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/satelite-icon.svg"
                alt="orgs"
                className="w-5 h-3 "
              />
              <span>Created: 27 Nov 2021</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img src="/images/bus-icon.svg" alt="orgs" className="w-5 h-3" />
              <span>Last Updated: 37 minutes ago</span>
            </div>
            <div className="font-[Avenir] flex text-sm py-2 items-baseline">
              <img
                src="/images/edu-icon.svg"
                alt="orgs"
                className="w-5  h-3"
              />
              <span>Licene: Creative Commons</span>
            </div>
          </div>
          <article className="font-[Avenir] text-[#7C7C7C] text-[20px] font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            quod doloremque illo sint! Unde natus ipsum laboriosam culpa
            labore, debitis esse doloremque. Quaerat, dolor incidunt laborum
            ipsum eaque assumenda ratione. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Cumque quod doloremque illo sint!
            Unde natus ipsum laboriosam culpa labore, debitis esse doloremque.
            Quaerat, dolor incidunt laborum ipsum eaque assumenda ratione.
          </article>
          <div className="flex flex-row font-[Avenir] font-medium text-[15px] text-[#086F06]">
            <button className="rounded-full bg-[#80E47E] py-2 px-4 mr-4">
              Keyword 1
            </button>
            <button className="rounded-full bg-[#80E47E] py-2 px-4 mr-4">
              Keyword 2
            </button>
            <button className="rounded-full bg-[#80E47E] py-2 px-4 ">
              Keyword 3
            </button>
          </div>
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-baseline font-[Avenir] font-medium text-[20px] text-[#4D4D4D] leading-6 mb-4">
            <img
              src="/images/up-down-icon.svg"
              alt="orgs"
              className="w-5 h-4 mr-2"
            />
            <span className="mr-4">Select</span>
            <img
              src="/images/download-icon.svg"
              alt="orgs"
              className="w-5 h-4 mr-2"
            />
            <span>Download all</span>
          </div>
          <div className="flex flex-row mb-10">
            <DataExplorer
              resources={datapackage['resources']}
              columnHeaderStyle={null}
            />
          </div>
        </div>

        {/* Similar Dataset */}
        <div className="flex  justify-end w-full p-10">
          <div className="flex flex-col items-between h-full w-1/2 mb-10">
            <div className="self-center mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
              <p>Explore Similar Datasets</p>
            </div>
            <div className="flex flex-row justify-between bg-[#F7FAFC] p-2 rounded-xl">
              <button className="flex items-baseline py-4 px-8  bg-button-gradient rounded-2xl text-white justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/edu-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-4 text-white"
                />
                Education Theme
              </button>
              <button className="flex items-baseline py-4 px-8 text-[#202020] justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/ball-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-4 text-white"
                />
                The Indicators Category
              </button>
              <button className="flex items-baseline py-4 px-8 text-[#202020] justify-center font-[Avenir] text-[18px] font-medium">
                <img
                  src="/images/library-icon.svg"
                  alt="orgs"
                  className="w-4  h-4 mr-4 text-white"
                />
                Menistry of Health Abu Dhabi
              </button>
            </div>
          </div>
        </div>
        {/* lIST SIMILAR DATASET */}
        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-1 w-full">
          <div className=" rounded-3xl relative group w-4/5 h-4/5">
            <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
              Education
            </span>
            <img
              src="/images/dubai-robocop.png"
              alt="alt"
              className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
            />
            <p
              className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
            >
              Government education - National students by Education Zone,
              stage, level and gender
            </p>
          </div>
          <div className="rounded-3xl relative group w-4/5 h-4/5">
            <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
              Education
            </span>
            <img
              src="/images/1dome.png"
              alt="alt"
              className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
            />
            <p
              className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
            >
              Government education - National students by Education Zone,
              stage, level and gender
            </p>
          </div>
          <div className="rounded-3xl relative group w-4/5 h-4/5">
            <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
              Education
            </span>
            <img
              src="/images/emirati-doctor.png"
              alt="alt"
              className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
            />
            <p
              className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
            >
              Government education - National students by Education Zone,
              stage, level and gender
            </p>
          </div>
          <div className="rounded-3xl relative group w-4/5 h-4/5">
            <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
              Education
            </span>
            <img
              src="/images/uae-students.png"
              alt="alt"
              className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
            />
            <p
              className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
            >
              Government education - National students by Education Zone,
              stage, level and gender
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const variables = {
    id: context.query.dataset,
  };

  await apolloClient.query({
    query: GET_DATASET_QUERY,
    variables,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      variables,
    },
  };
};

export default Dataset;
