import { initializeApollo } from '../../lib/apolloClient';
import { SEARCH_QUERY } from '../../graphql/queries';

export default async function handler(req, res) {
  try {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: SEARCH_QUERY,
      variables: {
        ...req.query,
      },
    });
    const { results } = data.search.result;
    if (results.length > 0) {
      res.send(JSON.stringify(results));
    } else {
      res.send(
        JSON.stringify({
          result: 'No result for search query',
          query: req.query,
        })
      );
    }
  } catch (e) {
    res.status(404).send(JSON.stringify(e));
  }
}
