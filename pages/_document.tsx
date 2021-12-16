/**
 * Caution: Consider this file when using NextJS
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="bumblebee">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/assets/favicon2.svg" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
