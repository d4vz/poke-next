import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="PokeNext" />
        <meta name="keywords" content="pokemon, nextjs" />
        <meta name="author" content="PokeNext" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../public/images/favicon.ico" />
      </Head>

      <body className="bg-zinc-700 text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
