import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import pokeball from '../../public/images/pokeball.svg';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src={pokeball} alt="pokeball" width={30} height={30} />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
