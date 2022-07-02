export default function News() {
  return (
    <>
      <h2 className="block text-3xl text-center font-semibold">
        What&apos;s New
      </h2>
      <p className="mt-3 mb-6 text-center text-base text-gray font-normal">
        Our Data Portal topics will help you to navigate throw thousands of
        datasets. Select a topic you are looking for.
      </p>
      <div className="container mx-auto flex flex-wrap h-96">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-1/3">
            <div className="p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover w-full h-96 object-center block rounded-lg"
                src="/images/topics/topic-1.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover w-full h-36 object-center block rounded-lg"
                src="/images/topics/topic-3.png"
              />
            </div>
            <div className="p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover w-full h-60 object-center block rounded-lg"
                src="/images/topics/topic-4.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover w-full h-60 object-center block rounded-lg"
                src="/images/topics/topic-5.png"
              />
            </div>
            <div className="p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover w-full h-36 object-center block rounded-lg"
                src="/images/topics/topic-6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
