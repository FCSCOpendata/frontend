import React from 'react';
import List from '../search/List';

const DatasetsList: React.FC<any> = ({ fq, onPageChange, page }) => {
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
      <div>
        <List
          variables={qvariables}
          setQvariables={setQvariables}
          show_amount={false}
          noXMargin={true}
          onPageChange={onPageChange}
          page={page}
        />
      </div>
    </>
  );
};

export default DatasetsList;
