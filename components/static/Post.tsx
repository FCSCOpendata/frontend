import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import * as timeago from 'timeago.js';
import { CalendarIcon } from '@heroicons/react/outline';
import { ErrorMessage } from '../_shared';
import { GET_POST_QUERY } from '../../graphql/queries';

const Post: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    variables: { slug },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const { title, html, image, readingTime, published } = data.post.posts[0];

  return (
    <>
      <Head>
        <title>{title} | News | Open Data UAE</title>
      </Head>
      <div className="relative bg-[#F7FAFC] font-[Avenir] flex flex-col items-center justify-center w-full py-6 overflow-hidden">
        <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
        <h1 className="text-3xl font-extrabold z-10">{title}</h1>
        <div className="inline-flex items-center justify-center sm:justify-start py-1 xl:py-2 space-x-2 text-[#7C7C7C]">
          <div className="mr-4">
            <img
              src="/images/time.svg"
              alt="reading time"
              className="inline w-4 pb-1 mr-1 grayscale"
            />
            <span className="text-xs text-center sm:text-left">
              {readingTime} min read
            </span>
          </div>
          <div>
            <CalendarIcon className="inline pb-1 mr-1 w-4" />
            <span className="text-xs text-center sm:text-left">
              {timeago.format(published)}
            </span>
          </div>
        </div>
      </div>
      <div className="my-10 grid place-content-center font-[Avenir]">
        <article className="prose prose-stone md:prose-lg lg:prose-xl">
          {image && <img src={image} className="mb-6" alt={title} />}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </>
  );
};

export default Post;
