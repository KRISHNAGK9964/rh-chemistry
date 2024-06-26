import Image from "next/legacy/image";
import React, { useState } from "react";
import Link from "next/link";

type Props = {
  handleContactBtnClick: () => void;
};

const Header = ({ handleContactBtnClick }: Props) => {
  const [activeButton, setActiveButton] = useState<string>("login");

  const handleLoginClick = () => {
    setActiveButton("login");
    window.location.href = "https://www.courses.rhchemistry.online/learn";
  };

  const handleSignUpClick = () => {
    setActiveButton("signup");
    window.location.href = "https://www.courses.rhchemistry.online/learn";
  };

  return (
    <div className="p-2 lg:p-4 lg:px-10 flex w-full overflow-hidden flex-col md:flex-row gap-2">
      <div className="flex items-center">
        <div className="cursor-pointer flex gap-2 items-center ">
          <div className="w-10 h-10 rounded-lg overflow-hidden lg:w-12 lg:h-12 relative lg:ml-14">
            <Image src="/Logo.png" alt="logo" layout="fill" />
          </div>
          <p className="hidden lg:block font-bold text-lg ml-17 mr-2">
            RH Chemistry
          </p>
        </div>
        <div className="ml-auto md:ml-0 flex justify-between items-center">
          <a
            href="https://www.courses.rhchemistry.online/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cursor-pointer p-2 lg:px-4 font-medium hover:bg-[#F1F1F3] hover:border-black rounded-lg">
              Courses
            </p>
          </a>
          {/* <p className="cursor-pointer p-2 lg:px-4 font-medium hover:bg-[#F1F1F3] rounded-lg">Home</p> */}
          {/* <p className="cursor-pointer p-2 lg:px-4 font-medium hover:bg-[#F1F1F3] rounded-lg">About Us</p> */}
          <a
            href="https://www.courses.rhchemistry.online/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cursor-pointer p-2 lg:px-4 font-medium hover:bg-[#F1F1F3] rounded-lg">
              Pricing
            </p>
          </a>
          <p
            onClick={handleContactBtnClick}
            className="cursor-pointer p-2 lg:px-4 font-medium hover:bg-[#F1F1F3] rounded-lg"
          >
            Contact
          </p>
        </div>
      </div>
      <a
        href="https://www.courses.rhchemistry.online/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="p-2 shadow bg-[#6B398D] text-white font-medium rounded-lg w-full"
        >
          🌟 Free Webinar! 🌟
        </button>
      </a>
      {/* <div className="flex space-x-4 border justify-between">

          <button
            type="button"
            className={`p-2 px-4 rounded-lg font-medium ${activeButton === "login" ? "text-white bg-[#6B398D]" : ""}`}
            onClick={handleLoginClick}
          >
            Sign Up
          </button>

          <button
            type="button"
            className={`p-2 px-4 rounded-lg font-medium mr-12 ${
              activeButton === "signup" ? "text-white bg-[#6B398D]" : ""
            }`}
            onClick={handleSignUpClick}
          >
            Login
          </button>
      </div> */}
    </div>
  );
};

export default Header;
