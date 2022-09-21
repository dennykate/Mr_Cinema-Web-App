import React, { useState, Fragment, createElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { navBarData } from "./Dummy/data";
import { fetchAdsDataFromDatabase } from "./Dummy/HelperFunctions";

const Header = ({ pathname }) => {
  const router = useRouter();
  const [searchItem, setSearchItem] = useState("");

  const [smMenuItems, setSmMenuItems] = useState(false);
  const [mdSearchContainer, setMdSearchContainer] = useState(false);

  const [bannerAdsData, setBannerAdsData] = useState();

  useEffect(() => {
    fetchAdsDataFromDatabase(2).then((x) => {
      console.log(x);
      setBannerAdsData(x.data[0]);
    });
  }, []);

  useEffect(() => {
    fetchAdsDataFromDatabase();
  }, []);

  const search = (item) => {
    if (!item) {
      return;
    }

    item = encodeSearchItem(item);
    router.push({
      pathname: "/",
      query: {
        search: item,
      },
    });
    setSearchItem("");
  };

  const searchKeyPress = (e) => {
    if (e.charCode == 13) {
      search(searchItem);
    }
  };

  const encodeSearchItem = (str) => {
    let x = "";
    let arr = str.toLowerCase().trim().split(" ");
    arr.forEach((y) => {
      console.log(y);
      x += y;
    });

    return arr.length == 0 ? x.substring(0, x.length - 1) : x;
  };

  return (
    <header className="h-auto">
      <div
        className="max-w-5xl flex flex-row justify-between items-center px-5 py-3 sm:p-5 mx-auto 
     backdrop-blur-lg z-10 bg-white bg-opacity-10"
      >
        <Link href="/">
          <Image
            src={require("../../public/images/icon.png")}
            alt={"Logo"}
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden flex-row items-center space-x-10 sm:flex  ">
          {navBarData.map((data, index) => (
            <Link key={index} href={`./${data[0]}`}>
              <h6 className="hover:text-white cursor-pointer transition duration-100 transform hover:scale-105">
                <div
                  className={
                    pathname == data[0]
                      ? "text-yellow-700 scale-125 hover:text-white"
                      : ""
                  }
                >
                  {data[1]}
                </div>
              </h6>
            </Link>
          ))}

          <div
            className="bg-yellow-600 px-4 py-2 rounded-sm text-black font-medium cursor-pointer
          hover:text-white transition select-none"
            onClick={() => {
              setMdSearchContainer(!mdSearchContainer);
            }}
          >
            Search
          </div>
        </div>

        <div className="sm:hidden cursor-pointer">
          <Image
            src={require("../../public/images/menu-bar.png")}
            alt="menu-bar"
            width={35}
            height={30}
            onClick={() => {
              setSmMenuItems(!smMenuItems);
            }}
          />
        </div>
      </div>

      <div className={!smMenuItems ? "hidden" : ""}>
        <div
          className=" w-screen h-auto bg-yellow-600 flex flex-col items-start px-8 
        justify-center transform sm:hidden z-5"
        >
          {navBarData.map((data, index) => (
            <Link key={index} href={`./${data[0]}`}>
              <h6 className="text-black cursor-pointer text-lg my-3 font-medium">
                <div className={pathname == data[0] ? "text-white" : ""}>
                  {data[1]}
                </div>
              </h6>
            </Link>
          ))}

          <div className="h-10 my-3 w-full mx-auto flex bg-black pr-2">
            <input
              className="h-full w-11/12 bg-black text-white px-2 outline-none border-none"
              placeholder="Search"
              value={searchItem}
              onChange={(text) => {
                setSearchItem(text.target.value);
              }}
              onKeyPress={searchKeyPress}
            />
            <div className="bg-black h-full w-1/12 flex justify-center items-center ">
              <Image
                src={require("../../public/images/search-icon.png")}
                width={18}
                height={18}
                alt="search-icon"
                className="cursor-pointer"
                onClick={() => {
                  search(searchItem);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="medium-search-text-container"
        className={
          mdSearchContainer
            ? "block opacity-100 transition-opacity"
            : "hidden opacity-0 transition-opacity"
        }
      >
        <div className="max-w-5xl h-16 bg-white mx-auto hidden sm:flex transform">
          <input
            value={searchItem}
            placeholder="Search"
            className="w-11/12 h-full bg-black text-white outline-none border-none px-4 "
            onChange={(text) => {
              setSearchItem(text.target.value);
            }}
            onKeyPress={searchKeyPress}
          />
          <div className="bg-black h-full w-1/12 flex justify-center items-center">
            <Image
              src={require("../../public/images/search-icon.png")}
              width={20}
              height={20}
              alt="search-icon"
              className="cursor-pointer"
              onClick={() => {
                search(searchItem);
              }}
            />
          </div>
        </div>
      </div>

      {bannerAdsData && <BannerAds data={bannerAdsData} />}
    </header>
  );
};

const BannerAds = ({ data }) => (
  <Link href={data.url} passHref>
    <a target="_blank">
      <div className="max-w-5xl h-auto mx-auto mt-1 cursor-pointer">
        <Image src={data.gif} alt="ads" width={1200} height={200} />
      </div>
    </a>
  </Link>
);

export default Header;
