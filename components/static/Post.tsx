import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
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

  const { title, html, image } = data.post.posts[0];

  return (
    <>
      <Head>
        <title>{title} | News | Open Data UAE</title>
      </Head>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-primary my-6">{title}</h1>
      </div>
      <article className="prose prose-stone md:prose-lg lg:prose-xl">
        {image && <img src={image} className="mb-6" alt={title} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

export default Post;
