import { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

const SearchForm: React.FC = () => {
  const { t } = useTranslation('common');
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
      className="relative items-center flex flex-row w-3/4 focus:outline-none"
    >
      <input
        id="search2"
        type="search"
        name="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={t('hm-bt-search')}
        aria-label="Search"
        className="inline-block w-full pr-10 py-4 border-2 border-[#4996c8] rounded-md leading-none bg-white placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-2 focus:border-[#4996c8]"
      />
      <SearchIcon className="w-6 absolute right-3 text-slate-400" />
    </form>
  );
};

export default SearchForm;
