import parse from 'html-react-parser';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_POSTS_QUERY } from '../../graphql/queries';

const List: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY, {
    variables: { limit: 5, page: 1 },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const { posts, meta } = data.posts;

  return (
    <>
      <h2 className="text-2xl font-semibold my-6 inline-block">
        {meta.pagination.total} articles found
      </h2>
      {posts.map((post, index) => (
        <div key={index}>
          <a
            href={`/news/${post.slug}`}
            className="text-xl font-semibold my-6 inline-block"
          >
            {parse(post.title)}
          </a>
          <p>{parse(post.excerpt)}</p>
        </div>
      ))}
    </>
  );
};

export default List;
