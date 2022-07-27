import React from 'react';
import Link from 'next/link';
import * as timeago from 'timeago.js';
import { CalendarIcon } from '@heroicons/react/outline';

const datasetFiles = [
  { name: 'pdf', icon: '/images/pdf-icon.svg' },
  { name: 'excel', icon: '/images/excel-icon.svg' },
  { name: 'csv', icon: '/images/csv-icon.svg' },
];

const Card: React.FC<{ dataset: any }> = ({ dataset, ...props }) => {
  const availableFormats = dataset.resources.map((item) =>
    item.format.toLowerCase()
  );
  return (
    <li
      {...props}
      className="group relative bg-[#F7FAFC] min-w-0 flex-1 xl:flex sm:items-center sm:justify-between mt-6 py-4 px-8 rounded-xl h-fit"
    >
      <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-xl z-0 ease-in-out duration-150" />
      <div className="flex flex-cols items-center h-full z-10">
        {/* Image */}
        <div className="min-w-[7rem] w-28 rounded-xl bg-gray-200">
          <img
            src={
              dataset.organization.image ||
              `/images/topics/topic-${Math.floor(
                Math.random() * (6 - 1 + 1) + 1
              )}.png`
            }
            alt={dataset.organization.title}
            className="w-full object-scale-down object-center"
          />
        </div>
        {/* Title, description & org */}
        <div className="px-6 flex flex-col sm:justify-between h-full space-y-4 sm:space-y-0">
          <Link
            href={`/@${
              dataset.organization ? dataset.organization.name : 'dataset'
            }/${dataset.name}`}
          >
            {/* eslint-disable-next-line */}
            <a className="block focus:outline-none space-y-2 xl:space-y-0">
              <h1 className="text-lg font-semibold text-[#202020] text-center sm:text-left max-w-xl">
                {dataset.title}
              </h1>
              <p className="text-sm font-medium text-[#7C7C7C] line-clamp-2 text-center sm:text-left">
                {/* Bug: description comes with html tags */}
                {dataset.description
                  ? dataset.description.replace(/<[^>]*>?/gm, '')
                  : 'This dataset does not have a description'}
              </p>
            </a>
          </Link>
          <div className="inline-flex items-center justify-center sm:justify-start py-1 xl:py-2 space-x-2 text-[#7C7C7C]">
            <img
              src="/images/library-icon.svg"
              alt="orgs"
              className="w-4 mb-1 grayscale"
            />
            <span className="text-xs text-center sm:text-left capitalize">
              {dataset.organization.title || dataset.organization.name}
            </span>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between items-center h-full text-[#7C7C7C] z-10">
        {/* dataset info on hover */}
        <div className="flex xl:flex-col items-center xl:items-start pl-6 pt-4 xl:pt-0 xl:px-4 space-x-4 xl:space-x-0 xl:border-l-2 border-[#E6E6E6] h-full xl:opacity-0 group-hover:opacity-100 ease-in-out duration-150">
          <div className="whitespace-nowrap">
            <img
              src="/images/page.svg"
              alt="t"
              className="inline grayscale mr-1 w-4"
            />
            <span className="text-xs">
              {dataset.resources.length}&nbsp;
              {dataset.resources.length > 1 ? 'resources' : 'resource'}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <img
              src="/images/time.svg"
              alt="t"
              className="inline grayscale mr-1 w-4"
            />
            <span className="text-xs capitalize">
              {timeago.format(dataset.updated)}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <CalendarIcon className="inline mr-1 w-4" />
            <span className="text-xs capitalize">
              {dataset.startPeriod} - {dataset.endPeriod}
            </span>
          </div>
        </div>
        {/* file icons */}
        <div className="grid grid-flow-col xl:grid-flow-row gap-4 xl:gap-0 items-center justify-center pt-4 sm:pt-0 sm:px-8 xl:ml-8 h-full xl:border-l-2 border-[#E6E6E6]">
          {datasetFiles
            .filter((file) => {
              return availableFormats.includes(file.name);
            })
            .map((file, index) => (
              <img key={index} src={file.icon} width={20} alt={file.name} />
            ))}
        </div>
      </div>
    </li>
  );
};

export default Card;
