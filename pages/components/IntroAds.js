import React, { useState } from "react";
import Image from "next/image";

import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";

const IntroAds = ({ data }) => {
  const [hideAds, setHideAds] = useState(false);
  return (
    <div className={!hideAds ? "block" : "hidden"}>
      <div
        className="w-full h-[100vh] fixed top-0 left-0 bg-black bg-opacity-80 z-50
    flex justify-center items-center"
      >
        <div className="sm:w-[520px] sm:h-[520px] sm:p-8 p-12 relative">
          <div
            className=" absolute w-8 h-8 rounded-full bg-[#ED213A] sm:top-0 top-3 right-3 sm:right-0 p-1 text-white
        cursor-pointer hover:bg-white hover:text-[#ED213A]"
            onClick={() => {
              setHideAds(true);
            }}
          >
            <XIcon />
          </div>
          <Link href={data.url} passHref>
            <a target="_blank">
              <Image
                src={data.gif}
                alt={"native-ads"}
                width={1000}
                height={1000}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroAds;
