export default function SearchSuggestions() {
  return (
    <div className="mt-32 px-16">
      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-8">
        Search Suggestions
      </h3>
      <div className="flex flex-1 space-x-5">
        <div className="flex bg-blue-100 rounded-2xl capitalize px-6 py-2  text-center">
          <span className="flex-1 text-xs text-blue-800 font-bold">
            Data Policies of UAE
          </span>
        </div>
        <div className="flex bg-blue-100 rounded-2xl capitalize px-6 py-2 text-center ">
          <span className="flex-1 text-xs text-blue-800 font-bold">
            Covid-19 Testing in Dubai
          </span>
        </div>
        <div className="flex bg-blue-100 rounded-lg sm:rounded-2xl capitalize px-6 py-2 text-center ">
          <span className="flex-1 text-xs text-blue-800 font-bold">
            Child Count and Educational Environment
          </span>
        </div>
      </div>
    </div>
  );
}
