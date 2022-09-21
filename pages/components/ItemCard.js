import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ data }) => {
  return (
    <Link href={`/detail?name=${data.slug}`}>
      <div
        id="item-card"
        className="bg-gray-400 bg-opacity-10 cursor-pointer group my-2 "
        title={data.title}
      >
        <Image
          src={data.image}
          alt="thumbnail"
          width={1620}
          height={1080}
          className="opacity-100 sm:opacity-90 group-hover:opacity-100"
        />
        <div className="text-xs sm:text-sm px-2 pb-1 truncate group-hover:text-white">
          {data.title}
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
