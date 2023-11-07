import Head from "next/head";
// import styles from './layout.module.css';
import { ReactNode } from "react";
import Header from "./header";
import Script from "next/script";

const name = "Alex Mayorga";
export const siteTitle = "Alex Mayorga | Full Stack Javascript Developer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alex Mayorga | Full Stack JavaScript Developer"
        />
        <meta
          property="og:image"
          content={`../public/alexmayorga-logo-og-image.jpeg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <Script strategy="lazyOnload" src='https://unpkg.com/holderjs@2.9.9/holder.js'></Script> */}
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
