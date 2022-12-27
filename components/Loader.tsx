import Image from 'next/image';
import React from 'react';
import Layout from './Layout';

const Loader = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <Image
          src="/images/pokeball.svg"
          alt="pokeball"
          width={200}
          height={200}
          className="animate-spin my-40"
        />
      </div>
    </Layout>
  );
};

export default Loader;
