import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_DATASET_QUERY, SEARCH_QUERY } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import useTranslation from 'next-translate/useTranslation';
import { AR, fixTranslations } from '../../hooks/locale';

export default function SimilarDatasets({ variables }) {
  const { t } = useTranslation('common');
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
    'flex items-baseline py-4 px-4 justify-start font-avenir text-[18px] font-medium ';

  const getClassName = (type) => {
    const additionalClassName = fq.startsWith(type)
      ? 'bg-button-gradient rounded-2xl text-white'
      : '';
    return baseClassName + additionalClassName;
  };

  fixTranslations(result?.groups[0]);
  fixTranslations(result?.tags[0]);
  fixTranslations(result?.organization);

  return (
    <>
      <div className="flex justify-center w-full xl:p-10">
        <div className="flex flex-col items-between h-full xl:w-2/3 mb-10 w-full">
          <div className="self-center mb-4 font-avenir text-[30px] font-extrabold text-[#4D4D4D]">
            <p>{t('explore-s-datasets')}</p>
          </div>
          <div className="flex xl:flex-row flex-col justify-between bg-[#F7FAFC] p-2 rounded-xl">
            <button
              onClick={() => setFq(`groups:${result.groups[0]?.name}`)}
              className={getClassName('groups')}
            >
              <img
                src="/images/edu-icon.svg"
                alt="orgs"
                className={`w-4 h-4 ${AR('ml-2', 'mr-2')}`}
              />
              {result.groups[0]?.title} {t('topic')}
            </button>
            <button
              onClick={() => setFq(`tags:"${result.tags[0]?.name}"`)}
              className={getClassName('tags')}
            >
              <img
                src="/images/ball-icon.svg"
                alt="orgs"
                className={`w-4 h-4 text-white ${AR('ml-2', 'mr-2')}`}
              />
              {result.tags[0]?.title} {t('keyword')}
            </button>
            <button
              onClick={() => setFq(`organization:${result.organization.name}`)}
              className={getClassName('organization')}
            >
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className={`w-4 h-4 text-white ${AR('ml-2', 'mr-2')}`}
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
      <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 xl:grid-cols-4 xl:gap-x-1 w-full mb-10">
        {similarDatasetsResponse.error && (
          <ErrorMessage message="Error loading similar datasets" />
        )}

        {!similarDatasetsResponse.loading &&
          similarDatasetsResponse.data?.search.result.results
            ?.slice(0, 4)
            .map((item, index) => {
              fixTranslations(item);
              return (
                <a
                  key={index}
                  href={`${AR('/ar')}/@${item.organization.name}/${item.name}`}
                  className="group"
                  title={item.title}
                >
                  <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden w-4/5">
                    <span className="absolute left-0 bottom-0 w-full h-full border-b-4 border-[#22B373] rounded-b-l z-10" />
                    <div className="min-h-[12vw]">
                      <img
                        src={
                          fq.startsWith('groups')
                            ? item.groups[0]?.image_url ||
                              '/images/dubai-robocop.png'
                            : item.organization.image ||
                              '/images/dubai-robocop.png'
                        }
                        alt={item.title}
                        className="w-full h-full object-center object-scale-down rounded-xl"
                      />
                    </div>
                    <p className="absolute bottom-0 left-0 transition-all w-full p-5 py-1 text-sm text-white leading-snug font-avenir font-medium text-lg bg-slate-200 opacity-75 text-black group-hover:opacity-90 group-hover:font-bold line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </a>
              );
            })}
      </div>
    </>
  );
}
