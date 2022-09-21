import React, { useEffect, useState } from "react";
import Image from "next/image";

import ItemCard from "./ItemCard";
import { fetchAdsDataFromDatabase } from "./Dummy/HelperFunctions";
import Link from "next/link";

const Items = ({ data }) => {
  const [firstPartData, setFirstPartData] = useState([]);
  const [secondPartData, setSecondPartData] = useState([]);
  const [bannerAdsData, setBannerAdsData] = useState();

  useEffect(() => {
    dividedData(data);
  }, [data]);

  useEffect(() => {
    fetchAdsDataFromDatabase(3).then((data) => {
      console.log(data);
      setBannerAdsData(data.data[0]);
    });
  }, []);

  const dividedData = (data) => {
    setFirstPartData(data.slice(0, 6));
    setSecondPartData(data.slice(6, 12));
  };

  return (
    <section className="max-w-5xl py-10 mx-auto  backdrop-blur-lg z-10 bg-white bg-opacity-10  mb-6">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4
        space-x-3 px-2 sm:px-5 "
      >
        {firstPartData.length > 0 &&
          firstPartData.map((data, index) => (
            <ItemCard key={index} data={data} />
          ))}
      </div>

      {bannerAdsData && (
        <Link href={bannerAdsData.url} passHref>
          <a target="_blank">
            <div className="w-full h-auto flex my-5">
              <div className="sm:w-5/6 mx-auto">
                <Image
                  src={bannerAdsData.gif}
                  alt="ads"
                  width={1200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </a>
        </Link>
      )}

      <div
        className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4
        space-x-3 px-2 sm:px-5"
      >
        {secondPartData.length > 0 &&
          secondPartData.map((data, index) => (
            <ItemCard key={index} data={data} />
          ))}
      </div>
    </section>
  );
};

export default Items;
