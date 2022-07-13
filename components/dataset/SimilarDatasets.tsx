import { useQuery } from '@apollo/react-hooks';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';

export default function SimilarDatasets({ variables }) {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading similar datasets" />;
  if (loading) return <Spinner />;
  const { result } = data.dataset;

  return (
    <>
      <div className="flex justify-center w-full xl:p-10">
        <div className="flex flex-col items-between h-full xl:w-2/3 mb-10">
          <div className="self-center mb-4 font-[Avenir] text-[30px] font-extrabold text-[#4D4D4D]">
            <p>Explore Similar Datasets</p>
          </div>
          <div className="flex xl:flex-row flex-col justify-between bg-[#F7FAFC] p-2 rounded-xl">
            <button className="flex items-baseline py-4 px-4 bg-button-gradient rounded-2xl text-white justify-start font-[Avenir] text-[18px] font-medium">
              <img src="/images/edu-icon.svg" alt="orgs" className="w-4 h-4" />
              {result.groups[0]?.title} Topic
            </button>
            <button className="flex items-baseline py-4 px-4 text-[#202020] justify-start font-[Avenir] text-[18px] font-medium">
              <img
                src="/images/ball-icon.svg"
                alt="orgs"
                className="w-4 h-4 text-white"
              />
              {result.tags[0]?.display_name} Tag
            </button>
            <button className="flex items-baseline py-4 px-4 text-[#202020] justify-start font-[Avenir] text-[18px] font-medium">
              <img
                src="/images/library-icon.svg"
                alt="orgs"
                className="w-4 h-4 text-white"
              />
              {result.organization.title}
            </button>
          </div>
        </div>
      </div>
      {/* lIST SIMILAR DATASET */}
      <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-1 w-full mb-10">
        <div className=" rounded-3xl relative group w-4/5 h-4/5">
          <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
            Education
          </span>
          <img
            src="/images/dubai-robocop.png"
            alt="alt"
            className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
          />
          <p
            className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
          >
            Government education - National students by Education Zone, stage,
            level and gender
          </p>
        </div>
        <div className="rounded-3xl relative group w-4/5 h-4/5">
          <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
            Education
          </span>
          <img
            src="/images/1dome.png"
            alt="alt"
            className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
          />
          <p
            className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
          >
            Government education - National students by Education Zone, stage,
            level and gender
          </p>
        </div>
        <div className="rounded-3xl relative group w-4/5 h-4/5">
          <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
            Education
          </span>
          <img
            src="/images/emirati-doctor.png"
            alt="alt"
            className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
          />
          <p
            className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
          >
            Government education - National students by Education Zone, stage,
            level and gender
          </p>
        </div>
        <div className="rounded-3xl relative group w-4/5 h-4/5">
          <span className="absolute left-4 top-8 rounded-2xl px-4 py-2 bg-[#80E47E] text-[#086F06] font-[Avenir] font-medium text-[15px] group-hover:bg-[#80E47E] ">
            Education
          </span>
          <img
            src="/images/uae-students.png"
            alt="alt"
            className="w-full h-full object-center rounded-2xl object-cover group-hover:opacity-90"
          />
          <p
            className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-7 font-poppins font-semibold group-hover:opacity-80 group-hover:rounded-lg group-hover:bg-slate-100 group-hover:text-[#464646]
                                font-[Avenir] group-hover:font-medium font-extrabold text-[20px]"
          >
            Government education - National students by Education Zone, stage,
            level and gender
          </p>
        </div>
      </div>
    </>
  );
}
