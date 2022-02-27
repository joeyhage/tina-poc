import Link from "next/link";
import Head from "next/head";
import React from "react";

export const Layout: React.FC = (props) => {
  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {" | "}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>
      <main>{props.children}</main>
    </div>
  );
};
