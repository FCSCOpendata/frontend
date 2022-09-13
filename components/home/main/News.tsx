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
  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { posts } = data.posts;

  //  TODO: ideally it would display the latest  posts
  //  or the best rated ones. Also, the error handling
  //  was done quickly just to get  the  page  working
  //  and could be better written.
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
            >
              <div className="relative w-full h-full">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                {posts[0] ? (
                  <img
                    alt={posts[0]?.title}
                    className="object-cover w-full h-full object-center block rounded-lg"
                    src={posts[0]?.image}
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
                <p className="absolute p-8 bottom-0 inset-x-0 text-white text-xl leading-9 font-avenir font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[0]?.title}
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a
              href={posts[1] ? `${AR('/ar')}/news/${posts[1]?.slug}` : ''}
              onClick={(e) => (!posts[1] ? e.preventDefault() : null)}
              className={`${posts[1] ? 'group' : 'cursor-auto'} w-full`}
            >
              <div className="relative w-full pb-1">
                <span
                  className={`absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 ${
                    posts[1] ? 'border-[#22B373]' : ''
                  } rounded-b-lg z-10`}
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
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-avenir font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[1]?.title}
                </p>
              </div>
            </a>
            <a
              href={posts[2] ? `${AR('/ar')}/news/${posts[2]?.slug}` : ''}
              onClick={(e) => (!posts[2] ? e.preventDefault() : null)}
              className={`${posts[2] ? 'group' : 'cursor-auto'} w-full`}
            >
              <div className="relative w-full pt-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                {posts[2] ? (
                  <img
                    alt={posts[2]?.title}
                    className="w-full object-cover w-full h-60 object-center block rounded-lg"
                    src={posts[2]?.image}
                  />
                ) : (
                  <div className="w-full h-60" />
                )}
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-avenir font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[2]?.title}
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a
              href={posts[3] ? `${AR('/ar')}/news/${posts[3]?.slug}` : ''}
              onClick={(e) => (!posts[3] ? e.preventDefault() : null)}
              className={`${posts[3] ? 'group' : 'cursor-auto'} w-full`}
            >
              <div className="relative w-full pb-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                {posts[3] ? (
                  <img
                    alt={posts[3]?.title}
                    className="w-full object-cover w-full h-60 object-center block rounded-lg"
                    src={posts[3]?.image}
                  />
                ) : (
                  <div className="w-full h-60" />
                )}
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-avenir font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[3]?.title}
                </p>
              </div>
            </a>
            <a
              href={posts[4] ? `${AR('/ar')}/news/${posts[4]?.slug}` : ''}
              onClick={(e) => (!posts[4] ? e.preventDefault() : null)}
              className={`${posts[4] ? 'group' : 'cursor-auto'} w-full`}
            >
              <div className="relative w-full pt-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                {posts[4] ? (
                  <img
                    alt={posts[4]?.title}
                    className="w-full object-cover w-full h-36 object-center block rounded-lg"
                    src={posts[4]?.image}
                  />
                ) : (
                  <div className="w-full h-36" />
                )}
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-avenir font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[4]?.title}
                </p>
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
