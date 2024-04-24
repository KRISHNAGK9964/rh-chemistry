import { BulbIcon, Group, InfinityIcon, Lines, TLines } from "@/assets/icons";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [counter, setCounter] = useState<number>(1028);

  // useEffect(() => {
  //   const fetchCounter = async () => {
  //     try {
  //       const response = await fetch("/api/counter");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch counter");
  //       }
  //       const data = await response.json();
  //       setCounter(data.counter);
  //     } catch (error) {
  //       console.error("Error fetching counter:", error);
  //     }
  //   };

  //   fetchCounter();

  //   const intervalId = setInterval(fetchCounter, 35 * 60 * 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the counter by a random value between 2 and 3
      setCounter(
        (prevCounter) => prevCounter + Math.floor(Math.random() * 2) + 2
      );
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="px-4 md:px-10 mb-14">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
        <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 lg:ml-11">
              <div className="cursor-pointer flex bg-white rounded-lg p-2 px-2 gap-2 items-center">
                <div className="g:w-12 lg:h-12 relative">
                  <Image src="/Logo.png" alt="logo" layout="fill" />
                </div>
                <p className="text-2xl md:text-3xl font-bold lg:text-4xl">
                  <span className="text-[#6B398D]">Unlock</span> Your Creative
                  Potential
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold">
                  <span className="font-semibold">with</span> NEET TEST Series
                </p>
                <p>Learn from Industry Expert and Enhance Your Skills</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.courses.rhchemistry.online/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="p-2 shadow px-4 bg-[#6B398D] text-white font-medium rounded-lg"
                  >
                    Explore Test Series
                  </button>
                </a>
                <a
                  href="https://www.courses.rhchemistry.online/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="p-2 px-4 shadow font-medium rounded-lg bg-white"
                  >
                    Try Free Test series
                  </button>
                </a>
              </div>
            </div>
            <div className="flex z-10 flex-col gap-4 lg:ml-11">
              <div className="flex p-4 bg-white gap-4 rounded-lg border border-[#C6C6C6]">
                <div className="">
                  <p className="font-semibold lg:font-bold text-3xl">+1000</p>
                  <p className="font-normal lg:font-medium">
                    Students Already Enrolled
                  </p>
                </div>
                <div className="">
                  <p className="font-semibold lg:font-bold text-3xl">30</p>
                  <p className="font-normal lg:font-medium">NEET Mock Papers</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold lg:font-bold text-3xl scale-150 translate-x-1/4">
                    ∞
                  </p>
                  <p className="font-normal lg:font-medium">Revisions</p>
                </div>
              </div>
            </div>
            <div className="flex z-10 flex-col gap-4 lg:ml-11">
              <div className="flex p-4 items-center justify-center bg-white gap-4 rounded-lg border border-red-500">
                <p className="font-normal text-xl lg:font-medium text-red-500">
                  Live Counter of People who have taken tests!
                </p>
                <p className="font-semibold lg:font-bold text-3xl animate-bounce">
                  {counter}
                </p>
              </div>
            </div>
          </div>
          <div className="z-10 w-full flex items-center justify-center pt-12 lg:ml-40">
            <img src="/Banner.png" alt="banner" className="object-cover" />
          </div>
        </div>
        <Lines className="hidden lg:block absolute right-0" />
        <BulbIcon className="hidden lg:block absolute top-1/3 left-1/2 opacity-50" />
        <TLines className="hidden lg:block absolute top-44 left-14" />
        <Group className="hidden lg:block absolute bottom-28 " />
      </div>
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-[#F6EAFF] translate-y-1/2">
          <div className="relative h-28 w-28 rounded-full bg-[#F6EAFF]">
            <Image
              src={"/scroll.png"}
              alt="scroll button"
              layout="fill"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
