import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import * as timeago from 'timeago.js';
import { CalendarIcon } from '@heroicons/react/outline';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_POSTS_QUERY } from '../../graphql/queries';
import Pagination from '../search/Pagination';
import { useState } from 'react';
import { useRouter } from 'next/router';

const List: React.FC = () => {
  const router = useRouter();
  const initialPage = Number(router.query.page) || 1;

  const [page, setPage] = useState(initialPage);

  const handlePageChange = (page) => {
    setPage(page);
    router.push(`/news?page=${page}`, undefined, { shallow: true });
  };

  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    variables: { limit: 5, page },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <Spinner />;
  const { posts, meta } = data.posts;

  return (
    <div className="font-[Avenir] mt-8 mb-12 px-4 sm:mx-12">
      <h2 className="text-center md:text-left text-2xl text-[#4D4D4D] font-extrabold tracking-tight capitalize px-2 mb-4">
        {meta.pagination.total} articles found
      </h2>
      <ul className="mb-10">
        {posts.map((post, index) => (
          <li
            key={index}
            className="group relative bg-[#F7FAFC] min-w-0 flex-1 xl:flex sm:items-center sm:justify-between mt-6 py-4 px-8 rounded-xl h-fit xl:h-32"
          >
            <div className="flex flex-cols items-center h-full z-10">
              {/* Image */}
              <div className="h-full w-28 rounded-xl bg-gray-200">
                <img
                  src={
                    post.image ||
                    `/images/topics/topic-${Math.floor(
                      Math.random() * (6 - 1 + 1) + 1
                    )}.png`
                  }
                  alt={post.title}
                  className="h-full"
                />
              </div>
              {/* Title, description & org */}
              <div className="px-6 flex flex-col sm:justify-between h-full space-y-4 sm:space-y-0">
                <Link href={`/news/${post.slug}`}>
                  {/* eslint-disable-next-line */}
                  <a className="block focus:outline-none space-y-2 xl:space-y-0">
                    <h1 className="text-lg font-semibold text-[#202020] text-center sm:text-left max-w-xl">
                      {post.title}
                    </h1>
                    <p className="text-sm font-medium text-[#7C7C7C] line-clamp-2 text-center sm:text-left">
                      {post.excerpt}
                    </p>
                  </a>
                </Link>
                <div className="inline-flex items-center justify-center sm:justify-start py-1 xl:py-2 space-x-2 text-[#7C7C7C]">
                  <div className="mr-4">
                    <img
                      src="/images/time.svg"
                      alt="reading time"
                      className="inline w-4 pb-1 mr-1 grayscale"
                    />
                    <span className="text-xs text-center sm:text-left">
                      {post.readingTime} min read
                    </span>
                  </div>
                  <div>
                    <CalendarIcon className="inline pb-1 mr-1 w-4" />
                    <span className="text-xs text-center sm:text-left">
                      {timeago.format(post.published)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Pagination
          count={meta?.pagination.total}
          //  TODO: pagination component should be more
          //  generic
          setQvariables={() => null}
          onPageChange={handlePageChange}
          initAtPage={initialPage}
        />
      </div>
    </div>
  );
};

export default List;
