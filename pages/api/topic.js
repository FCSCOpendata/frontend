import { initializeApollo } from '../../lib/apolloClient';
import { GET_TOPIC_QUERY } from '../../graphql/queries';

export default async function handler(req, res) {
  try {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: GET_TOPIC_QUERY,
      variables: {
        ...req.query,
      },
    });
    const results = data.topic.result;
    if (Object.keys(results).length > 0) {
      res.send(JSON.stringify(results));
    } else {
      res.send(
        JSON.stringify({
          result: 'No result for topic query',
          query: req.query,
        })
      );
    }
  } catch (e) {
    res.status(404).send(JSON.stringify(e));
  }
}
