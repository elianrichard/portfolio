import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="selection:bg-transparent selection:text-mainRed">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
