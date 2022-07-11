import SharedDatasetsList from '../_shared/DatasetsList';

const DatasetsList: React.FC<any> = ({ org }) => {
  const fq = `organization:${org}`;

  return (
    <>
      <SharedDatasetsList fq={fq} />
    </>
  );
};

export default DatasetsList;
