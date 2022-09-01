import { useQuery } from '@apollo/react-hooks';
import { GET_NEXT_POSTS_QUERY } from '../../graphql/queries';
import { AR } from '../../hooks/locale';
import { ErrorMessage, Spinner } from '../_shared';

const SuggestedReads: React.FC<any> = ({ from }) => {
  if (!from || !Object.keys(from).length) return <></>;

  const slug = from.slug;
  const after = new Date(from.published).toISOString();

  const { loading, error, data } = useQuery(GET_NEXT_POSTS_QUERY, {
    variables: { limit: 4, after, slug, tag: AR('ar', '-ar') },
  });

  if (!loading && !error && !data?.posts.posts.length) return <></>;

  return (
    <>
      <div className="my-20 py-20 mx-5 md:mx-28">
        <div className="block mx-auto">
          <h1 className="font-semibold text-2xl px-1">Next reads</h1>
          {error && <ErrorMessage message="Error loading suggested reads" />}
          {loading && (
            <div className="w-full flex justify-center">
              <Spinner className="mt-10" size="10" />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.posts.posts.map((suggestion, index) => (
              <a
                key={index}
                href={`/news/${suggestion.slug}`}
                className="m-1 relative"
              >
                <div className="aspect-w-16 aspect-h-9 m-1 relative">
                  <img
                    src={suggestion.image}
                    width="100%"
                    alt={suggestion.title}
                    className="z-10 object-cover mx-auto"
                  />
                </div>
                <h1 className="absolute bottom-2 left-1 z-20 font-semibold text-[#fff] px-4 lg:pb-2">
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
