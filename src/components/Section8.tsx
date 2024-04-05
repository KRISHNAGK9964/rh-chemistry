import {
  FacebookIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/assets/icons";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

type Props = {
};

const Section8 = ({}: Props) => {
  return (
    <div className="p-4 md:p-6 lg:p-10 border-t-2 pb-4">
      <div className="flex justify-between gap-2 flex-col lg:flex-row ">
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:flex-col lg:gap-2">
          <div className="cursor-pointer flex bg-white rounded-lg p-2 px-4 gap-2 items-center">
            <div className="w-6 h-6 md:w-10 md:h-10 relative">
              <Image src="/Logo.png" alt="" layout="fill" />
            </div>
            <p className="">RH Chemistry</p>
          </div>
          <div className="cursor-pointer flex bg-white rounded-lg p-2 px-4 gap-2 items-center">
            <MailIcon className="w-5 h-5" />
            <p className="">rlhkchem6@gmail.com</p>
          </div>
          <div className="cursor-pointer flex bg-white rounded-lg p-2 px-4 gap-2 items-center">
            <LocationIcon className="h-5 w-5" />
            <p className="">Somewhere in the Chemistryverse</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-2 items-center md:items-start md:flex-row md:gap-4 lg:flex-col lg:gap-2">
          <p className="font-semibold">Home</p>
          <a
            href="https://www.courses.rhchemistry.online/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="hover:underline">NEET Test Series</p>
          </a>
          <p>Benefits</p>
          <p>Our Testimonials</p>
          <p>Our FAQ</p>
        </div>
        <div className="flex flex-col gap-2 pl-2 items-center md:items-start md:flex-row md:gap-4 lg:flex-col lg:gap-2">
          <p className="font-semibold">Policies</p>
          <Link href="/privacy-policy">
            <p className="hover:underline">Privacy Policy</p>
          </Link>
          <Link href="/refund-policy">
            <p className="hover:underline">Refund Policy</p>
          </Link>
          <Link href="/terms-and-conditions">
            <p className="hover:underline">Terms and Conditions</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2 pl-2 items-center md:items-start md:flex-row md:gap-4 lg:flex-col lg:gap-2">
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
        © 2024 RH Chemistry Test Series, A product of{" "}
        <strong className="font-bold">Scaleyou Innovations LLP</strong>. All
        rights reserved.
      </p>
    </div>
  );
};

export default Section8;
