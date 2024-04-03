import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10 p-10">
        <div>
          <p className="text-4xl font-bold mb-2 ml-6">Our Testimonials</p>
          <p className="ml-6">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
            dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex w-3/4 lg:w-1/3 flex-col gap-3 p-6 border  border-gray-250 p-4 mr-14">
            <p>
              "R. H. Sir's NEET Test Series has been a game-changer for me! The comprehensive study material, daily
              discussions, and personalised feedback helped me stay on track with my preparation. I can confidently say
              that without this platform, achieving my dream of becoming a doctor would have been much harder. Thank
              you, R. H. Sir, for your guidance and support!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial1.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Sneha Patil</p>
              </div>
              <button type="button" className="bg-gray-200 rounded-lg p-2 px-4">
                Read Full Story
              </button>
            </div>
          </div>
          <div className="flex w-3/4 lg:w-1/3 flex-col gap-3 p-6 border  border-gray-250 p-4">
            <p>
              "I can't thank R. H. Sir's NEET Test Series enough for helping me crack the NEET exam. The detailed
              explanations, peer learning community, and simulated exam environment truly mimicked the real test
              experience. It gave me the confidence to tackle any question that came my way. I highly recommend this
              test series to all NEET aspirants out there!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial2.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Rahul Deshmukh</p>
              </div>
              <button type="button" className="bg-gray-200 rounded-lg p-2 px-4">
                Read Full Story
              </button>
            </div>
          </div>
          <div className="flex w-3/4 lg:w-1/3 flex-col gap-3 p-6 border  border-gray-250 p-4 mr-14">
            <p>
              "Enrolling in R. H. Sir's NEET Test Series was the best decision I made for my NEET preparation. The
              explanations in Kannada were incredibly helpful for me as a Karnataka student. The daily discussions and
              in-depth analysis of each question helped me understand concepts better. Thanks to R. H. Sir and the
              entire team for their unwavering support!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial3.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Priya sharma</p>
              </div>
              <button type="button" className="bg-gray-200 rounded-lg p-2 px-4">
                Read Full Story
              </button>
            </div>
          </div>
          <div className="flex w-3/4 lg:w-1/3  flex-col gap-3 p-6 border  border-gray-250 p-4">
            <p>
              "I am immensely grateful to R. H. Sir's NEET Test Series for guiding me through my NEET journey. The
              affordable pricing combined with top-notch resources made it accessible for me to prepare thoroughly. The
              performance tracking feature helped me identify my weak areas and work on them diligently. I wouldn't have
              achieved my dream score without this platform!"
            </p>
            <div className="flex justify-between">
              <div className="flex w-fit gap-2">
                <div className="relative w-6 h-6">
                  <Image src={"/Testimonial4.png"} layout="fill" className="" />
                </div>
                <p className="font-semibold">Amit Gupta</p>
              </div>
              <button type="button" className="bg-gray-200 rounded-lg p-2 px-4">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
