import Head from "next/head";
// import styles from './layout.module.css';
import { ReactNode } from "react";
import Header from "./header";
import Script from "next/script";

const name = "Alex Mayorga";
export const siteTitle = "Next.js Sample Website";

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
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
