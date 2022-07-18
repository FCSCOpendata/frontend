/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetServerSideProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { SelectorIcon, CloudDownloadIcon } from '@heroicons/react/outline';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../graphql/queries';
import NavBreadCrumbs from '../../../components/dataset/NavBreadCrumbs';
import About from '../../../components/dataset/About';
import SimilarDatasets from '../../../components/dataset/SimilarDatasets';
import { ErrorMessage } from '../../../components/_shared';
import DataExplorer from '../../../components/dataset/DataExplorer';
import OpenData101 from '../../../components/home/main/OpenData101';
import DeveloperExperience from '../../../components/_shared/developer_experience/DeveloperExperience';
import JSZip from 'jszip';
import { useState } from 'react';
import ScrollIndicator from '../../../components/_shared/ScrollIndicator';

const Dataset: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });
  const [enableSelect, setEnableSelect] = useState(false);
  const [selectData, setSelectData] = useState({});

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  const downloadAll = () => {
    const dataUrls = Object.values(selectData);
    const resourceUrls =
      dataUrls.length > 0 && enableSelect
        ? dataUrls
        : result.resources.map((r) => r.path);
    const fetchAll = resourceUrls.map((path) => {
      return fetch(path).then((res) => res.blob());
    });

    Promise.all(fetchAll)
      .then((res) => {
        const zip = new JSZip();
        let i = 0;
        for (const blob of res) {
          zip.file(resourceUrls[i].split('/').pop(), blob as Blob);
          i++;
        }
        zip
          .generateAsync({ type: 'blob' })
          .then((content) => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = `${result.name}.zip`;
            a.click();
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  return (
    <>
      <Head>
        <title>Portal | {result.title || result.name}</title>
      </Head>
      <NavBreadCrumbs
        navInfo={{
          datasetTitle: result.title,
          orgName: result.organization.name,
          orgTitle: result.organization.title,
        }}
      />
      <main className="flex flex-wrap pl-12 pr-20 mb-70">
        <ScrollIndicator
          firstImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          lastImage={{
            url: '/images/scroll_indicator_icon_1.svg',
            alt: 'First stop',
          }}
          stops={[
            { id: 'about' },
            { id: 'similar-datasets' },
            { id: 'developer-experience' },
            { id: 'open-data-101' },
          ]}
        />

        {/* Dataset About section */}
        <div id="about">
          <About variables={variables} />
        </div>
        {/* Resource display */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-baseline font-[Avenir] font-medium text-[16px] text-[#4D4D4D] leading-6 mb-4">
            <SelectorIcon className="w-4 mr-2" />
            <button
              className="mr-4"
              onClick={() => setEnableSelect(!enableSelect)}
            >
              Select
            </button>
            <CloudDownloadIcon className="w-4 mr-2" />
            <button onClick={() => downloadAll()}>
              {enableSelect ? 'Download Selected' : 'Download all'}
            </button>
          </div>
          <div className="flex flex-row mb-10">
            <DataExplorer
              resources={result.resources}
              columnHeaderStyle={null}
              enableSelect={enableSelect}
              setSelectData={setSelectData}
            />
          </div>
        </div>

        {/* Similar Dataset */}
        <div className="w-full" id="similar-datasets">
          <SimilarDatasets variables={variables} />
        </div>
        <div className="w-full" id="developer-experience">
          <DeveloperExperience />
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
