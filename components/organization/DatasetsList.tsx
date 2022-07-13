import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ org, onPageChange }) => {
  const fq = `organization:${org}`;

  return (
    <>
      <SharedDatasetsList onPageChange={onPageChange} fq={fq} />
    </>
  );
};

export default DatasetsList;
