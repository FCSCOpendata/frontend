import parse from 'html-react-parser';
import Head from 'next/head';
import Nav from '../../components/home/Nav';
import { staticRequest, gql } from "tinacms";

export default function Home(props) {
  const postsList = props.data;
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
        {postsList.map((post, index) => (
          <div key={index}>
            <a
              href={`/blog/${post.filename}`}
              className="text-2xl font-semibold text-primary my-6 inline-block"
            >
              {parse(post.filename)}
            </a>
            <p>{parse(post.title)}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const postsListData = (await staticRequest({
    query: gql`
      query GetPostsList {
        getPostsList {
          edges {
            node {
              sys {
                filename
              }
              data {
                title
              }
            }
          }
        }
      }
    `,
  }));

  const data = postsListData.getPostsList.edges.map((post) => ({
    filename: post.node.sys.filename,
    title: post.node.data.title,
  }))

  return {
    props: { data },
  };
};
