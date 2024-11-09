import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="
          bg-gradient-to-r

        dark:from-gray-800/10
        dark:via-gray-800/10
        dark:to-orange-300/10
        "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
