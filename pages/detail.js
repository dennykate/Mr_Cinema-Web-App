import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "./components/Header";
import DetailBody from "./components/DetailBody";
import Footer from "./components/Footer";
import RecommendedMovies from "./components/RecommendedMovies";

const detail = () => {
  const router = useRouter();
  const { name } = router.query;

  const [qry, setQry] = useState("");
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    if (name != undefined) {
      encryptTitle(name);
    }
  }, [name]);

  useEffect(() => {
    if (name) {
      fetchMovieDataFromDatabase(name);
    }
  }, [name]);

  const fetchMovieDataFromDatabase = (name) => {
    fetch(`http://localhost:8000/movie/slug=${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "error 404") {
          // router.push("/");
          console.log("back to homepage");
        }

        setMovieData(data[0]);
      });
  };

  const encryptTitle = (str) => {
    const arrStr = str.split("-");
    let name = "";
    for (let i = 0; i < arrStr.length; i++) {
      name += arrStr[i].toUpperCase() + " ";
    }
    setTitle(name);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link href="../images/icon.png" rel="icon" />
      </Head>

      <Header />
      <DetailBodyContainer data={movieData} />
      <RecommendedMovies />
      <Footer />
    </div>
  );
};

const DetailBodyContainer = ({ data }) => (
  <>{data && <DetailBody data={data} />}</>
);

export default detail;
