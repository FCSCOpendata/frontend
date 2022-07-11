import React from 'react';
import List from '../search/List';

const DatasetsList: React.FC<any> = ({ fq }) => {
  const [qvariables, setQvariables] = React.useState({
    rows: '5',
    'facet.field': [
      'organization',
      'groups',
      'tags',
      'res_format',
      'license_id',
    ],
    'facet.limit': 5,
    fq,
  });

  return (
    <>
      <div className="">
        <List
          variables={qvariables}
          setQvariables={setQvariables}
          show_amount={false}
          noXMargin={true}
        />
      </div>
    </>
  );
};

export default DatasetsList;
