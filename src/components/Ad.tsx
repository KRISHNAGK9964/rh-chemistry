import { ArrowRightIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

type Props = {};

const Ad = (props: Props) => {
  const handleAdClick = () => {
    window.location.href = "https://www.courses.rhchemistry.online/learn";
  };

  return (
    <a href="https://www.courses.rhchemistry.online/learn" onClick={handleAdClick}>
      <div className="mx-2 md:mx-4 my-2 rounded-lg bg-[#911C82] line-clamp-1 text-nowrap flex justify-center items-center gap-4 p-2">
        <p className="text-white">Course offer 🌟 Sale Ends Soon, Get It Now</p>
        <ArrowRightIcon className="w-5 h-5 " />
      </div>
    </a>
  );
};

export default Ad;
