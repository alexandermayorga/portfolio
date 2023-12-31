import Head from "next/head";
// import styles from './layout.module.css';
import { ReactNode } from "react";
import Header from "./header";
import Script from "next/script";
import Footer from "./footer";

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
        <meta property="og:image" content="/alexmayorga-logo-og-image.jpeg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GV7QF43GS8" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GV7QF43GS8');
        `}
      </Script>
      {/* <Script strategy="lazyOnload" src='https://unpkg.com/holderjs@2.9.9/holder.js'></Script> */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
