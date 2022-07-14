import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_KEYWORDS_QUERY } from '../../graphql/queries';
import { Tags } from '../_shared';

const HomeTags: React.FC = () => {
  const { loading, error, data } = useQuery(GET_KEYWORDS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <Spinner />;

  const { tags } = data.keywords.result.search_facets;
  const tagsToShow =
    tags.items && tags.items.sort((a, b) => a.count - b.count).slice(0, 3);

  return (
    <>
      <Tags
        tags={tagsToShow}
        style={null} 
      />
    </>
  );
};

export default HomeTags;
