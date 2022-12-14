import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./components/Header";
import CategoryActressBody from "./components/CategoryActressBody";
import Footer from "./components/Footer";
import Pages from "./components/Pages";
import Error_404 from "./components/404";
import RecommendedMovies from "./components/RecommendedMovies";
import { fetchAdsDataFromDatabase } from "./components/Dummy/HelperFunctions";

const category = () => {
  const router = useRouter();
  const { page } = router.query;

  const [queryPage, setQueryPage] = useState();
  const [pathname, setPathname] = useState();
  const [error, setError] = useState(false);

  const [categoryData, setCategoryData] = useState([]);
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    setQueryPage(parseInt(page));
    setPathname(router.pathname.split("/")[1]);

    if (parseInt(page) > lastPage) {
      setError(true);
    } else {
      setError(false);
    }
  }, [page]);

  useEffect(() => {
    fetchCategoryFromDatabase(page);
  }, [page]);

  const fetchCategoryFromDatabase = (page) => {
    fetch(`http://localhost:8000/category${page ? "?page=" + page : ""}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data.data);
        setLastPage(Math.floor(data.meta.total / 8) + 1);
      });
  };

  return (
    <div>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>

      <Header pathname={pathname} />

      <BodyContainer error={error} data={categoryData} />
      <PagesContainer error={error} queryPage={queryPage} last={lastPage} />
      <RecommendedMoviesContainer child={<RecommendedMovies />} />
      <Footer />
    </div>
  );
};

const RecommendedMoviesContainer = ({ child }) => (
  <div className="mt-20">{child}</div>
);

const PagesContainer = ({ error, queryPage, last }) => {
  return (
    <>
      {!error && (
        <Pages page={queryPage ? queryPage : 1} last={last} path={"category"} />
      )}
    </>
  );
};

const BodyContainer = ({ error, data }) => (
  <>
    {error ? (
      <Error_404 />
    ) : (
      <CategoryActressBody query={"genre"} data={data} />
    )}
  </>
);

export default category;
