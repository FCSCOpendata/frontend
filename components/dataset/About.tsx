import * as timeago from 'timeago.js';

const About: React.FC<{ datasetData: any }> = ({ datasetData }) => {
  const result = datasetData;
  const tags = result.tags;
  const resource_formats = result.resources.map((item) => item.format);

  return (
    <div>
      <div className="flex flex-col flex-wrap sm:pr-16">
        <h1 className="text-4xl font-bold text-purple-800 capitalize">
          {result.title}
        </h1>
        <div className="inline-flex mt-4 space-x-3">
          <img src="/images/dataset-page/location.svg" alt="location-icon" />
          <span className="font-medium text-sm text-gray-500">Dubai, UAE</span>
        </div>
        <div className="inline-flex mt-4 space-x-3">
          <img src="/images/dataset-page/category.svg" alt="category-icon" />
          <span className="font-medium text-sm text-gray-500">
            {result.organization.title}
          </span>
        </div>
        <div className="inline-flex mt-4 space-x-5">
          <img src="/images/dataset-page/time.svg" alt="time-icon" />
          <span className="font-medium text-sm text-gray-500">
            Last Updated: {timeago.format(result.updated)}
          </span>
        </div>
        <div className="inline-flex mt-4 space-x-5">
          <img src="/images/dataset-page/downloads.svg" alt="download-icon" />
          <span className="font-medium text-sm text-gray-500">
            Downloads: 2048
          </span>
        </div>
        <hr className="inline-block align-middle w-3/4 mt-8 h-0.5 border bg-gray-100 rounded" />
        <span className="mt-8 text-sm">rating goes here</span>
        <hr className="inline-block align-middle w-3/4 mt-8 h-0.5 border bg-gray-100 rounded" />
        <div className="mt-4 text-sm sm:w-3/4 leading-relaxed line-clamp-6">
          {result.description || 'This dataset does not have a description'}
        </div>
        <hr className="inline-block align-middle w-3/4 mt-6 h-0.5 border bg-gray-100 rounded" />
        <div className="grid grid-cols-2 grid-rows-auto gap-4 mt-4 w-3/4">
          {tags.length == 0
            ? 'No tags available'
            : tags.map((keyword, index) => (
                <button
                  key={index}
                  className="bg-blue-200 rounded-2xl capitalize text-center appearance-none focus:outline-none focus:bg-blue-400"
                >
                  <span className="text-xs text-blue-800 font-semibold">
                    {keyword.display_name}
                  </span>
                </button>
              ))}
        </div>
        <hr className="inline-block align-middle w-3/4 mt-6 h-0.5 border bg-gray-100 rounded" />

        <ul className="mt-6 grid grid-cols-3 w-3/4 auto-rows-auto gap-2">
          {resource_formats.map((format, index) => (
            <li
              key={index}
              className="bg-green-400 rounded-xl text-white uppercase text-center"
            >
              {format}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
