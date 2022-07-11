import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ topic }) => {
  const fq = `groups:${topic}`;

  return (
    <>
      <SharedDatasetsList fq={fq} />
    </>
  );
};

export default DatasetsList;
