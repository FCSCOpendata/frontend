import dynamic from 'next/dynamic';

const PopularDatasets = dynamic(() => import('./main/popularDatasets'));
const Options = dynamic(() => import('./main/options'));
const MostDownloaded = dynamic(() => import('./main/mostDownloaded'));
const Blog = dynamic(() => import('./main/Blog'));

const MainOptions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-accent">
      <div className="mx-16 md:mx-32 pb-20">
        <Options />
        <PopularDatasets />
        <MostDownloaded />
        <Blog />
      </div>
    </div>
  );
};

export default MainOptions;
