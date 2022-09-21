import React from "react";
import Image from "next/image";

const Error_404 = () => {
  return (
    <div className="mx-auto w-full sm:w-96 bg-[#f5f5f5] my-10">
      <Image
        src={require("../../public/images/404.png")}
        alt="404"
        width={1080}
        height={700}
      />
    </div>
  );
};

export default Error_404;
