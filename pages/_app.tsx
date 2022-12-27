import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { SearchContextProvider } from '../context/SearchContext';
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../components/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));

  if (loading) {
    return <Loader />;
  }

  return (
    <SearchContextProvider>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SearchContextProvider>
  );
}
