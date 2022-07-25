const topics = [
  {
    name: 'economy',
    title: 'Economy',
    imageSrc:
      'https://ckan.fcsc.develop.datopian.com/uploads/group/2022-04-18-054850.541023-industry.jpeg',
  },
  {
    name: 'education',
    title: 'Education',
    imageSrc: '/images/topics/topic-4.png',
  },
  {
    name: 'environment',
    title: 'Environment',
    imageSrc: '/images/topics/topic-2.png',
  },
  {
    name: 'food-ecurity',
    title: 'Food Security',
    imageSrc:
      'https://ckan.fcsc.develop.datopian.com/uploads/group/2022-04-18-054850.541023-industry.jpeg',
  },
  {
    name: 'government',
    title: 'Government',
    imageSrc: '/images/topics/topic-4.png',
  },
  {
    name: 'health-care',
    title: 'Health Care',
    imageSrc: '/images/topics/topic-6.png',
  },
  {
    name: 'infrastructure',
    title: 'Infrastructure',
    imageSrc: '/images/topics/topic-1.png',
  },
  {
    name: 'social',
    title: 'Social',
    imageSrc: '/images/topics/topic-5.png',
  },
  {
    name: 'technology',
    title: 'Technology',
    imageSrc: '/images/topics/topic-1.png',
  },
  {
    name: 'transport',
    title: 'Transport',
    imageSrc: '/images/topics/topic-6.png',
  },
];

export default function Topics() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="block text-3xl text-center font-[Avenir] font-extrabold">
          Discover Topics
        </h2>
        <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
          Our Data Portal topics will help you to navigate through thousands of
          datasets. Select a topic you are looking for.
        </p>

        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-1">
          {topics.map((topic, index) => (
            <a key={index} href={`/topic/${topic.name}`} className="group">
              <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
                <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-l z-10" />
                <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={topic.imageSrc}
                    alt={topic.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="absolute py-4 bottom-0 inset-x-0 text-white text-sm text-center leading-4 font-poppins font-semibold group-hover:bg-slate-200 group-hover:opacity-75 group-hover:text-black">
                  {topic.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
