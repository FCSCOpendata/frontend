import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ topic, onPageChange, page }) => {
  const fq = `groups:${topic}`;

  return (
    <>
      <SharedDatasetsList onPageChange={onPageChange} fq={fq} page={page} />
    </>
  );
};

export default DatasetsList;
