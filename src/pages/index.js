import Head from "next/head";

import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Head>
        <title>Surfblog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
