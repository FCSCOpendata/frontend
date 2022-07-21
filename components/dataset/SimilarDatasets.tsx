import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_DATASET_QUERY, SEARCH_QUERY } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';

export default function SimilarDatasets({ variables }) {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading similar datasets" />;
  if (loading) return <Spinner />;
  const { result } = data.dataset;

  // Fetch datasets within given topic for similar datasets section
  const [fq, setFq] = useState(`groups:${result.groups[0]?.name}`);
  const similarDatasetsResponse = useQuery(SEARCH_QUERY, {
    variables: { fq },
    notifyOnNetworkStatusChange: true,
  });

  const baseClassName =
    'flex items-baseline py-4 px-4 justify-start font-[Avenir] text-[18px] font-medium ';

  const getClassName = (type) => {
    const additionalClassName = fq.startsWith(type)
      ? 'bg-button-gradient rounded-2xl text-white'
      : '';
    return baseClassName + additionalClassName;
  };

  return (
    <>
      <div className="flex justify-center w-full xl:p-10">
        <div className="flex flex-col items-between h-full xl:w-2/3 mb-10 w-full">
          <div className="self-center mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
            <p>Explore Similar Datasets</p>
          </div>
          <div className="flex xl:flex-row flex-col justify-between bg-[#F7FAFC] p-2 rounded-xl">
            <button
              onClick={() => setFq(`groups:${result.groups[0]?.name}`)}
              className={getClassName('groups')}
            >
              <img
                src="/images/edu-icon.svg"
                alt="orgs"
                className="w-4 h-4 mr-2"
              />
              {result.groups[0]?.title} Topic
            </button>
            <button
              onClick={() => setFq(`tags:"${result.tags[0]?.name}"`)}
              className={getClassName('tags')}
            >
              <img
                src="/images/ball-icon.svg"
                alt="orgs"
                className="w-4 h-4 text-white mr-2"
              />
              {result.tags[0]?.display_name} Keyword
            </button>
            <button
              onClick={() => setFq(`organization:${result.organization.name}`)}
              className={getClassName('organization')}
            >
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-4 h-4 text-white mr-2"
              />
              {result.organization.title}
            </button>
          </div>
        </div>
      </div>
      {similarDatasetsResponse.loading && (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      )}
      {/* List similar datasets */}
      <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-1 w-full mb-10">
        {similarDatasetsResponse.error && (
          <ErrorMessage message="Error loading similar datasets" />
        )}

        {!similarDatasetsResponse.loading &&
          similarDatasetsResponse.data?.search.result.results
            ?.slice(0, 4)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="transition-all ease-in-out rounded-3xl relative group w-4/5 h-4/5 border-b-4 border-[transparent] hover:border-[#22B373] overflow-hidden"
                >
                  <a href={`/@${item.organization.name}/${item.name}`}>
                    <img
                      src={
                        fq.startsWith('groups')
                          ? item.groups[0]?.image_url ||
                            '/images/dubai-robocop.png'
                          : item.organization.image ||
                            '/images/dubai-robocop.png'
                      }
                      alt={item.title}
                      className="w-full h-full object-center rounded-2xl object-cover"
                    />
                    <h3
                      className="absolute p-4 bottom-0 inset-x-0 text-white text-sm leading-7 font-semibold opacity-75 rounded-lg bg-slate-200 text-[#464646]
                                    font-[Avenir]"
                    >
                      {item.title}
                    </h3>
                  </a>
                </div>
              );
            })}
      </div>
    </>
  );
}
