import { InfinityIcon } from "@/assets/icons";
import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="px-4 md:px-10 mb-14">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 lg:ml-11">
            <div className="cursor-pointer flex bg-white rounded-lg p-2 px-2 gap-2 items-center">
              <div className="w-12 h-12 relative">
                <Image src="/Logo.png" alt="" layout="fill" />
              </div>
              <p className="font-bold text-4xl">
                <span className="text-[#6B398D]">Unlock</span> Your Creative Potential
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-bold">
                <span className="font-semibold">with</span> NEET TEST Series
              </p>
              <p>Learn from Industry Expert and Enhance Your Skills</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.courses.rhchemistry.online/learn" target="_blank" rel="noopener noreferrer">
                <button type="button" className="p-2 px-4 bg-[#6B398D] text-white font-medium rounded-lg">
                  Explore Test Series
                </button>
              </a>
              <a href="https://www.courses.rhchemistry.online/learn" target="_blank" rel="noopener noreferrer">
                <button type="button" className="p-2 px-4 font-medium rounded-lg bg-white">
                  View Pricing
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:ml-11">
            <div className="flex p-4 bg-white gap-4 rounded-lg border border-[#C6C6C6]">
              <div className="">
                <p className="font-bold text-3xl">+7000</p>
                <p className="font-medium">Students Already Enrolled</p>
              </div>
              <div className="">
                <p className="font-bold text-3xl">30</p>
                <p className="font-medium">Students Already Enrolled</p>
              </div>
              <div className="flex flex-col">
                <InfinityIcon className="flex-1" />
                <p className="font-medium">Students Already Enrolled</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 min-w-[300px] md:min-w-[500px] max-w-[600px] h-[300px] md:h-[500px]">
          <Image src="/Banner.png" alt="" layout="fill" className="object-cover" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-[#F6EAFF] translate-y-1/2">
          <div className="relative h-28 w-28 rounded-full bg-[#F6EAFF]">
            <Image src={"/scroll.png"} alt="" layout="fill" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
