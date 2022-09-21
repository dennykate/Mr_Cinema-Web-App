import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./components/Header";
import HowToUseBody from "./components/HowToUseBody";
import Footer from "./components/Footer";

const how_to_use = () => {
  const router = useRouter();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname.split("/")[1]);
  }, [router]);
  return (
    <div>
      <Head>
        <title>How To Use</title>
        <link rel="icon" href="../images/icon.png" />
      </Head>

      <Header pathname={pathname} />
      <HowToUseBody />
      <Footer />
    </div>
  );
};

export default how_to_use;
