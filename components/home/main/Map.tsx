import Orgs from './OrgsOnMap';

export default function Map() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 sm:pb-24 lg:max-w-7xl">
        <h2 className="block text-3xl text-center font-avenir font-extrabold">
          Explore data through organizations
        </h2>
        <p className="mt-3 mb-8 text-center text-base text-gray font-normal">
          Our Data Portal topics will help you to navigate throw thousands of
          datasets. Select a topic you are looking for.
        </p>

        <div className="relative">
          <img src="/images/map.svg" alt="Map" className="w-full" />
          <div className="absolute left-20 top-0 w-10/12">
            <Orgs />
          </div>
        </div>
      </div>
    </div>
  );
}
