import Link from 'next/link';

const Tags: React.FC<{tags: any[], style: string}> = ({ tags, style }) => {
  const colors = [
    {
      color: 'green-400',
      text: 'green-800',
    },
    {
      color: 'indigo-500',
      text: 'indigo-800',
    },
    {
      color: 'blue-200',
      text: 'blue-800',
    },
  ];

  const getColors = (index) => {
    return `inline-flex items-center mr-3 px-5 py-1.5 border border-transparent text-xs rounded-full text-${colors[index].text} bg-${colors[index].color}`
  }

  return (
    <>
    {tags.map((tag, index) => (
      <Link key={`tag-${index}`} href={`/search?fq=tags:"${tag.name}"`}>
        <a
          href={`/search?fq=tags:"${tag.name}"`}
          key= {`${index}-name`}
          className={style ? style: getColors(index)}
        >
          {tag.title || tag.name}
        </a>
      </Link>
    ))}
    </>
  )
 }

 export default Tags