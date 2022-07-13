/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

export default function NavBreadCrumbs({ navInfo }) {
  return (
    <div className=" mt--2 mb-8 font-[Avenir]">
      <div className="flex flex-1 bg-[#F7FAFC] bg-waves pl-2">
        <ol className="flex text-[13px] items-center font-[500] tracking-widest uppercase text-[#464646] px-12 py-8 space-x-2">
          <li>
            <Link href="/search">
              <a>Datasets</a>
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <Link href={`/@${navInfo.orgName}`}>
              <a>{navInfo.orgTitle}</a>
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <Link href={`/@${navInfo.orgName}/${navInfo.datasetName}`}>
              <a>{navInfo.datasetTitle}</a>
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>{navInfo.resourceTitle}</li>
        </ol>
      </div>
    </div>
  );
}
