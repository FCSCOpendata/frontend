import parse from 'html-react-parser';
import Head from 'next/head';
import Nav from '../../components/home/Nav';
import { getStaticPropsForTina } from 'tinacms';

export default function Home(props) {
  const postsList = props.data.getPostList.edges;
  return (
    <>
      <Head>
        <title>Portal | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-primary my-6 inline-block">
          {postsList.length} articles found
        </h1>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <a
              href={`/blog/${post.node.sys.filename}`}
              className="text-2xl font-semibold text-primary my-6 inline-block"
            >
              {parse(post.node.sys.filename)}
            </a>
            <p>
              {parse(
                post.node.values
                  ? post.node.values.title
                  : post.node.sys.filename
              )}
            </p>
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `{
        getPostList{
          edges {
            node {
              id
              sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });

  return {
    props: {
      ...tinaProps,
    },
  };
};
