import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_KEYWORDS_QUERY } from '../../graphql/queries';

const Tags: React.FC = () => {
  const { loading, error, data } = useQuery(GET_KEYWORDS_QUERY, {
    variables: {},
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading search results." />;
  if (loading) return <div>Loading</div>;

  const { tags } = data.keywords.result.search_facets;
  const tagsToShow =
    tags.items && tags.items.sort((a, b) => a.count - b.count).slice(0, 3);

  const colors = [
    {
      color: 'green-400',
      text: 'green-800',
    },
    {
      color: 'indigo-500',
      text: 'indigo-800',
    },
    {
      color: 'blue-200',
      text: 'blue-800',
    },
  ];

  return (
    <>
      {tagsToShow.map((item, index) => (
        <a
          href={`/search?fq=tags:${item.name}`}
          key={`keyword-${index}`}
          className={`inline-flex items-center mr-3 px-5 py-1.5 border border-transparent text-xs rounded-full text-${colors[index].text} bg-${colors[index].color}`}
        >
          {item.display_name}
        </a>
      ))}
    </>
  );
};

export default Tags;
