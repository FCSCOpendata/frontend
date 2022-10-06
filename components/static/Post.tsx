import ErrorPage from 'next/error';
import { useQuery } from '@apollo/react-hooks';
import * as timeago from 'timeago.js';
import { CalendarIcon } from '@heroicons/react/outline';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_POST_QUERY } from '../../graphql/queries';
import { AR } from '../../hooks/locale';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import FourOhFour from '../../pages/404';

const Post: React.FC<{ variables: any }> = ({ variables }) => {
  const { t } = useTranslation('common');

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading post." />;
  if (loading) return <Spinner />;
  if (!data.post) return <FourOhFour></FourOhFour>;

  const { title, html, image, readingTime, published } = data.post.posts[0];

  const postLang = variables.slug.startsWith('ar-') ? 'ar' : 'en';
  const dir = postLang == 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      {postLang != router.locale.toLowerCase() && (
        <span className="flex items-center justify-center bg-[#F7FAFC] rounded-t-lg px-4 py-2">
          <img
            src="/images/info.svg"
            className="w-4 m-1"
            alt={t('missing-translation')}
          />{' '}
          <p className="text-md m-1">{t('missing-translation')}</p>
        </span>
      )}
      <div className="relative bg-[#F7FAFC] font-avenir flex flex-col items-center justify-center w-full py-6 overflow-hidden">
        <div className="absolute bg-waves bg-cover bg-no-repeat bg-center left-0 right-0 top-[-227%] bottom-[-109%] z-0" />
        <h1
          className="text-3xl font-extrabold z-10 px-20 text-center"
          dir={dir}
        >
          {title}
        </h1>
        <div className="inline-flex items-center justify-center sm:justify-start py-1 xl:py-2 space-x-2 text-[#7C7C7C]">
          <div className={`${AR('ml-4', 'mr-4')}`}>
            <img
              src="/images/time.svg"
              alt="reading time"
              className={`inline w-4 pb-1 grayscale ${AR('ml-1', 'mr-1')}`}
            />
            <span className="text-xs text-center sm:text-left">
              {readingTime} min read
            </span>
          </div>
          <div>
            <CalendarIcon
              className={`inline pb-1 w-4 ${AR('ml-1', 'mr-1')}`}
            />
            <span className="text-xs text-center sm:text-left">
              {timeago.format(published)}
            </span>
          </div>
        </div>
      </div>
      <div className="my-10 grid place-content-center font-avenir">
        <article className="prose prose-stone md:prose-lg lg:prose-xl">
          {image && <img src={image} className="mb-6" alt={title} />}
          <div dangerouslySetInnerHTML={{ __html: html }} dir={dir} />
        </article>
      </div>
    </>
  );
};

export default Post;
