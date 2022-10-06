import { useQuery } from '@apollo/react-hooks';
import useTranslation from 'next-translate/useTranslation';
import { GET_NEXT_POSTS_QUERY } from '../../graphql/queries';
import { AR } from '../../hooks/locale';
import { ErrorMessage, Spinner } from '../_shared';

const SuggestedReads: React.FC<any> = ({ from }) => {
  if (!from || !Object.keys(from).length) return <></>;

  const { t } = useTranslation('common');
  const slug = from.slug;
  const after = new Date(from.published).toISOString();

  const { loading, error, data } = useQuery(GET_NEXT_POSTS_QUERY, {
    variables: {
      limit: 4,
      after,
      slug,
      tag: AR('hash-arabic', '-hash-arabic'),
    },
  });

  if (!loading && !error && !data?.posts.posts.length) return <></>;

  return (
    <>
      <div className="my-20 py-20 mx-5 md:mx-28">
        <div className="block mx-auto">
          <h1 className="font-semibold text-2xl px-1">{t('next-reads')}</h1>
          {error && (
            <ErrorMessage
              error={error}
              message="Error loading suggested reads"
            />
          )}
          {loading && (
            <div className="w-full flex justify-center">
              <Spinner className="mt-10" size="10" />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.posts.posts.map((suggestion, index) => (
              <a
                key={index}
                href={`${AR('/ar')}/news/${suggestion.slug}`}
                className="m-1 relative group border-b-4  border-[#22B373] rounded-lg"
                title={suggestion.title}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={suggestion.image}
                    width="100%"
                    alt={suggestion.title}
                    className="z-10 object-cover mx-auto"
                  />
                </div>
                <h1
                  className="absolute bottom-0 left-0 z-20
                  p-8 py-1 inset-x-0 line-clamp-2 bg-slate-200
                  text-lg font-avenir font-medium text-[#464646] group-hover:text-black group-hover:font-bold
                  opacity-75 group-hover:opacity-90 transition-all leading-snug
                "
                >
                  {suggestion.title}
                </h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedReads;
