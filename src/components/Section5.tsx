import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section5 = (props: Props) => {
  return (
    <div className="p-10">
      <div className="flex relative p-6 bg-[#6B398D] rounded-lg max-w-screen-md mx-auto">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-white font-bold text-4xl">Join Our Community!</p>
          <p className="text-white">
            Embark on your NEET preparation journey with R. H. Sir's NEET Test
            Series. Gain access to top-notch resources, expert guidance, and a
            supportive community dedicated to your success. Enroll now for just
            499/- and take the first step towards realizing your dream of
            becoming a medical professional.
          </p>
          <button type="button" className="rounded-lg p-2 px-5 w-fit bg-white">Join Whats App Group</button>
        </div>
        <div className="flex-1 -m-6 hidden lg:block">
            <div className="relative h-full overflow-visible">
                <img src={"/Banner2.png"} alt="" className="object-cover w-full h-full overflow-visible"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
