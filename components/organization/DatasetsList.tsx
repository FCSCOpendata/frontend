import { useState } from 'react';
import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ org, onPageChange, page }) => {
  const [fq, setFq] = useState(`organization:${org.name}`);

  return (
    <>
      <SharedDatasetsList page={page} onPageChange={onPageChange} fq={fq} />
    </>
  );
};

export default DatasetsList;
