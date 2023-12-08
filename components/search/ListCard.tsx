import React from 'react';
import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/outline';
import { AR } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { CloudDownloadIcon } from '@heroicons/react/outline';

const datasetFiles = [
  { name: 'pdf', icon: '/images/pdf-icon.svg' },
  { name: 'excel', icon: '/images/excel-icon.svg' },
  { name: 'csv', icon: '/images/csv-icon.svg' },
  { name: 'html', icon: '/images/resources/html.svg' },
  { name: 'xls', icon: '/images/excel-icon.svg' },
  { name: 'xlsx', icon: '/images/excel-icon.svg' },
  { name: 'api', icon: '/images/resources/json.svg' },
  { name: 'zip', icon: '/images/resources/zip.svg' },
];

const Card: React.FC<{ dataset: any }> = ({ dataset, ...props }) => {
  const { t } = useTranslation('common');
  const availableFormats = dataset.resources.map((item) =>
    item.format.toLowerCase()
  );
  return (
    <li {...props}>
      <Link
        href={`/@${
          dataset.organization ? dataset.organization.name : 'dataset'
        }/${dataset.name}`}
      >
        {/* eslint-disable-next-line */}
        <a className="group relative bg-[#F7FAFC] min-w-0 flex-1 flex flex-col lg:flex-row md:items-start lg:items-center justify-start sm:justify-between mt-6 py-4 px-4 sm:px-8 rounded-lg h-fit">
          <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-lg z-0 ease-in-out duration-150" />
          <div className="md:w-[80%] lg:w-auto flex flex-col sm:flex-row items-start lg:items-center h-full z-10">
            {/* Image */}
            <div className=" min-w-full sm:min-w-[6rem] sm:w-28 rounded-lg bg-gray-200">
              <img
                src={
                  dataset.organization.image ||
                  `/images/topics/topic-${Math.floor(
                    Math.random() * (6 - 1 + 1) + 1
                  )}.png`
                }
                alt={dataset.organization.title}
                className="w-full h-[150px] h:sm-auto object-cover sm:object-scale-down object-center rounded-md"
              />
            </div>
            {/* Title, description & org */}
            <div className="sm:px-6 flex flex-col sm:justify-between h-full space-y-4 sm:space-y-0">
              {/* eslint-disable-next-line */}
              <a className="mt-3 sm:mt-0 block focus:outline-none space-y-2 lg:space-y-0">
                <h1
                  className={`text-lg font-semibold text-[#202020]  sm:text-left max-w-lg ${AR(
                    'sm:text-right'
                  )}`}
                >
                  {dataset.title}
                </h1>
                <p
                  className={`text-sm font-medium text-[#7C7C7C] sm:h-[2.5rem] line-clamp-2  sm:text-left ${AR(
                    'sm:text-right'
                  )}`}
                >
                  {/* Bug: description comes with html tags */}
                  {dataset.description
                    ? dataset.description.replace(/<[^>]*>?/gm, '')
                    : ''}
                </p>
              </a>
              <div className="inline-flex items-center justify-start lg:justify-start sm:py-1 lg:py-2 space-x-2 text-[#7C7C7C]">
                <img
                  src="/images/library-icon.svg"
                  alt="orgs"
                  className={`w-4 mb-1 grayscale ${AR('ml-2')}`}
                />
                <span className="text-xs text-left sm:text-left capitalize">
                  {dataset.organization.title || dataset.organization.name}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto sm:pl-[96px] lg:pl-0 sm:flex justify-between items-center h-full text-[#7C7C7C] z-10">
            {/* dataset info on hover */}
            <div className="flex flex-row flex-wrap sm:flex-row lg:flex-col sm:items-center lg:items-start sm:pl-6 pt-4 lg:pt-0 lg:px-4 space-x-4 lg:space-x-0 lg:border-l-2 border-[#E6E6E6] h-full lg:opacity-0 group-hover:opacity-100 ease-in-out duration-150">
              <div className="whitespace-nowrap">
                <img
                  src="/images/page.svg"
                  alt="t"
                  className={`inline grayscale ${AR('ml-1', 'mr-1')} w-4`}
                />
                <span className="text-xs">
                  {dataset.resources.length}&nbsp;
                  {dataset.resources.length > 1
                    ? t('resource-plural')
                    : t('resource-plural')}
                </span>
              </div>
              <div className="whitespace-nowrap ">
                <img
                  src="/images/time.svg"
                  alt="t"
                  className={`inline grayscale ${AR('ml-1', 'mr-1')} w-4`}
                />
                <span className="text-xs capitalize">
                  {new Date(dataset.updated).toLocaleDateString('en-GB')}
                </span>
              </div>
              <div className="whitespace-nowrap">
                <CalendarIcon className={`inline ${AR('ml-1', 'mr-1')} w-4`} />
                <span className="text-xs capitalize">
                  {dataset.startPeriod} - {dataset.endPeriod}
                </span>
              </div>
              {dataset.total_downloads > 0 ? (
                <div className="whitespace-nowrap">
                  <CloudDownloadIcon
                    className={`inline w-5  h-3 ${AR('ml-1', 'mr-1')}`}
                  />
                  <span className="text-xs capitalize">
                    {dataset.total_downloads}
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
            {/* file icons */}
            <div className="sm:absolute top-0 right-0 lg:relative lg:top-auto lg:right-auto grid grid-flow-col lg:grid-flow-row gap-4 lg:gap-0 items-center justify-center pt-4 sm:pt-0 sm:px-8 lg:ml-8 h-full lg:border-l-2 border-[#E6E6E6]">
              {datasetFiles
                .filter((file) => {
                  return availableFormats.includes(file.name);
                })
                .map((file, index) => (
                  <img
                    key={index}
                    src={file.icon}
                    width="20px"
                    alt={file.name}
                    className="min-w-[20px] lg:mt-1"
                  />
                ))}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Card;
