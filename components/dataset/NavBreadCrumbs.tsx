/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function NavBreadCrumbs({ navInfo }) {
  return (
    <div className=" mt--2 mb-8 font-[Avenir]">
      <div className="flex flex-1 bg-[#F7FAFC] bg-waves pl-2">
        <ol className="flex text-[13px] items-center font-[500] tracking-widest uppercase text-[#464646] px-12 py-8 space-x-2">
          <li>
            <Link href="/search">
              <a className="group relative">
                Datasets
                <span
                  className={`hidden lg:opacity-0 lg:flex absolute left-1 right-1 -bottom-2.5 h-0.5 ease-in-out duration-300
                  group-hover:bg-nav-underline lg:group-hover:opacity-100`}
                />
              </a>
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <Link href={`/@${navInfo.orgName}`}>
              <a className="group relative">
                {navInfo.orgTitle}
                <span
                  className={`hidden lg:opacity-0 lg:flex absolute left-1 right-1 -bottom-2.5 h-0.5 ease-in-out duration-300
                  group-hover:bg-nav-underline lg:group-hover:opacity-100`}
                />
              </a>
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>{navInfo.datasetTitle}</li>
        </ol>
      </div>
    </div>
  );
}
