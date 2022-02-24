import Information from './Information';
import Resources from './Resources';

const NavBody: React.FC<{ datasetData: any; navtype: string }> = ({
  datasetData,
  navtype,
}) => {
  if (navtype === 'overview') {
    return <Information datasetData={datasetData} />;
  } else if (navtype === 'resources') {
    return <Resources datasetData={datasetData} />;
  }
};

export default NavBody;
