import { Whatsapp } from "@/assets/icons";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Section5 = (props: Props) => {
  return (
    <div className="p-10">
      <div className="flex relative p-6 bg-[#6B398D] rounded-lg max-w-screen-md mx-auto">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-white font-bold text-4xl">Join Our Community!</p>
          <p className="text-white">
            Embark on your NEET preparation journey with RH Sir's NEET Test
            Series. Gain access to top-notch resources, expert guidance, and a
            supportive community dedicated to your success. Enroll now for just
            499/- and take the first step towards realizing your dream of
            becoming a medical professional.
          </p>
          <Link href={"https://chat.whatsapp.com/FRGIXOY3p9SBzbqG2P9jQR"} type="button" className="rounded-lg p-2 px-5 w-fit bg-white"><Whatsapp className="w-6 h-6 inline-flex mr-2" />Join WhatsApp Group </Link>
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
