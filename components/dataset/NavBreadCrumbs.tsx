import Link from 'next/link';

export default function NavBreadCrumbs({ navInfo }) {
  return (
    <div className="px-8 mt-8 mb-8">
      <div className="flex flex-1 bg-gradient-to-r from-red-500 to-pink-700 rounded-2xl">
        <ol className="flex text-sm items-center font-medium tracking-widest uppercase text-white px-12 py-8 space-x-2">
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
