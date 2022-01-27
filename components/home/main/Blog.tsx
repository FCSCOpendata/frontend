export default function blog() {
  return (
    <div>
      <div className="px-2 mt-32">
        <div className="inline-block align-middle w-12 border border-green-500" />
        <div className="inline-block font-roboto text-sm text-center pl-2">
          &nbsp; BLOG
        </div>
      </div>
      <h1 className="px-2 mt-8 font-inter font-black text-4xl">Latest News</h1>
      <div className="mt-8 py-10 md:inline-flex items-center justify-between">
        <div className="bg-blog1 w-92 mt-4 sm:mx-2 lg:mx-4 xl:mx-4 rounded-lg">
          <div className="bg-gray-900 opacity-75">
            <div className="p-8">
              <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
                ARTICLE
              </p>
              <a href="https://datahub.io/world-bank">
                <p className="w-full text-xl font-inter font-semibold text-white">
                  World Bank Indicators on DataHub
                </p>
                <p className="text-base text-white mt-4">
                  The World Bank Open Data website offers free access to
                  comprehensive, downloadable indicators...
                </p>
              </a>
              <div className="mt-8 flex items-center">
                <img
                  className="w-9 h-9 bg-gray-300 rounded-full"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt="author"
                />
                <div className="ml-4 text-white font-roboto">
                  <p className="font-bold text-sm">Rufus Pollock</p>
                  <p className="text-xs text-accent -mt-2">
                    March 7,2021 &nbsp;
                    <span className="text-white text-lg align-bottom">
                      &#8228;
                    </span>
                    &nbsp; 8 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blog2 bg-no-repeat bg-cover w-92 mt-4 sm:mx-2 lg:mx-4 xl:mx-4 rounded-lg">
          <div className="bg-gray-900 opacity-75">
            <div className="p-8">
              <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
                ARTICLE
              </p>
              <a href="https://datahub.io/blog/open-data-day-covid-19">
                <p className="w-full text-xl font-inter font-semibold text-white">
                  Open Data Day 2020 and COVID-19 data
                </p>
                <p className="text-base text-white mt-4">
                  Here at DataHub and Datopian, we recently celebrated Open
                  Data Day 2020. If you’re...
                </p>
              </a>
              <div className="mt-8 flex items-center">
                <img
                  className="w-9 h-9 bg-gray-300 rounded-full"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt="author"
                />
                <div className="ml-4 text-white font-roboto">
                  <p className="font-bold text-sm">Rufus Pollock</p>
                  <p className="text-xs text-accent -mt-2">
                    March 7,2021 &nbsp;
                    <span className="text-white text-lg align-bottom">
                      &#8228;
                    </span>
                    &nbsp; 8 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blog3 object-contain w-92 mt-4 sm:mx-2 lg:mx-4 xl:mx-4 rounded-lg">
          <div className="bg-gray-900 opacity-75">
            <div className="p-8">
              <p className="text-xs font-inter font-black tracking-widest text-white pb-40 mb-10">
                ARTICLE
              </p>
              <a href="https://datahub.io/blog/COVID-19-and-compartmental-models-in-epidemiology">
                <p className="w-full text-xl font-inter font-semibold text-white">
                  COVID-19 and Compartmental Models in Epidemiology
                </p>
                <p className="text-base text-white mt-4">
                  The severity of the current SARS-CoV-2 epidemic is
                  undeniable: since the latest months of 2019...
                </p>
              </a>
              <div className="mt-8 flex items-center">
                <img
                  className="w-9 h-9 bg-gray-300 rounded-full"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt="author"
                />
                <div className="ml-4 text-white font-roboto">
                  <p className="font-bold text-sm">Rufus Pollock</p>
                  <p className="text-xs text-accent -mt-2">
                    March 7,2021 &nbsp;
                    <span className="text-white text-lg align-bottom">
                      &#8228;
                    </span>
                    &nbsp; 8 min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 font-inter -mt-6 uppercase text-sm md:text-right text-center mr-2 cursor-pointer">
        <a href="https://" target={'_blank'} rel={'noreferrer'}>
          Read More -&gt;
        </a>
      </div>
    </div>
  );
}
