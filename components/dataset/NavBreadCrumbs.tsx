import Link from 'next/link';

export default function NavBreadCrumbs({ navInfo }) {
  return (
    <div className=" mt--2 mb-8 font-[Avenir]">
      <div className="flex flex-1 bg-[#F7FAFC] bg-waves pl-2">
        <ol className="flex text-[13px] items-center font-[500] tracking-widest uppercase text-[#464646] px-12 py-8 space-x-2">
          <li>
            <Link href="/search">Datasets</Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <Link href={`/organization/@${navInfo.orgName}`}>
              {navInfo.orgTitle}
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
