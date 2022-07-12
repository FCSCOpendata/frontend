import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ topic, onPageChange }) => {
  const fq = `groups:${topic}`;

  return (
    <>
      <SharedDatasetsList onPageChange={onPageChange} fq={fq} />
    </>
  );
};

export default DatasetsList;
