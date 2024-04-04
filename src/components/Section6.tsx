import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10 p-4 md:p-6 lg:p-10">
        <div>
          <p className="text-4xl font-bold mb-2 ml-6">Our Testimonials</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-around gap-10">
          <div className="flex w-full md:w-3/4 lg:w-1/3 bg-white rounded-lg flex-col gap-3  border border-gray-250 p-4 md:mr-7">
            <p>
              "RH Sir's NEET Test Series has been a game-changer for me! The comprehensive study material, daily
              discussions, and personalised feedback helped me stay on track with my preparation. I can confidently say
              that without this platform, achieving my dream of becoming a doctor would have been much harder. Thank
              you, RH Sir, for your guidance and support!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2 items-center">
                <div className="relative w-6 h-6 rounded">
                  <Image src={"/pranavbhat.png"} layout="fill" className="rounded" />
                </div>
                <p className="font-semibold">Pranav Bhat</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 lg:w-1/3 bg-white rounded-lg flex-col gap-3  border border-gray-250 p-4 md:mr-7">
            <p>
              "I can't thank RH Sir's NEET Test Series enough for helping me crack the NEET exam. The detailed
              explanations, peer learning community, and simulated exam environment truly mimicked the real test
              experience. It gave me the confidence to tackle any question that came my way. I highly recommend this
              test series to all NEET aspirants out there!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial2.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Laxman Hampiholi</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 lg:w-1/3 bg-white rounded-lg flex-col gap-3  border border-gray-250 p-4 md:mr-7">
            <p>
              "Enrolling in RH Sir's NEET Test Series was the best decision I made for my NEET preparation. The
              explanations in Kannada were incredibly helpful for me as a Karnataka student. The daily discussions and
              in-depth analysis of each question helped me understand concepts better. Thanks to RH Sir and the entire
              team for their unwavering support!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial3.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Disha</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 lg:w-1/3 bg-white rounded-lg flex-col gap-3  border border-gray-250 p-4 md:mr-7">
            <p>
              "I am immensely grateful to RH Sir's NEET Test Series for guiding me through my NEET journey. The
              affordable pricing combined with top-notch resources made it accessible for me to prepare thoroughly. The
              performance tracking feature helped me identify my weak areas and work on them diligently. I wouldn't have
              achieved my dream score without this platform!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial4.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Venkatesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
