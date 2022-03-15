import Metrics from './Metrics';

const Information: React.FC<{ datasetData: any }> = ({ datasetData }) => {
  const result = datasetData;

  return (
    <div>
      <Metrics />
      <div className="flex bg-gray-300 rounded-lg px-12 py-8 mt-8">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-32 gap-y-6">
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-2">
              ORGANIZATION
            </h4>
            <span className="text-base font-bold text-gray-900">
              {result.organization.title}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-2">
              Resource No
            </h4>
            <span className="text-base font-bold text-gray-900">
              {result.nresources ? result.nresources : 0}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-2">
              Author
            </h4>
            <span className="text-base font-bold text-gray-900">
              {result.author ? result.author : 'N/A'}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-2">
              EXPECTED UPDATE FREQUENCY
            </h4>
            <span className="text-base font-bold text-gray-900">
              Quarterly
            </span>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-2">
              DATASET DATE
            </h4>
            <span className="text-base font-bold text-gray-900">
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(result.created))}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest text-gray-500 mb-4">
              LICENSE
            </h4>
            <span className="text-base font-bold text-gray-900 capitalize">
              {result.license_title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
