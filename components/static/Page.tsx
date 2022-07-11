import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_PAGE_QUERY } from '../../graphql/queries';

const Page: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_PAGE_QUERY, {
    variables: { slug },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const { title, html, image } = data.page.pages[0];

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-[Avenir] font-extrabold text-primary my-6">
          {title}
        </h1>
      </div>
      {image && <img src={image} className="mb-6" alt={title} />}
      <article className="prose prose-xl">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

export default Page;
