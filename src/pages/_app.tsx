import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="RH Chemistry | Unlock Your Creative Potential"
        />
        <meta
          name="description"
          content="Unlock Your Creative Potential with NEET TEST Series. Learn from Industry Expert and Enhance Your Skills. Led by the esteemed educator Raghavendra Hegde"
        />
        <meta property="og:title" content="RH Chemistry" />
        <meta
          property="og:description"
          content="Unlock Your Creative Potential with NEET TEST Series. Learn from Industry Expert and Enhance Your Skills. Led by the esteemed educator Raghavendra Hegde"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rhchemistry.online" />
        <meta property="og:image" content="Your_image_URL_here" />
        <meta
          property="instagram:url"
          content="https://www.instagram.com/rhchemistry"
        />
        <meta property="instagram:name" content="RH Chemistry" />
        <meta
          name="keywords"
          content="RH Chemistry, NEET, NEET TEST, Raghavendra Hegde, Test Series, Medical, AIMS, Chemistry, Biology, Physics, PUC"
        />
        <title>RH Chemistry | Unlock Your Creative Potential</title>
        <link rel="icon" href="/Logo.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
