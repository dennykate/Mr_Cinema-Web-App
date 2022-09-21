import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { dummyDownlinkData } from "./Dummy/data";
import { fetchAdsDataFromDatabase } from "./Dummy/HelperFunctions";

const DetailBody = ({ data }) => {
  const [link, setLink] = useState([]);
  const [firBannerAdsData, setFirBannerAdsData] = useState();
  const [secBannerAdsData, setSecBannerAdsData] = useState();
  const [thirBannerAdsData, setThirBannerAdsData] = useState();
  const [nativeAdsData, setNativeAdsData] = useState();
  const [sideAdsData, setSideAdsData] = useState();

  useEffect(() => {
    setLink(JSON.parse(data.link));
  }, [data]);

  useEffect(() => {
    fetchAdsDataFromDatabase(1).then((data) => {
      setNativeAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(4).then((data) => {
      setFirBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(5).then((data) => {
      setSecBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(6).then((data) => {
      setThirBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(7).then((data) => {
      setSideAdsData(data.data[0]);
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto flex min-h-screen sm:min-h-0 sm:flex-row flex-col my-1 sm:space-x-2">
      <div className="h-auto bg-white bg-opacity-10 backdrop-blur-lg flex-1 pb-5 ">
        <div className="sm:w-3/4 w-full mx-auto sm:my-4 my-0 mb-6 sm:mb-10">
          <Image src={data.image} alt={"poster"} width={1620} height={1080} />
        </div>

        {firBannerAdsData && <BannerAds data={firBannerAdsData} />}

        <div className="mx-auto my-4 mt-10 px-4 sm:px-0 sm:w-4/5 h-auto ">
          <div className="sm:text-md text-sm my-3 sm:my-4 text-white">
            Name : {data.title + " "}
          </div>
          <div className="sm:text-md text-sm my-3 sm:my-4 text-white">
            Actress : {data.actress}
          </div>
          <div className="sm:text-md text-sm my-3 sm:my-4 text-white">
            Studio : {data.size} {" " + " "}
          </div>
          <div className="sm:text-md text-sm my-3 sm:my-4 text-white">
            Duration : {data.duration}
          </div>
          <div className="sm:text-md text-sm my-3 sm:my-4 text-white">
            Release Date : {data.relase_date || "---"}
          </div>
          <div className="sm:text-md text-sm my-3 sm:my-4 flex items-center text-white ">
            Category :{" "}
            <div className="ml-3 px-4 py-2 bg-red-700 text-white font-bold rounded-md">
              {data.category}
            </div>
          </div>

          <div className="w-16 border-b-2 border-white pb-1 font-medium text-white mb-4">
            About
          </div>
          <div className="sm:text-sm text-xs">{data.content}</div>
        </div>

        {nativeAdsData && (
          <Link href={nativeAdsData.url} passHref>
            <a target="_blank">
              <div className="mx-auto w-full p-10 sm:w-[500px] my-12">
                <Image
                  src={"https://i.postimg.cc/JhK4zLk7/animation-2.gif"}
                  alt={"native-ads"}
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
          </Link>
        )}

        <div className="sm:px-2 px-0 mb-10">
          <div className="w-full bg-black h-auto p-2">
            <div className="w-full h-12 flex border-b-2 border-gray-100 border-opacity-60">
              <div className="w-3/5 flex justify-center items-center text-white text-sm sm:text-md font-bold">
                Sever
              </div>
              <div className="w-1/5 flex justify-center items-center text-white text-sm sm:text-md font-bold">
                Size
              </div>
              <div className="w-1/5 flex justify-center items-center text-white text-sm sm:text-md font-bold">
                Quality
              </div>
            </div>

            {link.map((data, index) => (
              <Link
                href={
                  data.sever == "PussyDrive"
                    ? `./pussy-drive?id=${data.link}`
                    : data.link
                }
                key={index}
                passHref
              >
                <a target="_blank">
                  <div
                    className="w-full h-12 flex border-b-2 border-[#06202A] cursor-pointer
                hover:text-white"
                  >
                    <div className="w-3/5 flex justify-center items-center text-xs md:text-sm ">
                      <div className="w-2/5 flex justify-center">
                        <img
                          src={data.image}
                          alt="sever-logo"
                          className="w-5 h-5 mr-1 "
                        />
                      </div>
                      <div className="flex-1 w-3/5 ml-1 sm:ml-4">
                        {data.sever}
                      </div>
                    </div>

                    <div className="w-1/5 flex justify-center items-center text-xs md:text-sm">
                      {data.size}
                    </div>
                    <div className="w-1/5 flex justify-center items-center text-xs md:text-sm ">
                      {data.quality}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {secBannerAdsData && <BannerAds data={secBannerAdsData} />}
      </div>

      {/* side bar ads */}
      <div
        className="flex-0.5 bg-white bg-opacity-10 backdrop-blur-lg 
      flex items-center justify-center flex-col sm:block pb-2 sm:pb-0 sm:h-12"
      >
        {sideAdsData && (
          <Link href={sideAdsData.url} passHref>
            <a target="_blank">
              <Image
                src={"https://i.postimg.cc/PJhY8yrR/mmbus-ads-4.png"}
                alt="ads"
                width={200}
                height={500}
              />
            </a>
          </Link>
        )}
      </div>

      {/* absolute */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="sm:w-2/5 w-3/4 mx-auto transform translate-y-2 sm:-translate-x-4">
          {thirBannerAdsData && <BannerAds data={thirBannerAdsData} />}
        </div>
      </div>
    </div>
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

export default DetailBody;
