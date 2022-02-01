export default function options() {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 sm:-mx-2 sm:-mt-20 sm:z-10 py-16 sm:w-96 lg:py-24 hover:bg-darkaccent cursor-pointer">
          <img className="m-auto" src="/images/search.svg" alt="Search icon" />
          <h1 className="text-2xl uppercase font-black pt-4 font-inter text-center">
            {' '}
            Find data{' '}
          </h1>
          <p className="text-center font-inter pt-2">
            {' '}
            Find, share, use and gain <br /> insights from data.
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 sm:-mx-2 sm:-mt-20 sm:z-10 py-16 sm:w-96 lg:py-24 hover:bg-darkaccent cursor-pointer">
          <img className="m-auto" src="/images/upload.svg" alt="Upload icon" />
          <h1 className="text-2xl uppercase font-black pt-4 font-inter text-center">
            {' '}
            Add data{' '}
          </h1>
          <p className="text-center text-black font-sans pt-2">
            {' '}
            Make your dataset <br /> available on Portal.
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 sm:-mx-2 sm:-mt-20 sm:z-10 py-16 sm:w-96 hover:bg-darkaccent cursor-pointer">
          <img
            className="m-auto"
            src="/images/request.svg"
            alt="Request icon"
          />
          <h1 className="text-2xl uppercase font-black text-black pt-4 font-inter text-center">
            {' '}
            Request data{' '}
          </h1>
          <p className="text-center text-black font-inter pt-2">
            {' '}
            Send us a request for <br /> the data you didn’t find.
          </p>
        </div>
      </div>
    </div>
  );
}
