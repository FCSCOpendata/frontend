export default function options() {
  return (
    <ul className="flex flex-row flex-wrap sm:flex-no-wrap justify-between">
      <li className="bg-white w-96 py-16 md:-mt-20 mt-4 sm:w-1/4 z-10 sm:mx-2 xl:mx-4 rounded-lg shadow-lg">
        <div>
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
      </li>
      <li className="bg-white w-96 py-16 md:-mt-20 mt-4 sm:w-1/4 sm:mx-2 lg:mx-6 xl:mx-4 z-10 rounded-lg shadow-lg">
        <div>
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
      </li>
      <li className="bg-white w-96 py-16 md:-mt-20 mt-4 sm:w-1/4 sm:mx-2 lg:mx-6 xl:mx-4 z-10 rounded-lg shadow-lg">
        <div>
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
      </li>
    </ul>
  );
}
