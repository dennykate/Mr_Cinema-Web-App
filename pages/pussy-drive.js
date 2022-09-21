import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import PussyDriveBody from "./components/PussyDriveBody";

const pussy_drive = () => {
  const router = useRouter();
  const { id, type } = router.query;

  useEffect(() => {
    console.log(id, type);
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>Pussy Drive</title>
        <link href="../images/icon.png" rel="icon" />
      </Head>

      <PussyDriveBody id={id} type={type} />
    </div>
  );
};

export default pussy_drive;
