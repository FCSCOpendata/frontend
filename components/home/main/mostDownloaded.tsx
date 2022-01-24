export default function mostDownloaded() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-no-wrap mt-10 px-2">
      <div className="bg-white item w-full h-auto p-4 rounded-lg shadow-lg">
        <div className="px-12">
          <hr className="inline-block align-middle w-28 h-0.5 border border-green-500" />
          <div className="inline-block font-roboto text-sm text-left pl-4">
            &nbsp; MOST DOWNLOADED
          </div>
        </div>
        <img
          className="object-cover rounded-lg"
          src="/images/mostDownloaded.svg"
          alt="most downloaded graph"
        />
      </div>
    </div>
  );
}
