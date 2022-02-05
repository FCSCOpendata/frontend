export default function BottomBanner() {
  return (
    <div className="relative pb-32 pt-24">
      <div className="bg-red-50 px-8 py-20 rounded-2xl w-1/2">
        <span className="text-4xl font-semibold mx-4">
          Still not found <br /> what you&apos;re looking for ...?
        </span>
      </div>
      <div className="flex flex-col bg-black w-3/5 rounded-l-3xl px-24 py-20 absolute bottom-36 sm:bottom-24 -right-4">
        <span className="bg-green-300 rounded-full w-24 h-6 px-2">
          Next Stop
        </span>
        <span className="text-3xl sm:text-6xl font-bold text-white mt-4">
          Themes -&gt;
        </span>
        <span className="text-sm font-bold text-white sm:w-1/2 mt-4">
          Explore the world of open data on bayanat. We provide the best
          exprience to data anlysists, students and developers
        </span>
      </div>
    </div>
  );
}
