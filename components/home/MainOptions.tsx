import dynamic from 'next/dynamic';

const Topics = dynamic(() => import('./main/Topics'));
const Map = dynamic(() => import('./main/Map'));
const News = dynamic(() => import('./main/News'));

const MainOptions: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-lightaccent">
      <div>
        <div className="mx-10 md:mx-28 pb-20">
          <div id="discover-topics">
            <Topics />
          </div>
          <div id="explore-orgs">
            <Map />
          </div>
          <div id="news">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOptions;
