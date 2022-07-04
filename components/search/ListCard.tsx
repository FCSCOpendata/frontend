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
  return (
    <li
      {...props}
      className="group relative bg-[#F7FAFC] min-w-0 flex-1 sm:flex sm:items-center sm:justify-between mt-6 py-4 px-8 rounded-xl h-32"
    >
      <span className="absolute left-0 bottom-0 w-full h-full group-hover:border-b-4 border-[#22B373] rounded-b-xl z-0 ease-in-out duration-150" />
      <div className="flex flex-cols items-center h-full z-10">
        {/* Image */}
        <div className="h-full w-28 rounded-2xl bg-gray-200">
          {/* <img src="" alt="" /> */}
        </div>
        {/* Title, description & org */}
        <div className="px-6 flex flex-col justify-between h-full">
          <Link
            href={`/@${
              dataset.organization ? dataset.organization.name : 'dataset'
            }/${dataset.name}`}
          >
            {/* eslint-disable-next-line */}
            <a className="block focus:outline-none">
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
          <div className="inline-flex items-center py-1 space-x-2 text-[#7C7C7C]">
            <img
              src="/images/library-icon.svg"
              alt="orgs"
              className="w-4 mb-1 grayscale"
            />
            <span className="text-xs capitalize">
              {dataset.organization.title || dataset.organization.name}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start h-full text-[#7C7C7C] z-10">
        {/* dataset info on hover */}
        <div className="flex flex-col px-4 border-l-2 border-[#E6E6E6] h-full opacity-0 group-hover:opacity-100 ease-in-out duration-150">
          <div className="">
            <img
              src="/images/time.svg"
              alt="t"
              className="inline grayscale mr-1 w-4"
            />
            <span className="text-xs">
              {dataset.resources.length}&nbsp;
              {dataset.resources.length > 1 ? 'resources' : 'resource'}
            </span>
          </div>
          <div className="">
            <img
              src="/images/time.svg"
              alt="t"
              className="inline grayscale mr-1 w-4"
            />
            <span className="text-xs capitalize">
              {timeago.format(dataset.updated)}
            </span>
          </div>
          <div className="">
            <CalendarIcon className="inline mr-1 w-4" />
            <span className="text-xs capitalize">2017 -2020</span>
          </div>
        </div>
        {/* file icons */}
        <div className="grid items-center px-8 ml-8 h-full border-l-2 border-[#E6E6E6]">
          {datasetFiles.map((file, index) => (
            <button key={index}>
              <img src={file.icon} width={20} alt={file.name} />
            </button>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Card;
