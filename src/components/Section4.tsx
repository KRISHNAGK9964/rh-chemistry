import { CheckIcon } from "@/assets/icons";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Section4 = (props: Props) => {
  return (
    <div className="">
      <div className="absolute w-fit">
        <Image src={"/Item2.png"} alt="" height={150} width={150} className="right-0 absolute" />
      </div>
      <div className="flex flex-col bg-white gap-10 p-10 mx-10 border">
        <div className="px-10">
          <p className="text-4xl font-bold mb-2 ml-12">Our Pricing</p>
          <p className="ml-4 md:ml-12 md:mr-8">
            Unlock your path to NEET success with RH Sir's NEET Test Series at an unbeatable value. Take advantage of
            our affordable pricing and embark on a journey of learning and growth with us. Join today and experience the
            difference firsthand!
          </p>
        </div>
        <div>
          <div className="">
            <Link href={"https://www.courses.rhchemistry.online/learn"}>
              <p className="bg-[#6B398D] text-center p-2 text-white rounded-lg mb-4">Pro Plan</p>
            </Link>

            <p className="text-5xl font-bold text-center">₹499</p>
          </div>
          <div className="">
            <p className="text-center mt-12">Available Features</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg">
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-8 flex-shrink-0" />
                  <p className="flex-1">Access to 30 online/offline NEET test papers</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Daily NEET paper discussions</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Detailed explanations for each question</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Explanations provided in Kannada</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Comprehensive coverage of Biology, Physics and Chemistry</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Tailored for Karnataka students</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Personalized performance tracking</p>
                </div>
              </div>
              <div className="p-4 rounded-lg">
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="flex-1">Expert guidance from RH Sir</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Flexible access anytime, anywhere</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Peer learning through community interaction</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Regularly updated content to reflect NEET exam trends</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">In-depth analysis of each question</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">High-quality study material curated by experts</p>
                </div>
                <div className="flex border rounded-lg p-2 gap-4">
                  <CheckIcon className="h-6 w-6 flex-shrink-0" />
                  <p className="">Stress-reducing practice in simulated exam environment</p>
                </div>
              </div>
            </div>
          </div>
          <Link href={"https://www.courses.rhchemistry.online/learn"}>
            <p className="bg-[#6B398D] text-center p-2 text-white rounded-lg mb-4">Get Started</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section4;
