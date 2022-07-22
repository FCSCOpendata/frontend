import CopyIconButton from '../_shared/CopyIconButton';
import { useState } from 'react';

const DashboardBuilder: React.FC<{ resource: any }> = ({ resource }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dashboards = [
    {
      platform: 'Tableau',
      description: 'For Tableau using ODATA connector',
      items: [
        {
          text: 'Choose OData connector from the list',
        },
        {
          text: 'Copy and paste OData URL for desired resource, see the sample:',
          url: `${
            typeof window !== 'undefined'
              ? window.location.origin + '/api/datastore/odata/' + resource.id
              : ''
          }`,
        },
        {
          text: 'Open Sheet tab, and drag and drop needed fields',
          image: [
            '/images/dashboard/odata1.png',
            '/images/dashboard/odata2.png',
            '/images/dashboard/odata3.png',
          ],
        },
      ],
    },
    {
      platform: 'QlikSense',
      description: 'For QlikSense using REST method:',
      items: [
        {
          text: 'On the home page, Add new -> Data connection',
          image: ['/images/dashboard/q1.png'],
        },
        {
          text: 'From Data sources, choose REST and paste into URL: resource url',
          url: `${
            typeof window !== 'undefined'
              ? window.location.origin +
                '/api/datastore/datastore_search/' +
                resource.id
              : ''
          }`,
          image: ['/images/dashboard/q2.png'],
        },
        {
          text: 'Create new app and click Files and other sources',
          image: ['/images/dashboard/q3.png'],
        },
        {
          text: 'In opened page, find your data connection from the list of Data Connections and press.',
        },
        {
          text: 'In opened tab, you will get your resource schema structure, you have to unmark all, and mark records and press next. See the screenshot below',
          image: ['/images/dashboard/q4.png'],
        },
        {
          text: 'Edit sheet, in charts, add table and from the fields',
          image: ['/images/dashboard/q5.png'],
        },
      ],
    },
    {
      platform: 'PowerBI',
      description: 'For PowerBI using WEB method:',
      items: [
        {
          text: 'You have to run powerBI Desktop in order to import data',
        },
        {
          text: 'You press Get Data and search for WEB method from the connection list',
          image: ['/images/dashboard/tab1.png'],
        },
        {
          text: 'Add resorce_id url into URL tab and press OK',
          url: `${
            typeof window !== 'undefined'
              ? window.location.origin +
                '/api/datastore/datastore_search/' +
                resource.id
              : ''
          }`,
          image: ['/images/dashboard/tab2.jpeg'],
        },
        {
          text: 'After loading, press Record tab',
          image: ['/images/dashboard/tab3.jpeg'],
        },
        {
          text: 'Press List in records:List section to extend all the records in the list',
          image: ['/images/dashboard/tab4.jpeg'],
        },
        {
          text: 'In the navbar, you will see To Table button, press it',
          image: ['/images/dashboard/tab5.jpeg'],
        },
        {
          text: 'In the following window, press OK to load data to table',
          image: ['/images/dashboard/tab6.jpeg'],
        },
        {
          text: 'In the next window, you will get all records transformed into table, press button in the column header to select columns',
          image: ['/images/dashboard/tab7.jpeg'],
        },
        {
          text: 'select columns you needed for the report, and press ok',
          image: ['/images/dashboard/tab8.jpeg'],
        },
        {
          text: 'you will get columns that added into table, check column types and values, and press Close&Apply button in the navbar on the top left corner',
          image: ['/images/dashboard/tab9.jpeg'],
        },
        {
          text: 'After successfully loading, you will get your dataset on the left panel, just click columns you needed to the report. You are all set.',
          image: ['/images/dashboard/tab10.jpeg'],
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#F7FAFC] px-5 sm:px-16 py-5 sm:py-14 rounded-3xl">
      <div className="mb-8">
        {dashboards.map((dashboard, index) => (
          <button
            key={index}
            className={`${
              index == activeIndex
                ? 'bg-[#CBE9FF] text-[#255B9B]'
                : 'text-[#202020]'
            } py-2 px-5 rounded-md font-semibold mr-2 `}
            onClick={() => setActiveIndex(index)}
          >
            {dashboard.platform}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-3xl p-6">
        <span className="font-semibold">
          {dashboards[activeIndex].description}
        </span>
        <ul className="list-disc mt-4 font-[Avenir]">
          {dashboards[activeIndex].items.map((item, index) => {
            return (
              <li className="mb-2" key={index}>
                {item.text}
                {item?.url && (
                  <div>
                    <a href={`${item.url}`} className="text-blue-400">
                      {item.url}{' '}
                    </a>
                    <CopyIconButton
                      hintBeforeCopy="Copy this snippet"
                      hintAfterCopy="Copied"
                      content={item.url}
                    />
                  </div>
                )}
                {item?.image &&
                  item.image.map((imagg, index) => (
                    <img src={imagg} className="mt-2" key={index} alt="" />
                  ))}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardBuilder;
