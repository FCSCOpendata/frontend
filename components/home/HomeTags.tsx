import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_KEYWORDS_QUERY } from '../../graphql/queries';
import { Tags } from '../_shared';
import { fixTranslations } from '../../hooks/locale';

const HomeTags: React.FC = () => {
  const { loading, error, data } = useQuery(GET_KEYWORDS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Spinner />;
  if (error)
    return (
      <ErrorMessage error={error} message="Error loading search results." />
    );

  //  Returns empty component if no results
  if (!data?.keywords?.result?.search_facets?.tags) return <></>;

  const { tags } = data.keywords.result.search_facets;
  const tagsToShow =
    tags.items && tags.items.sort((a, b) => a.count - b.count).slice(0, 3);

  tags?.items?.forEach((el) => fixTranslations(el));

  return (
    <>
      <Tags tags={tagsToShow} style={null} />
    </>
  );
};

export default HomeTags;
