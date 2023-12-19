import { useQuery } from '@apollo/react-hooks';
import { GET_TOPICS_BY_DATASETS_COUNT_QUERY } from '../../../graphql/queries';
import { ErrorMessage, Spinner } from '../../_shared';
import useTranslation from 'next-translate/useTranslation';
import { AR, fixTranslations } from '../../../hooks/locale';
import Image from 'next/image';

export default function Topics() {
  const { t } = useTranslation('common');
  const { data, loading, error } = useQuery(
    GET_TOPICS_BY_DATASETS_COUNT_QUERY,
    {
      variables: {
        limit: 10,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="block text-3xl text-center font-avenir font-extrabold">
          {t('hm-h-discover')}
        </h2>
        <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
          {t('hm-p-our-data')}
        </p>

        {loading && (
          <div className="w-full flex justify-center">
            {' '}
            <Spinner />{' '}
          </div>
        )}
        {error && <ErrorMessage message="Error loading topics" />}

        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-1">
          {!loading &&
            !error &&
            data.topics.result.map((topic, index) => {
              fixTranslations(topic);
              return (
                <a
                  key={index}
                  href={`${AR('/ar')}/topic/${topic.name}`}
                  className="group h-full w-full flex flex-stretch topic-item"
                >
                  <div className="relative bg-gray w-full rounded-lg overflow-hidden ">
                    <span className="absolute left-0 z-20 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l " />
                    <Image
                      src={topic.image_display_url}
                      priority={false}
                      width={909}
                      height={655}
                      layout="responsive"
                      alt={topic.title}
                      className="w-full h-full object-center object-contain"
                    />
                    <p className="item-title absolute z-10 py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-4 font-poppins font-semibold group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black transition-all">
                      {topic.title}
                    </p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
