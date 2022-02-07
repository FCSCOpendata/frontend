export default function DatasetNav() {
  return (
    <div className="flex">
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400">
          Overview
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400">
          Resources
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400">
          Activity Stream
        </span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400">Stats</span>
      </div>
      <div className="border-b-8 border-gray-100 px-8 py-4">
        <span className="font-medium tracking-wide text-gray-400">More</span>
      </div>
    </div>
  );
}
