import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
      <ul className="flex gap-3">
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
