import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';

const ChartBuilder: React.FC<{ variables: any }> = ({ variables }) => {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { result } = data.dataset;

  return (
    <>
      <div className="flex  justify-start w-full py-10 pl-0">
        <div className="flex flex-col items-between h-full w-1/2 mb-10">
          <div className="self-start mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
            <p>Create Visualization</p>
          </div>
          <div className="flex xl:flex-row flex-col bg-[#F7FAFC] justify-between p-2 rounded-xl xl:w-4/6">
            <button className="flex items-baseline py-4 px-4  bg-button-gradient rounded-2xl text-white justify-center font-[Avenir] text-[18px] font-medium">
              <img
                src="/images/pie-icon.svg"
                alt="orgs"
                className="w-4  h-4 mr-2"
              />
              Build Basic Charts
            </button>
            <button className="flex items-baseline py-4 px-4 text-[#202020] justify-center font-[Avenir] text-[18px] font-medium">
              <img
                src="/images/app-icon.svg"
                alt="orgs"
                className="w-4  h-4 mr-4 text-white"
              />
              Build Your Own Application
            </button>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 grid-cols-1 pl-0 w-full xl:gap-x-4 gap-y-4 mb-20">
        <div className="xl:col-span-8 rounded-lg">
          <img src="/images/graph-img.svg" alt="orgs" className="rounded-lg" />
        </div>
        <div className="col-span-4 rounded-lg flex flex-col p-8 bg-[#F7FAFC]">
          <h1 className="text-center font-[Avenir] text-[30px] text-[#343434] font-extrabold mb-8">
            Visualization Builder
          </h1>
          <div className="flex flex-col mb-4">
            <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
              Chart Type
            </span>
            <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
              <option className="">Select Chart type</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
              Chart Type
            </span>
            <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
              <option className="">Select Chart type</option>
            </select>
          </div>
          <div className="flex flex-col mb-10">
            <span className="mb-2 font-[Montserrat] font-semibold text-[18px] text-[#424242]">
              Chart Type
            </span>
            <select className="rounded-xl outline-none border-none font-[Montserrat] font-medium text-[16px] text-[#B6B6B6] p-4">
              <option className="">Select Chart type</option>
            </select>
          </div>
          <button className="border font-[Avenir] font-extrabold text-[20px] text-center text-[#FFFFFF] p-4 bg-button-gradient rounded-xl">
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ChartBuilder;
