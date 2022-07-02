import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchForm: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    router.push({
      pathname: '/search',
      query: { q: searchQuery },
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="items-center flex flex-row"
    >
      <input
        id="search2"
        type="search"
        name="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search by keyword"
        aria-label="Search"
        className="inline-block w-3/4 pr-3 py-4 border-0 rounded-md leading-none bg-white placeholder:text-slate-400"
      />
      <button
        onClick={() => handleSubmit(false)}
        type="button"
        className="inline-block text-lg uppercase font-medium px-10 py-4 ml-4 leading-none border bg-primaryGreen rounded-md text-white border-primaryGreen lg:mt-0"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
