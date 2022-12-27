import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SearchContext } from '../context/SearchContext';

const Navbar = () => {
  const { inputValue, setInputValue } = React.useContext(SearchContext);

  const [search, setSearch] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
        <span className="font-semibold text-xl tracking-tight">Poke</span>

        <Image
          src="/images/pokeball.svg"
          alt="pokeball"
          width={50}
          height={50}
        />

        <span className="font-semibold text-xl tracking-tight">Next</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-700 text-gray-200 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent
          border-2 border-zinc-600 placeholder-gray-400 transition duration-500 ease-in-out mr-4
          "
          onChange={handleSearch}
        />
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 font-semibold mr-4 hover:text-red-500 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 font-semibold    hover:text-red-500 mr-4 transition-all duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
