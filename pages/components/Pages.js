import Link from "next/link";
import React, { useEffect, useState } from "react";

const Pages = ({ page, path, last, queryName, queryValue }) => {
  const [curPage, setCurrentPage] = useState();
  useEffect(() => {
    if (last == 1) {
      setCurrentPage(page);
      return;
    }

    if (last == page) {
      setCurrentPage(page - 1);
    } else {
      setCurrentPage(page);
    }
  }, [page, last]);
  return (
    <div className="max-w-5xl mx-auto my-5 h-16 flex justify-center items-center">
      <div className="sm:w-96 w-80 h-14 bg-yellow-600 flex text-black font-medium text-sm sm:text-lg">
        <Link
          href={`/${path}?page=1${
            queryValue ? `&${queryName}=${queryValue}` : ""
          }`}
        >
          <div
            className="flex-1 border-r-2 border-white border-opacity-10 flex justify-center 
          items-center cursor-pointer hover:bg-black hover:text-white"
          >
            First
          </div>
        </Link>

        <Link
          href={`/${path}?page=${curPage == 1 ? curPage : curPage - 1}${
            queryValue ? `&${queryName}=${queryValue}` : ""
          }`}
        >
          <div
            className="flex-1 border-r-2 border-white border-opacity-10 flex justify-center 
          items-center cursor-pointer hover:bg-black hover:text-white "
          >
            {curPage == 1 ? curPage : curPage - 1}
          </div>
        </Link>

        {last != 1 && (
          <Link
            href={`/${path}?page=${curPage == 1 ? curPage + 1 : curPage}${
              queryValue ? `&${queryName}=${queryValue}` : ""
            }`}
          >
            <div
              className="flex-1 border-r-2 border-white border-opacity-10 flex justify-center 
          items-center cursor-pointer hover:bg-black hover:text-white"
            >
              {curPage == 1 ? curPage + 1 : curPage}
            </div>
          </Link>
        )}

        {last != 1 && (
          <Link
            href={`/${path}?page=${curPage == 1 ? curPage + 2 : curPage + 1}${
              queryValue ? `&${queryName}=${queryValue}` : ""
            }`}
          >
            <div
              className="flex-1 border-r-2 border-white border-opacity-10 flex justify-center 
         items-center cursor-pointer hover:bg-black hover:text-white"
            >
              {curPage == 1 ? curPage + 2 : curPage + 1}
            </div>
          </Link>
        )}

        <Link
          href={`/${path}?page=${last}${
            queryValue ? `&${queryName}=${queryValue}` : ""
          }`}
        >
          <div className="flex-1 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white">
            Last
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pages;
