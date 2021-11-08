const MainOptions: React.FC = () => {
  return (
    <div className="justify-center text-white pb-20">
      <ul className="px-4 flex flex-row flex-wrap sm:flex-no-wrap justify-center">
        <li className="bg-white w-full py-28 sm:w-1/4 sm:-mt-20 z-10 sm:mx-2 lg:mx-6 xl:mx-4 rounded-lg shadow-lg">
          <div>
            <img
              className="m-auto"
              src="/images/search.svg"
              alt="Search icon"
            />
            <h1 className="text-3xl uppercase font-black text-black pt-4 font-sans text-center">
              {' '}
              Find data{' '}
            </h1>
            <p className="text-center text-black font-sans text-xl pt-2">
              {' '}
              Find, share, use and gain <br /> insights from data.
            </p>
          </div>
        </li>
        <li className="ml-4 bg-white w-full py-28 sm:w-1/4 sm:-mt-20 sm:mx-2 lg:mx-6 xl:mx-4 z-10 rounded-lg shadow-lg">
          <div>
            <img
              className="m-auto"
              src="/images/upload.svg"
              alt="Upload icon"
            />
            <h1 className="text-3xl uppercase font-black text-black pt-4 font-sans text-center">
              {' '}
              Add data{' '}
            </h1>
            <p className="text-center text-black font-sans text-xl pt-2">
              {' '}
              Make your dataset <br /> available on Portal.
            </p>
          </div>
        </li>
        <li className="ml-4 bg-white w-full py-28 sm:w-1/4 sm:-mt-20 sm:mx-2 lg:mx-6 xl:mx-4 z-10 rounded-lg shadow-lg">
          <div>
            <img
              className="m-auto"
              src="/images/request.svg"
              alt="Request icon"
            />
            <h1 className="text-3xl uppercase font-black text-black pt-4 font-sans text-center">
              {' '}
              Request data{' '}
            </h1>
            <p className="text-center text-black font-sans text-xl pt-2">
              {' '}
              Send us a request for <br /> the data you didn’t find.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainOptions;
