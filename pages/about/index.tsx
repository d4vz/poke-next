import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const about = () => {
  return (
    <>
      <section className="h-full flex items-center justify-center">
        <div className="bg-zinc-500 p-10 text-2xl flex gap-10 items-center">
          <Image
            src="/images/pikachu.png"
            width={200}
            height={200}
            alt="pikachu"
          ></Image>
          <div>
            <h1 className="text-4xl font-bold">Sobre:</h1>
            <p>
              Este é um projeto desenvoldido por{' '}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/d4vz"
                className="font-bold underline hover:text-red-600 transition-all"
              >
                Davi Orlandi
              </Link>
              , utilizando NextJs e tailwindCSS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
