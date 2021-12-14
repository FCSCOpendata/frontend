import Head from 'next/head';
import Nav from '../../components/home/Nav';
import { staticRequest } from 'tinacms';
import { createGlobalStyle } from 'styled-components';

// Styles for markdown
const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5 {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  blockquote {
    background-color: rgb(209,250,229);
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 22px;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  a {
    font-weight: bold;
    color: rgb(59,130,246);
    text-decoration: underline;
  }
  `;
const defaultMarked = (markdown) => markdown;
// Use the props returned by get static props (this can be deleted when the edit provider and tina-wrapper are moved to _app.js)
const BlogPage = (props) => {
  return (
    <>
      <Head>
        <title>Portal | Blog | {props.data.getPostDocument.data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {props.data.getPostDocument.data.title}
          </h1>
          {typeof window !== 'undefined' && (
            <ContentSection
              content={props.data.getPostDocument.data.body}
            ></ContentSection>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const tinaProps = await staticRequest({
    query: `{
        getPostList{
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });
  const paths = tinaProps.getPostList.edges.map((x) => {
    return { params: { filename: x.node.sys.filename } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async (ctx) => {
  const query = `query getPost($relativePath: String!) {
    getPostDocument(relativePath: $relativePath) {
      data {
        title
        body
      }
    }
  }
  `;
  const variables = {
    relativePath: ctx.params.filename + '.md',
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

export default BlogPage;

const ContentSection = ({ content }) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          {JSON.stringify(content)}
          <GlobalStyle />
        </div>
      </div>
    </div>
  );
};
