import { useState, useEffect } from 'react';
const Pagination: React.FC<{
  count: number;
  setQvariables: any;
}> = ({ count, setQvariables }) => {
  const pageLimit = 5;

  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStart(JSON.parse(window.localStorage.getItem('start')));
  }, []);

  useEffect(() => {
    setCurrentPage(JSON.parse(window.localStorage.getItem('currentPage')));
  }, [currentPage]);

  useEffect(() => {
    window.localStorage.setItem('start', JSON.stringify(start));
  }, [start]);

  const nextPage = () => setStart((page) => page + pageLimit);
  const prevPage = () => setStart((page) => page - pageLimit);

  const pageGroup = () => {
    return new Array(pageLimit)
      .fill(undefined)
      .map((_, index) => start + index + 1);
  };

  const pages = [];
  for (let i = 0; i < count; i += pageLimit) {
    pages.push(i);
  }
  const handleClick = (item, startRange) => {
    window.localStorage.setItem('currentPage', JSON.stringify(item));
    setCurrentPage(item);
    setQvariables((prev) => {
      return {
        ...prev,
        start: startRange,
      };
    });
  };

  return (
    <div className="font-raleway flex text-lg text-[#202020]">
      <button
        onClick={prevPage}
        disabled={start < pageLimit}
        className={`pr-6 ${start < pageLimit ? 'text-[#747474]' : null}`}
      >
        <span className="flex items-center">
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.15219 14.6862C8.68844 15.1046 7.93656 15.1046 7.47281 14.6862L0.34781 8.25761C0.125112 8.05668 -6.30829e-07 7.78416 -6.55671e-07 7.5C-6.80513e-07 7.21584 0.125112 6.94332 0.34781 6.74239L7.47281 0.313816C7.93656 -0.104604 8.68844 -0.104604 9.15219 0.313816C9.61594 0.732234 9.61594 1.41063 9.15219 1.82904L4.05438 6.42857L17.8125 6.42857C18.4683 6.42857 19 6.90827 19 7.5C19 8.09173 18.4683 8.57143 17.8125 8.57143L4.05438 8.57143L9.15219 13.171C9.61594 13.5894 9.61594 14.2678 9.15219 14.6862Z"
              fill={`${start < pageLimit ? '#747474' : '#202020'}`}
            />
          </svg>
          Prev
        </span>
      </button>
      {pageGroup().map((pageNum, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleClick(pageNum, pages[pageNum - 1]);
            }}
            className={`mx-2 ${
              pageNum === currentPage
                ? 'px-3 py-0 rounded-md bg-blue-100'
                : null
            }`}
          >
            {pageNum <= pages.length ? pageNum : null}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        className={`ml-6 ${
          start === pages.length - 1 ? 'text-[#747474]' : null
        }`}
        disabled={start === pages.length - 1}
      >
        <span className="flex items-center">
          {' '}
          Next
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.84781 0.313814C10.3116 -0.104605 11.0634 -0.104605 11.5272 0.313814L18.6522 6.74239C18.8749 6.94332 19 7.21584 19 7.5C19 7.78416 18.8749 8.05668 18.6522 8.25762L11.5272 14.6862C11.0634 15.1046 10.3116 15.1046 9.84781 14.6862C9.38406 14.2678 9.38406 13.5894 9.84781 13.171L14.9456 8.57143L1.1875 8.57143C0.531662 8.57143 0 8.09173 0 7.5C0 6.90827 0.531662 6.42857 1.1875 6.42857L14.9456 6.42857L9.84781 1.82904C9.38406 1.41062 9.38406 0.732233 9.84781 0.313814Z"
              fill={`${start === pages.length - 1 ? '#747474' : '#202020'}`}
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Pagination;
