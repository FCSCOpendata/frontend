import Link from 'next/link';
import { AR } from '../../hooks/locale';

const Tags: React.FC<{ tags: any[]; style: string }> = ({ tags, style }) => {
  const colors = [
    {
      color: '#80E47E',
      text: '#086F06',
    },
    {
      color: '#C2B2E5',
      text: '#6444AC',
    },
    {
      color: '#7EE4DE',
      text: '#00968D',
    },
  ];

  const getColors = (index) => {
    return `inline-flex items-center ${AR(
      'ml-3',
      `mr-3`
    )} px-5 py-1.5 border border-transparent text-xs rounded-full text-[${
      colors[index].text
    }] bg-[${colors[index].color}]`;
  };

  return (
    <>
      {tags.map((tag, index) => (
        <Link key={`tag-${index}`} href={`/search?fq=tags:"${tag.name}"`}>
          <a
            href={`/search?fq=tags:"${tag.name}"`}
            key={`${index}-name`}
            className={style ? style : getColors(index)}
          >
            {tag.title || tag.name}
          </a>
        </Link>
      ))}
    </>
  );
};

export default Tags;
