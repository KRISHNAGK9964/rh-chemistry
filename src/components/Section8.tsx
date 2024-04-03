import {
  FacebookIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/assets/icons";
import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section8 = (props: Props) => {
  return (
    <div className="p-10 border-t pb-4">
      <div className="flex justify-between flex-col lg:flex-row ">
        <div className="flex flex-col gap-2">
          <div className="cursor-pointer flex bg-white rounded-lg  p-2 px-4 gap-2 items-center">
            <div className="w-10 h-10 relative">
              <Image src="/Logo.png" alt="" layout="fill" />
            </div>
            <p className="">RH Chemistry</p>
          </div>
          <div className="cursor-pointer flex bg-white rounded-lg  p-2 px-4 gap-2 items-center">
            <MailIcon className="w-5 h-5" />
            <p className="">contact.scaleyou@gmail.com</p>
          </div>
          <div className="cursor-pointer flex bg-white rounded-lg  p-2 px-4 gap-2 items-center">
            <LocationIcon className="h-5 w-5" />
            <p className="">Somewhere in the Chemistryverse</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-4">
          <p className="font-medium">Home</p>
          <a
            href="https://www.courses.rhchemistry.online/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="hover:underline">NEET Test Series</p>
          </a>
          <p> Benefits</p>
          <p>Our Testimonials</p>
          <p>Our FAQ</p>
        </div>
        <div className="flex flex-col gap-2 pl-4">
          <p className="font-semibold">Social Profiles</p>
          <div className="flex gap-2">
            <div className="rounded-lg p-2 bg-gray-200">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <div className="rounded-lg p-2 bg-gray-200">
              <TwitterIcon className="w-5 h-5" />
            </div>
            <div className="rounded-lg p-2 bg-gray-200">
              <LinkedInIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <p className="p-4 text-center font-medium text-gray-500">
        © 2023 RH Chemsitry, A product of{" "}
        <strong className="font-bold">Scaleyou Innovations LLP</strong>. All
        rights reserved.
      </p>
    </div>
  );
};

export default Section8;
