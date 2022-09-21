import React, { useEffect, useState } from "react";
import Image from "next/image";

import { dummyData } from "./Dummy/data";
import ItemCard from "./ItemCard";
import Link from "next/link";
import { fetchAdsDataFromDatabase } from "./Dummy/HelperFunctions";

const CategoryActressBody = ({ query, data }) => {
  const [firBannerAdsData, setFirBannerAdsData] = useState();
  const [secBannerAdsData, setSecBannerAdsData] = useState();

  useEffect(() => {
    fetchAdsDataFromDatabase(8).then((data) => {
      setFirBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(9).then((data) => {
      setSecBannerAdsData(data.data[0]);
    });
  }, []);
  return (
    <>
      <div
        className="max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg
    px-2 sm:px-5 mb-10 py-5 -z-10"
      >
        <div className="grid grid-cols-2 2xl:grid-cols-3 sm:space-x-4 space-x-2 ">
          {data.map((data, index) => (
            <Link href={`/?${query}=${data.slug}`} key={index}>
              <div
                id="item-card"
                className="bg-gray-400 bg-opacity-10 cursor-pointer group my-2 "
                title={data.title}
                key={index}
              >
                <Image
                  src={data.image}
                  alt="thumbnail"
                  width={1720}
                  height={1080}
                  className="opacity-100 sm:opacity-90 group-hover:opacity-100"
                />
                <div className="text-xs sm:text-sm px-2 pb-1 truncate group-hover:text-white">
                  {data.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {firBannerAdsData && (
          <div className="mt-10">
            <BannerAds data={firBannerAdsData} />
          </div>
        )}
      </div>

      {/* absolute */}
      {secBannerAdsData && (
        <div className="fixed bottom-0 left-0 w-full z-10">
          <div className="sm:w-2/5 w-3/4 mx-auto transform translate-y-2 sm:-translate-x-4">
            <BannerAds data={secBannerAdsData} />
          </div>
        </div>
      )}
    </>
  );
};

const BannerAds = ({ data }) => (
  <Link href={data.url} passHref>
    <a target="_blank">
      <div className="w-full h-auto px-0 sm:px-2">
        <div className="w-full">
          <Image
            src={data.gif}
            alt="ads"
            width={1200}
            height={200}
            className="z-50"
          />
        </div>
      </div>
    </a>
  </Link>
);

export default CategoryActressBody;
