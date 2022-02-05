const Pagination: React.FC<{ variables: any; count: number }> = ({
  variables,
  count,
}) => {
  const pages = [];
  for (let i = 0; i < count; i += 10) {
    pages.push(i);
  }

  const handleClick = (i) => {
    variables((prev) => {
      const newVar = { ...prev, start: i };
      return newVar;
    });
  };
  return (
    <div>
      {pages.map((val, key) => {
        return (
          <button
            className="btn btn-primary text-blue"
            key={key}
            onClick={() => {
              handleClick(val);
            }}
          >
            {key + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
