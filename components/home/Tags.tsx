const Tags: React.FC = () => {
  const keywords = [
    {
      keyword: 'GDP UAE',
      color: 'green-400',
      text: 'green-800',
    },
    {
      keyword: 'Environment Data',
      color: 'indigo-500',
      text: 'indigo-800',
    },
    {
      keyword: 'EDSSR Rules',
      color: 'blue-200',
      text: 'blue-800',
    },
  ];

  return (
    <>
      {keywords.map((item, index) => (
        <a
          href={`/search?q=${item.keyword}`}
          key={`keyword-${index}`}
          className={`inline-flex items-center mr-3 px-5 py-1.5 border border-transparent text-xs rounded-full text-${item.text} bg-${item.color}`}
        >
          {item.keyword}
        </a>
      ))}
    </>
  );
};

export default Tags;
