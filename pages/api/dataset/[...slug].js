import { initializeApollo } from '../../../lib/apolloClient';
import { GET_DATASET_QUERY } from '../../../graphql/queries'

export default async function handler(req, res) {
  try {
    const apolloClient = initializeApollo()
    const { slug } = req.query;
    const id = slug[0]
    const { data } = await apolloClient.query({
      query: GET_DATASET_QUERY,
      variables: {
        id: id
      },
    });
    let results = data.dataset.result;

    if (slug.length > 0 && slug.includes("resource")) {
      const resource = slug[2]
      results = results.resources.find(
        (item) => item.name === resource
      );
    }
    if (Object.keys(results).length > 0) {
      res.send(JSON.stringify(results))
    }
    else {
      res.send(JSON.stringify(
        {
          result: 'No result for dataset query',
          query: req.query
        }
      ))
    }
  }
  catch(e) {
    res.status(404).send(JSON.stringify(e))
  }
 }