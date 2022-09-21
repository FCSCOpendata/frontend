import getConfig from 'next/config';
import axios from 'axios';

export default async function handler(req, res) {
  const { slug } = req.query;

  const { DMS } = getConfig().serverRuntimeConfig;

  if (slug.includes('odata')) {
    try {
      const data = await axios
        .get(
          `${DMS}/datastore/odata3.0/${slug[1]}`
        )
        .then((res) => res);

      res.setHeader(
        'Content-Type',
        'application/atom+xml;type=feed;charset=utf-8'
      );
      res.write(data.data);
      res.end();
    } catch (e) {
      res.status(400).send(JSON.stringify(e));
    }
  } else {
    try {
      const response = await axios
        .get(
          `${DMS}/api/3/action/datastore_search?resource_id=${slug[1]}`
        )
        .then((res) => res);

      res.send(JSON.stringify(response.data.result));
    } catch (e) {
      res.status(400).send(JSON.stringify(e));
    }
  }
}
