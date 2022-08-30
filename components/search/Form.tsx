import { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';

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
      className="relative items-center flex flex-row w-3/4"
    >
      <input
        id="search2"
        type="search"
        name="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search by keyword and press enter"
        aria-label="Search"
        className="inline-block w-full pr-10 py-4 border-0 rounded-md leading-none bg-white placeholder:text-slate-400"
      />
      <SearchIcon className="w-6 absolute right-3 text-slate-400" />
    </form>
  );
};

export default SearchForm;
