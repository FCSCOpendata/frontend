import { initializeApollo } from '../../lib/apolloClient';
import { GET_ORGS_FULL_INFO_QUERY } from '../../graphql/queries';

export default async function handler(req, res) {
  try {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: GET_ORGS_FULL_INFO_QUERY,
    });

    let results = data.orgs.result;
    if (results.length > 0) {
      results = results.find((item) => item.name === req.query.id);
      res.send(JSON.stringify(results));
    } else {
      res.send(
        JSON.stringify({
          result: 'No result for organization query',
          query: req.query,
        })
      );
    }
  } catch (e) {
    res.status(404).send(JSON.stringify(e));
  }
}
