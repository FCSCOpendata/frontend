/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function DatasetNav({ setNavBody }) {
  const handleNav = (navType) => {
    setNavBody(navType);
  };
  return (
    <div className="flex">
      <div
        className="border-b-8 border-gray-100 px-8 py-4 btn"
        onClick={() => handleNav('overview')}
      >
        <button className="font-medium tracking-wide text-gray-400">
          Overview
        </button>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4" onClick={() => handleNav('resources')}>
        <span className="font-medium tracking-wide text-gray-400">
          Resources
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400" >
          Activity Stream
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4" >
        <span className="font-medium tracking-wide text-gray-400">Stats</span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400" >More</span>
      </div>
    </div>
  );
}
