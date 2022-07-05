import { useState } from 'react';
import List from '../search/List';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubtopicTopDatasets: React.FC<any> = ({ subtopic, setQty }) => {
  //  TODO: extract the List in a way that we can
  //  reuse it here properly.   Have to wait  for
  //  merges before doing that.

  const qvariables = {
    rows: '5',
    'facet.field': [
      'organization',
      'groups',
      'tags',
      'res_format',
      'license_id',
    ],
    'facet.limit': 5,
    fq: `groups:${subtopic}`,
  };

  const setQvariables = () => {
    console.log('WIP');
  };

  return (
    //  TODO: add the search controls (e.g.: sort, qty of entries) to this component
    <>
      <div className="">
        <List
          variables={qvariables}
          setQvariables={setQvariables}
          show_amount={false}
          setQty={setQty}
        />
      </div>
    </>
  );
};

export default SubtopicTopDatasets;
