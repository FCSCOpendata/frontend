import dynamic from 'next/dynamic';

const PopularDatasets = dynamic(() => import('./main/popularDatasets'));
const Options = dynamic(() => import('./main/options'));
const MostDownloaded = dynamic(() => import('./main/mostDownloaded'));
const Blog = dynamic(() => import('./main/Blog'));

const MainOptions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-lightaccent">
      <div>
        <div className="mx-10 md:mx-28 pb-20">
          <Options />
          <PopularDatasets />
          <MostDownloaded />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default MainOptions;
