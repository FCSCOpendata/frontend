/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function DatasetNav({ setNavBody }) {
  const handleNav = (navType) => {
    setNavBody(navType);
  };
  return (
    <div className="flex overflow-x-auto">
      <button
        className="border-b-8 border-gray-100 px-8 py-4 text-gray-400 focus:text-red-500 hover:border-darkbrown focus:border-darkbrown appearance-none focus:outline-none"
        onClick={() => handleNav('overview')}
      >
        <span className="font-medium tracking-wide">Overview</span>
      </button>
      <button
        className="border-b-8 border-gray-100 px-8 py-4 text-gray-400 focus:text-red-500 hover:border-darkbrown focus:border-darkbrown appearance-none focus:outline-none"
        onClick={() => handleNav('resources')}
      >
        <span className="font-medium tracking-wide">Resources</span>
      </button>

      <button className="border-b-8 border-gray-100 px-8 py-4 text-gray-400 focus:text-red-500 hover:border-darkbrown focus:border-darkbrown appearance-none focus:outline-none">
        <span className="font-medium tracking-wide">Activity Stream</span>
      </button>
      <button className="border-b-8 border-gray-100 px-8 py-4 text-gray-400 focus:text-red-500 hover:border-darkbrown focus:border-darkbrown appearance-none focus:outline-none">
        <span className="font-medium tracking-wide">Stats</span>
      </button>
      <button className="border-b-8 border-gray-100 px-8 py-4 text-gray-400 focus:text-red-500 hover:border-darkbrown focus:border-darkbrown appearance-none focus:outline-none">
        <span className="font-medium tracking-wide">More</span>
      </button>
    </div>
  );
}
