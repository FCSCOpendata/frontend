import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { ErrorMessage, Spinner } from '../../_shared';
import { GET_POSTS_QUERY } from '../../../graphql/queries';

export default function News() {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    variables: { limit: 5, page: 1 },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });
  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { posts } = data.posts;

  return (
    <>
      <h2 className="block text-3xl text-center font-[Avenir] font-extrabold">
        What&apos;s New
      </h2>
      <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
        Our Data Portal topics will help you to navigate throw thousands of
        datasets. Select a topic you are looking for.
      </p>
      <div className="container mx-auto flex flex-wrap h-96">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-1/3 px-1">
            <a href={`/news/${posts[0].slug}`} className="group w-full h-full">
              <div className="relative w-full h-full">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                <img
                  alt={posts[0].title}
                  className="w-full object-cover w-full h-full object-center block rounded-lg"
                  src={posts[0].image}
                />
                <p className="absolute p-8 bottom-0 inset-x-0 text-white text-xl leading-9 font-[Avenir] font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[0].title}
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a href={`/news/${posts[1].slug}`} className="group w-full">
              <div className="relative w-full pb-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                <img
                  alt={posts[1].title}
                  className="w-full object-cover w-full h-36 object-center block rounded-lg"
                  src={posts[1].image}
                />
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-[Avenir] font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[1].title}
                </p>
              </div>
            </a>
            <a href={`/news/${posts[2].slug}`} className="group w-full">
              <div className="relative w-full pt-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                <img
                  alt={posts[2].title}
                  className="w-full object-cover w-full h-60 object-center block rounded-lg"
                  src={posts[2].image}
                />
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-[Avenir] font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[2].title}
                </p>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap w-1/3 px-1">
            <a href={`/news/${posts[3].slug}`} className="group w-full">
              <div className="relative w-full pb-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                <img
                  alt={posts[3].title}
                  className="w-full object-cover w-full h-60 object-center block rounded-lg"
                  src={posts[3].image}
                />
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-[Avenir] font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[3].title}
                </p>
              </div>
            </a>
            <a href={`/news/${posts[4].slug}`} className="group w-full">
              <div className="relative w-full pt-1">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-10" />
                <img
                  alt={posts[4].title}
                  className="w-full object-cover w-full h-36 object-center block rounded-lg"
                  src={posts[4].image}
                />
                <p className="absolute px-8 py-4 bottom-0 inset-x-0 text-white text-xl leading-9 font-[Avenir] font-medium group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {posts[4].title}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 font-[Avenir] text-lg text-center">
        <Link href="/news">
          <a href="/news">
            See all news <ArrowRightIcon className="inline w-4 ml-4" />
          </a>
        </Link>
      </div>
    </>
  );
}
