export default function News() {
  return (
    <div>
      <div className="mt-32 mx-2">
        <div className="inline-block align-middle w-12 h-0.5  border border-darkbrown" />
        <div className="inline-block font-roboto text-sm text-center pl-2">
          &nbsp; What&apos;s New
        </div>
      </div>
      <h1 className="mt-8 font-inter font-black text-4xl md:text-left text-center mx-2">
        Latest News
      </h1>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-9 grid-rows-1 gap-6 w-auto py-10">
        <div className="bg-blog1 bg-no-repeat shadow-blogImg bg-cover rounded-lg py-12 col-span-3">
          <div className="px-8">
            <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
              ARTICLE
            </p>
            <a href="https://datahub.io/blog/COVID-19-and-compartmental-models-in-epidemiology">
              <p className="w-full text-xl font-inter font-semibold text-white">
                COVID-19 and Compartmental Models in Epidemiology
              </p>
              <p className="text-base text-white mt-4 line-clamp-3">
                The severity of the current SARS-CoV-2 epidemic is undeniable:
                since the latest months of 2019, the COVID-19 outbreak is
                having a significant impact in the world at the macro level,
                starting its spread from China, then to the Asia-Pacific and
                then around the rest of the globe.
              </p>
            </a>
            <div className="mt-8 flex items-center">
              <img
                className="w-9 h-9 bg-gray-300 rounded-full"
                src="https://www.gravatar.com/avatar/36661def37f62e4130670ab75e06465a?d=https%3A%2F%2Ftesting.datahub.io%2Fstatic%2Fimg%2Flogo-cube03.png"
                alt="author"
              />
              <div className="ml-4 text-white font-roboto">
                <p className="font-bold text-sm">Rufus Pollock</p>
                <p className="text-xs text-accent -mt-2">
                  May 8, 2020 &nbsp;
                  <span className="text-white text-lg align-bottom">
                    &#8228;
                  </span>
                  &nbsp; 5 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blog2 shadow-blogImg bg-no-repeat bg-cover rounded-lg py-12 col-span-3">
          <div className="px-8">
            <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
              ARTICLE
            </p>
            <a href="https://datahub.io/blog/automatically-updated-core-datasets-on-datahub">
              <p className="w-full text-xl font-inter font-semibold text-white">
                Automatically updated core datasets on DataHub
              </p>
              <p className="text-base text-white mt-4 line-clamp-3">
                Check out a list of core datasets that are updated on a regular
                basis. From financial to reference data - it is the best place
                to find a wide range of up to date datasets.
              </p>
            </a>
            <div className="mt-8 flex items-center">
              <img
                className="w-9 h-9 bg-gray-300 rounded-full"
                src="https://www.gravatar.com/avatar/90998f7f90e086bd5fc7c9075dfda43b?d=https%3A%2F%2Ftesting.datahub.io%2Fstatic%2Fimg%2Flogo-cube03.png"
                alt="author"
              />
              <div className="ml-4 text-white font-roboto">
                <p className="font-bold text-sm">Anuar Ustayev</p>
                <p className="text-xs text-accent -mt-2">
                  September 5, 2018 &nbsp;
                  <span className="text-white text-lg align-bottom">
                    &#8228;
                  </span>
                  &nbsp; 5 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blog3 shadow-blogImg bg-no-repeat bg-cover rounded-lg py-12 col-span-3">
          <div className="px-8">
            <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
              ARTICLE
            </p>
            <a href="https://datahub.io/blog/comparotron-a-simple-way-to-visualize-and-share-comparisons">
              <p className="w-full text-xl font-inter font-semibold text-white">
                Open Data Day 2020 and COVID-19 data
              </p>
              <p className="text-white mt-4 line-clamp-3">
                Here at DataHub and Datopian, we recently celebrated Open Data
                Day 2020. If you’re not familiar with Open Data Day, it’s an
                annual worldwide celebration of open data. For part of our day,
                we decided to clean up and package some data on COVID-19
                (coronavirus). The data includes province/state,
                country/region, latitude, longitude, date, confirmed,
                recovered, and deaths. Our source was from the Data Repository
                by Johns Hopkins CSSE, which is updated daily by Johns Hopkins
                Whiting School of Engineering.
              </p>
            </a>
            <div className="mt-8 flex items-center">
              <img
                className="w-9 h-9 bg-gray-300 rounded-full"
                src="https://www.gravatar.com/avatar/36661def37f62e4130670ab75e06465a?d=https%3A%2F%2Ftesting.datahub.io%2Fstatic%2Fimg%2Flogo-cube03.png"
                alt="author"
              />
              <div className="ml-4 text-white font-roboto">
                <p className="font-bold text-sm">Rufus Pollock</p>
                <p className="text-xs text-accent -mt-2">
                  March 17, 2020 &nbsp;
                  <span className="text-white text-lg align-bottom">
                    &#8228;
                  </span>
                  &nbsp; 5 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 font-inter -mt-8 uppercase text-sm md:text-right text-center mr-2 cursor-pointer">
        <a href="https://" target={'_blank'} rel={'noreferrer'}>
          Read More -&gt;
        </a>
      </div>
    </div>
  );
}
