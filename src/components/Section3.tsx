import { LinkIcon } from "@/assets/icons";
import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <div className="">
      <div className="absolute right-0 w-fit">
        <Image src={"/Item1.png"} alt="" height={150} width={150} className="right-0 absolute" />
      </div>
      <div className="flex flex-col gap-10 py-10 bg-[rgb(250,250,251,1)]">
        <div>
          <p className="text-4xl font-bold mb-2 ml-11">Benefits</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center px-4 lg:px-10 md:px-6">
          <div className="flex w-[100%] rounded-lg lg:w-1/4 flex-col gap-3 border ml-auto md:ml-0  border-gray-250 p-3 md:mr-10 bg-white">
            <div className="text-5xl font-bold text-right ">01</div>
            <div>
              <p className="text-lg font-medium mb-1">Structured Preparation</p>
              <p>
                Our test series offers a well-organised study plan, ensuring systematic coverage of all NEET syllabus
                topics.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg lg:w-1/4 bg-white flex-col gap-3 border mr-auto  border-gray-250  p-4 md:mr-12">
            <div className="text-5xl font-bold text-right ">02</div>
            <div>
              <p className="text-lg font-medium mb-1">Real Exam Simulation</p>
              <p>
                Real Exam Simulation Experience the real NEET exam environment with our accurately simulated test
                papers, helping you build confidence for the actual exam day
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg lg:w-1/4 bg-white flex-col gap-3 border ml-auto md:ml-0  border-gray-250  p-4 md:mr-12">
            <div className="text-5xl font-bold text-right ">03</div>
            <div>
              <p className="text-lg font-medium mb-1">Performance Tracking</p>
              <p>
                Monitor your progress effectively with detailed performance analytics, identifying strengths and areas
                needing improvement.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg lg:w-1/4 bg-white flex-col gap-3 border mr-auto border-gray-250  p-4 md:mr-10">
            <div className="text-5xl font-bold text-right ">04</div>
            <div>
              <p className="text-lg font-medium mb-1">Time Management Skills</p>
              <p>
                Sharpen your time management skills by practicing with timed tests, enhancing your ability to answer
                questions efficiently within the exam timeframe.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg lg:w-1/4 bg-white flex-col gap-3 border ml-auto md:ml-0  border-gray-250  p-4 md:mr-12">
            <div className="text-5xl font-bold text-right ">05</div>
            <div>
              <p className="text-lg font-medium mb-1">Personalised Feedback</p>
              <p>
                Receive personalized feedback on your performance, highlighting areas where you excel and offering
                tailored suggestions for improvement.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg lg:w-1/4 bg-white flex-col gap-3 border mr-auto  border-gray-250  p-4 md:mr-12">
            <div className="text-5xl font-bold text-right ">06</div>
            <div>
              <p className="text-lg font-medium mb-1">Expert Guidance</p>
              <p>
                Expert Guidance Benefit from expert guidance and insights from experienced educators like RH Sir, who
                provide valuable tips and strategies for tackling the NEET exam effectively.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="p-3 border rounded-lg w-fit relative right-0">
                <LinkIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
