import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dummyData } from "./Dummy/data";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import ItemCard from "./ItemCard";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const RecommendedMovies = () => {
  const [randomMovieData, setRandomMovieData] = useState([]);

  useEffect(() => {
    fetchRandomMoviesFromDatabase();
  }, []);
  const fetchRandomMoviesFromDatabase = () => {
    fetch(`http://localhost:8000/movie/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Recommded");
        console.log(data);
        setRandomMovieData(data);
      });
  };
  return (
    <>
      {randomMovieData.length > 0 && (
        <div className="max-w-5xl mx-auto h-auto sm:my-4 px-2 pt-5 pb-4 bg-white bg-opacity-10 backdrop-blur-lg ">
          <div className="text-sm sm:text-xl text-white mb-2 sm:mb-5 mx-1 sm:mx-3">
            Recommended Movies
          </div>
          <OwlCarousel
            className="owl-theme flex"
            loop
            margin={10}
            responsive={Responsive}
            dots={false}
            nav={false}
            autoplay={true}
            autoplaySpeed={1000}
            autoplayHoverPause={true}
          >
            {randomMovieData.map((data, index) => (
              <ItemCard data={data} key={index} />
            ))}
          </OwlCarousel>
        </div>
      )}
    </>
  );
};

const Responsive = {
  0: {
    items: 2,
  },
  768: {
    items: 3,
  },
  1024: {
    items: 4,
  },
};

export default RecommendedMovies;
