export default function mostDownloaded() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-no-wrap mt-10 px-2">
      <div className="bg-white w-full p-4 rounded-lg shadow-lg">
        <div className="px-12">
          <hr className="inline-block align-middle w-28 h-0.5 border border-darkbrown" />
          <div className="inline-block font-roboto text-sm text-left pl-4">
            &nbsp; MOST DOWNLOADED
          </div>
          <p className="font-inter font-medium text-xl mt-4">
            Natural gas prices over time 1880-2010
          </p>
        </div>
        <img
          className="object-cover w-full rounded-lg"
          src="/images/mostDownloaded.svg"
          alt="most downloaded graph"
        />
      </div>
    </div>
  );
}
