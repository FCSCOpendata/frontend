import Image from 'next/image';

export default function BottomBanner() {
  return (
    <div className="relative pb-32">
      <div className="bg-red-50 px-8 py-20 rounded-2xl w-1/2">
        <span className="text-4xl font-semibold mx-4 text-red-500">
          Still not found <br /> what you&apos;re looking for ...?
        </span>
      </div>
      <div className="w-3/5 px-20 py-14 absolute bottom-36 sm:bottom-28 -right-4 mr-4">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none rounded-l-3xl"
          src="/images/banner.jpg"
          alt="bottom banner"
        />
        <div className="flex flex-col relative z-10">
          <span className="bg-green-500 rounded-full w-24 h-6 px-2">
            Next Stop
          </span>
          <span className="text-3xl sm:text-6xl font-bold text-white mt-4">
            Themes -&gt;
          </span>
          <span className="text-sm font-bold text-gray-100 sm:w-2/3 mt-4">
            Explore the world of open data on bayanat. We provide the best
            exprience to data anlysists, students and developers
          </span>
        </div>
      </div>
    </div>
  );
}
