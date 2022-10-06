import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { ErrorMessage, Spinner } from '../../_shared';
import { GET_POSTS_QUERY } from '../../../graphql/queries';
import useTranslation from 'next-translate/useTranslation';
import { AR } from '../../../hooks/locale';

export default function News() {
  const { t } = useTranslation('common');

  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    variables: { limit: 5, page: 1, tag: AR('hash-arabic', '-hash-arabic') },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });
  if (error) return <ErrorMessage error={error} message="Error loading dataset" />;
  if (loading) return <Spinner />;

  const { posts } = data.posts;

  const headline = (text) => {
    return (
      <p
        className={`absolute bottom-0 
        p-8 py-2 inset-x-0 line-clamp-2 
        text-lg font-avenir font-medium text-[#464646] group-hover:text-black group-hover:font-bold
        ${text ? 'bg-slate-200' : ''} opacity-75 group-hover:opacity-90 
        transition-all leading-snug
      `}
      >
        {text}
      </p>
    );
  };

  return (
    <>
      <h2 className="block text-3xl text-center font-avenir font-extrabold">
        {t('hm-h-what')}
      </h2>
      <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
        {t('hm-p-our-data')}
      </p>
      <div className="container mx-auto flex flex-wrap h-96">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-1/3 px-1">
            <a
              href={posts[0] ? `${AR('/ar')}/news/${posts[0]?.slug}` : ''}
              onClick={(e) => (!posts[0] ? e.preventDefault() : null)}
              className={`${posts[0] ? 'group' : 'cursor-auto'} h-full w-full`}
              title={posts[0]?.title}
            >
              <div className="relative w-full h-[24.5rem]">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full z-10 
                  ${
                    posts[0] ? 'border-b-4  border-[#22B373]' : ''
                  } rounded-b-lg 
                `}
                />
                {posts[0] ? (
                  <img
                    alt={posts[0]?.title}
                    className="object-cover w-full h-full object-center block rounded-lg"
                    src={posts[0]?.image}
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
                {headline(posts[0]?.title)}
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a
              href={posts[1] ? `${AR('/ar')}/news/${posts[1]?.slug}` : ''}
              onClick={(e) => (!posts[1] ? e.preventDefault() : null)}
              className={`${posts[1] ? 'group' : 'cursor-auto'} w-full`}
              title={posts[1]?.title}
            >
              <div className="relative w-full pb-1">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full z-10 
                 ${
                   posts[1] ? 'border-b-4  border-[#22B373]' : ''
                 } rounded-b-lg 
               `}
                />
                {posts[1] ? (
                  <img
                    alt={posts[1]?.title}
                    className="w-full object-cover w-full h-36 object-center block rounded-lg"
                    src={posts[1]?.image}
                  />
                ) : (
                  <div className="w-full h-36" />
                )}
                {headline(posts[1]?.title)}
              </div>
            </a>
            <a
              href={posts[2] ? `${AR('/ar')}/news/${posts[2]?.slug}` : ''}
              onClick={(e) => (!posts[2] ? e.preventDefault() : null)}
              className={`${posts[2] ? 'group' : 'cursor-auto'} w-full`}
              title={posts[2]?.title}
            >
              <div className="relative w-full pt-1">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full z-10 
                  ${
                    posts[2] ? 'border-b-4  border-[#22B373]' : ''
                  } rounded-b-lg 
                `}
                />
                {posts[2] ? (
                  <img
                    alt={posts[2]?.title}
                    className="w-full object-cover w-full h-60 object-center block rounded-lg"
                    src={posts[2]?.image}
                  />
                ) : (
                  <div className="w-full h-60" />
                )}
                {headline(posts[2]?.title)}
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a
              href={posts[3] ? `${AR('/ar')}/news/${posts[3]?.slug}` : ''}
              onClick={(e) => (!posts[3] ? e.preventDefault() : null)}
              className={`${posts[3] ? 'group' : 'cursor-auto'} w-full`}
              title={posts[3]?.title}
            >
              <div className="relative w-full pb-1">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full z-10 
                  ${
                    posts[3] ? 'border-b-4  border-[#22B373]' : ''
                  } rounded-b-lg 
                `}
                />
                {posts[3] ? (
                  <img
                    alt={posts[3]?.title}
                    className="w-full object-cover w-full h-60 object-center block rounded-lg"
                    src={posts[3]?.image}
                  />
                ) : (
                  <div className="w-full h-60" />
                )}
                {headline(posts[3]?.title)}
              </div>
            </a>
            <a
              href={posts[4] ? `${AR('/ar')}/news/${posts[4]?.slug}` : ''}
              onClick={(e) => (!posts[4] ? e.preventDefault() : null)}
              className={`${posts[4] ? 'group' : 'cursor-auto'} w-full`}
              title={posts[4]?.title}
            >
              <div className="relative w-full pt-1">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full z-10 
                  ${
                    posts[4] ? 'border-b-4  border-[#22B373]' : ''
                  } rounded-b-lg 
                `}
                />
                {posts[4] ? (
                  <img
                    alt={posts[4]?.title}
                    className="w-full object-cover w-full h-36 object-center block rounded-lg"
                    src={posts[4]?.image}
                  />
                ) : (
                  <div className="w-full h-36" />
                )}
                {headline(posts[4]?.title)}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 font-avenir text-lg text-center">
        <a href={`${AR('/ar')}/news`}>
          {t('hm-a-see')} <ArrowRightIcon className="inline w-4 ml-4" />
        </a>
      </div>
    </>
  );
}
