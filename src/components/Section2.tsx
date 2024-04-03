import { Icon1, Icon2, Icon3 } from "@/assets/icons";
import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div className="px-10 py-5">
      <div className="flex lg:flex-row flex-col items-center gap-10">
        <div className="flex flex-col h-full  gap-10 flex-1">
          <p className="ml-11 text-sm text-gray-600">NEET</p> {/* Added text */}
          <p className="ml-11 font-bold text-4xl text-[#911C82]">
            Why Choose NEET Test Series
          </p>
          <div className="flex items-center gap-4 ml-11">
            <div className="rounded-full border bg-white p-4 shadow-md">
              <Icon1 className="w-6 h-6" />
            </div>
            <p className="ml-1 text-gray-700">
              <span className="font-bold text-base">
                30 Papers Online/Offline:
              </span>{" "}
              Practice makes perfect! With our extensive collection of 30
              papers, available both online and offline, you'll have ample
              opportunities to hone your skills and
            </p>
          </div>
          <div className="flex items-center gap-4 ml-11">
            <div className="rounded-full border bg-white p-4 shadow-md">
              <Icon2 className="w-6 h-6" />
            </div>

            <p className="ml-1 text-gray-700">
              <span className="font-bold text-base">
                Daily NEET Paper Discussion:
              </span>{" "}
              Stay ahead of the curve with our daily NEET paper discussions.
              Engage in insightful conversations, dissecting each question to
              understand its nuances and underlying concepts.
            </p>
          </div>
          <div className="flex items-center gap-4 ml-11">
            <div className="rounded-full border bg-white p-4 shadow-md">
              <Icon3 className="w-6 h-6" />
            </div>

            <p className="ml-1 text-gray-700">
              <span className="font-bold text-base">
                Explanations in Kannada:
              </span>{" "}
              Breaking down barriers, we offer explanations in Kannada, ensuring
              that language is never a hindrance in your learning journey.
            </p>
          </div>
        </div>
        <div className="p-4 flex-1 max-w-[380px] border bg-white border-gray-300 rounded-lg mr-12">
          <div className="relative w-full aspect-video">
            <Image
              className=""
              layout="fill"
              src={"/textbanner.png"}
              alt={""}
            />
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-lg">NEET Test Series</p>
            <p className="">⭐⭐⭐⭐⭐</p>
          </div>
          <p className="text-xl font-semibold text-gray-600">
            NEET Test Series: One Step Closer To The Goal
          </p>
          <p className="text-gray-500 py-2">
            NEET Test Series is your ultimate companion on the journey to
            success. Led by the esteemed educator
            <span className="font-bold"> Raghavendra Hegde</span>, this
            comprehensive test series is designed to equip you with the
            knowledge and skills needed to ace the NEET exam with confidence.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="https://www.courses.rhchemistry.online/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-[#334456] text-white p-2 px-5 rounded-lg"
              >
                Attempt Free Test
              </button>
            </a>
            <p className="text-sm text-gray-600">
              <span className="text-gray-800 font-bold">23450</span> Enrolled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
