export default function Map() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="block text-3xl text-center font-semibold">
          Explore data through organizations
        </h2>
        <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
          Our Data Portal topics will help you to navigate throw thousands of
          datasets. Select a topic you are looking for.
        </p>

        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-1"></div>
      </div>
    </div>
  );
}
