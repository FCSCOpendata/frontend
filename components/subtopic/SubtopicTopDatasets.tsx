import { useState } from 'react';
import List from '../search/List';
import Form from '../search/Form';

import utils from '../../utils';
import { initializeApollo } from '../../lib/apolloClient';
import { SEARCH_QUERY } from '../../graphql/queries';

const SubtopicTopDatasets: React.FC<any> = ({ subtopic }) => {
  //  TODO: extract the List in a way that we can
  //  reuse it here properly.   Have to wait  for
  //  merges before doing that.

  const [qvariables, setQvariables] = useState({
    rows: '5',
    'facet.field': [
      'organization',
      'groups',
      'tags',
      'res_format',
      'license_id',
    ],
    'facet.limit': 5,
  });

  return (
    <>
      <div className="">
        <div className="mx-4">
          <List variables={qvariables} setQvariables={setQvariables} />
        </div>
      </div>
    </>
  );
};

export default SubtopicTopDatasets;
