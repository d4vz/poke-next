import React, { Children, FC, ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
