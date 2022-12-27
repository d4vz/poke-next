import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const [value, setValue] = React.useState<string>('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <nav className="flex justify-between px-5 py-3 items-center sticky">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold">Poke</h1>
        <Image
          src="/images/pokeball.svg"
          alt="pokeball"
          width={30}
          height={30}
        />
        <h1 className="text-2xl font-semibold">Next</h1>
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="
              bg-zinc-800
              text-gray-200
              rounded-lg
              px-3
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:ring-opacity-50
              transition-colors
              hover:bg-zinc-700
              focus:bg-zinc-700
              "
              value={value}
              onChange={handleChange}
            />
          </div>
        </li>
        <li>
          <Link
            className="font-semibold hover:text-red-600 transition-all"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold hover:text-red-600 transition-all"
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
