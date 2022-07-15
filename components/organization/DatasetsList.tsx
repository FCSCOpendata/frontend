import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ org, onPageChange, page }) => {
  const fq = `organization:${org}`;

  return (
    <>
      <SharedDatasetsList page={page} onPageChange={onPageChange} fq={fq} />
    </>
  );
};

export default DatasetsList;
