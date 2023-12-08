import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import * as timeago from 'timeago.js';
import { CalendarIcon } from '@heroicons/react/outline';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_POSTS_QUERY } from '../../graphql/queries';
import Pagination from '../search/Pagination';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AR } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';

const List: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const initialPage = Number(router.query.page) || 1;

  const [page, setPage] = useState(initialPage);

  const handlePageChange = (page) => {
    setPage(page);
    router.push(`/news?page=${page}`, undefined, { shallow: true });
  };

  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    variables: { limit: 5, page, tag: AR('hash-arabic', '-hash-arabic') },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error)
    return <ErrorMessage error={error} message="Error loading posts." />;
  if (loading) return <Spinner />;
  const { posts, meta } = data.posts;

  return (
    <div className="container mx-auto">
      <div className="font-avenir mt-8 mb-12 px-4 sm:mx-12">
        <h2
          className={`text-2xl text-[#4D4D4D] font-extrabold tracking-tight capitalize px-2 mb-4 text-center  ${AR(
            'md:text-right',
            'md:text-left'
          )}`}
        >
          {t(meta.pagination.total == 1 ? 'article-found' : 'articles-found', {
            count: meta.pagination.total,
          })}
        </h2>
        <ul className="mb-10">
          {posts.map((post, index) => (
            <li
              key={index}
              className="group relative bg-[#F7FAFC] min-w-0 flex-1 xl:flex sm:items-center sm:justify-between mt-6 py-6 px-4 md:px-6 md:py-6 rounded-xl h-fit"
            >
              <div className="flex flex-col sm:flex-row items-center h-full z-10">
                {/* Image */}
                <div className="h-full min-w-[7rem] w-[12rem] sm:w-28 rounded-xl bg-gray-200 mb-4 sm:mb-0">
                  <img
                    src={
                      post.image ||
                      `/images/topics/topic-${Math.floor(
                        Math.random() * (6 - 1 + 1) + 1
                      )}.png`
                    }
                    alt={post.title}
                    className="w-full object-scale-down object-center rounded-md"
                  />
                </div>
                {/* Title, description & org */}
                <div className="px-6 flex flex-col sm:justify-between h-full space-y-4 sm:space-y-0">
                  <Link href={`/news/${post.slug}`}>
                    {/* eslint-disable-next-line */}
                  <a className="block focus:outline-none space-y-2 xl:space-y-0">
                      <h1
                        className={`text-lg font-semibold text-[#202020] text-center ${AR(
                          'sm:text-right',
                          'sm:text-left'
                        )} max-w-xl`}
                      >
                        {post.title}
                      </h1>
                      <p
                        className={`text-sm font-medium text-[#7C7C7C] line-clamp-2 text-center ${AR(
                          'sm:text-right',
                          'sm:text-left'
                        )}`}
                      >
                        {post.excerpt}
                      </p>
                    </a>
                  </Link>
                  <div className="grow h-full"></div>
                  <div className="inline-flex items-center justify-center sm:justify-start py-1 xl:py-2 space-x-2 text-[#7C7C7C]">
                    <div className={`${AR('ml-4', 'mr-4')}`}>
                      <img
                        src="/images/time.svg"
                        alt="reading time"
                        className={`inline w-4 pb-1 grayscale ${AR(
                          'ml-1',
                          'mr-1'
                        )}`}
                      />
                      <span className="text-xs text-center sm:text-left">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <div>
                      <CalendarIcon className={`inline pb-1 w-4`} />
                      <span
                        className={`text-xs text-center sm:text-left ${AR(
                          'mr-1',
                          'ml-1'
                        )}`}
                      >
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
    </div>
  );
};

export default List;
