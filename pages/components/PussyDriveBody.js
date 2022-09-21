import React, { useEffect, useRef, useState } from "react";
import Playable from "playable";
import Image from "next/image";

import IntroAds from "./IntroAds";
import Error_404 from "./404";
import { fetchAdsDataFromDatabase } from "./Dummy/HelperFunctions";
import Link from "next/link";

const PussyDriveBody = ({ id, type }) => {
  const size = useWindowSize();

  const [screenSize, setScreenSize] = useState();
  const [url, setUrl] = useState("");

  const [nativeAdsData, setNativeAdsData] = useState();
  const [firBannerAdsData, setFirBannerAdsData] = useState();
  const [secBannerAdsData, setSecBannerAdsData] = useState();

  useEffect(() => {
    fetchAdsDataFromDatabase(10).then((data) => {
      setFirBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(11).then((data) => {
      setSecBannerAdsData(data.data[0]);
    });

    fetchAdsDataFromDatabase(12).then((data) => {
      setNativeAdsData(data.data[0]);
    });
  }, []);

  useEffect(() => {
    if (type == "type-4") {
      fetchType4VideoUrl(id);
    } else {
      fetchVideoUrl(id);
    }
  }, [size, id, type]);

  const fetchVideoUrl = async (id) => {
    const res = await fetch(
      "https://appsdev.cyou/xv-ph-rt/api/?site_id=redtube&video_id=" + id
    );
    const json = await res.json();

    const _1080p = json.mp4["1080p"];
    const _720p = json.mp4["720p"];
    const _480p = json.mp4["480p"];
    const _240p = json.mp4["240p"];

    if (_1080p) {
      setUrl(_1080p);
      responsiveVideoSize(_1080p);
      return;
    } else if (_720p) {
      setUrl(_720p);
      responsiveVideoSize(_720p);
      return;
    } else if (_480p) {
      setUrl(_480p);
      responsiveVideoSize(_480p);
      return;
    } else if (_240p) {
      setUrl(_240p);
      responsiveVideoSize(_240p);
      return;
    }
  };

  const fetchType4VideoUrl = (url) => {
    fetch(`http://localhost:8000/video-url/type-4`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        token: "123456789",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        responsiveVideoSize(data.url);
      });
  };

  const responsiveVideoSize = (url) => {
    if (size.width > 700) {
      setScreenSize("lg");
    } else {
      setScreenSize("sm");
    }
    playerOneFunc(url);
    playerTwoFunc(url);
  };

  const playerOneFunc = (url) => {
    let config = {
      width: 700,
      height: 384,
      src: url,
    };

    const theme = {
      liveColor: "#38ef7d",
      progressColor: "#38ef7d",
    };

    const player = Playable.create(config, theme);

    let content_1 = document.getElementById("content_1");
    if (!content_1.hasChildNodes()) {
      player.attachToElement(document.getElementById("content_1"));
    }
  };

  const playerTwoFunc = (url) => {
    let config = {
      width: 350,
      height: 176,
      src: url,
    };

    const theme = {
      liveColor: "#38ef7d",
      progressColor: "#38ef7d",
    };

    const player = Playable.create(config, theme);

    let content_2 = document.getElementById("content_2");
    if (!content_2.hasChildNodes()) {
      player.attachToElement(document.getElementById("content_2"));
    }
  };

  //   axios
  //     .get(url, {
  //       responseType: "blob",
  //     })
  //     .then((res) => {
  //       const url = window.URL.createObjectURL(new Blob([res.data]));
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "rest.mp4");
  //       link.click();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      {nativeAdsData && <IntroAds data={nativeAdsData} />}
      <div className="sm:py-10">
        <div className={screenSize == "lg" ? "block" : "hidden"}>
          <div className="max-w-5xl mx-auto flex items-center flex-col px-4 py-4 bg-[#f5f5f5]">
            {firBannerAdsData && <BannerAds data={firBannerAdsData} />}
            <div id="content_1"></div>
            <div
              className="my-5 px-6 py-2 bg-green-500 text-black rounded-full font-bold cursor-pointer
          hover:text-green-500 hover:bg-black transition"
            >
              <a href={url} target="_blank">
                Download
              </a>
            </div>
            {secBannerAdsData && <BannerAds data={secBannerAdsData} />}
          </div>
        </div>

        <div className={screenSize == "sm" ? "block" : "hidden"}>
          <div className="max-w-5xl mx-auto flex items-center flex-col py-4 bg-[#f5f5f5] h-screen justify-between">
            {firBannerAdsData && <BannerAds data={firBannerAdsData} />}
            <div className="flex justify-center items-center flex-col">
              <div id="content_2"></div>
              <div
                className="my-5 px-6 py-2 bg-green-500 text-black rounded-full font-bold cursor-pointer
          hover:text-green-500 hover:bg-black transition "
              >
                <a href={url} target="_blank">
                  Download
                </a>
              </div>
            </div>
            {secBannerAdsData && <BannerAds data={secBannerAdsData} />}
          </div>
        </div>
      </div>

      {screenSize != "sm" && screenSize != "lg" && <Error_404 />}
    </>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

const BannerAds = ({ data }) => (
  <Link href={data.url} passHref>
    <a target="_blank">
      <div className="sm:w-3/4 w-full h-auto px-0 mx-auto">
        <div className="w-full">
          <Image src={data.gif} alt="ads" width={1200} height={200} />
        </div>
      </div>
    </a>
  </Link>
);

export default PussyDriveBody;
