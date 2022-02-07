/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function DatasetNav({ setNavBody }) {
  const handleNav = (navType) => {
    setNavBody(navType);
  };
  return (
    <div className="flex">
      <div className="border-b-8 border-gray-100 px-8 py-4 hover:border-darkbrown">
        <button
          className="font-medium tracking-wide text-gray-400 appearance-none focus:outline-none"
          onClick={() => handleNav('overview')}
        >
          Overview
        </button>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4 hover:border-darkbrown">
        <button
          className="font-medium tracking-wide text-gray-400 appearance-none focus:outline-none"
          onClick={() => handleNav('resources')}
        >
          Resources
        </button>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4 hover:border-darkbrown">
        <span className="font-medium tracking-wide text-gray-400 appearance-none focus:outline-none">
          Activity Stream
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4 hover:border-darkbrown">
        <span className="font-medium tracking-wide text-gray-400 appearance-none focus:outline-none">
          Stats
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4 hover:border-darkbrown">
        <span className="font-medium tracking-wide text-gray-400 appearance-none focus:outline-none">
          More
        </span>
      </div>
    </div>
  );
}
