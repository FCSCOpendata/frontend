/* eslint-disable jsx-a11y/anchor-is-valid */
export default function OpenData101() {
  function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="relative h-fit">
      <img src="/images/open-data-101.svg" alt="Open Data 101" />
      <div className="absolute w-1/2 inset-x-1/4 inset-y-1/3 text-center">
        <p className="text-[#54CA59] font-semibold">- NEXT STOP -</p>
        <a href="/p/open-data-101">
          <h2 className="font-avenir font-extrabold text-4xl mb-2">
            Open Data 101
          </h2>
        </a>
        <p className="text-center px-28 text-sm mb-4">
          Learn more about what open data is, how to use it and other key
          things you need to know.
        </p>
        <a
          href="#"
          className="text-[#54CA59] font-medium"
          onClick={scrollToTop}
        >
          Go back to top
        </a>
      </div>
    </div>
  );
}
