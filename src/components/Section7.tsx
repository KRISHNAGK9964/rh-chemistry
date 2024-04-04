import { PlusIcon, CloseIcon } from "@/assets/icons";
import React, { useState } from "react";

type Props = {};

const Section7 = (props: Props) => {
  const [expanded1, setExpanded1] = useState<boolean>(false);
  const [expanded2, setExpanded2] = useState<boolean>(false);
  const [expanded3, setExpanded3] = useState<boolean>(false);
  const [expanded4, setExpanded4] = useState<boolean>(false);
  const [expanded5, setExpanded5] = useState<boolean>(false);

  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  const toggleExpand3 = () => {
    setExpanded3(!expanded3);
  };

  const toggleExpand4 = () => {
    setExpanded4(!expanded4);
  };

  const toggleExpand5 = () => {
    setExpanded5(!expanded5);
  };

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="flex max-w-screen-xl mx-auto flex-col gap-5 lg:flex-row">
        <div className="flex flex-col flex-1 px-4">
          <p className="text-4xl font-bold">
            Frequently <br /> asked Questions
          </p>
          <p>Still you have any questions? Contact our Team via contact.scaleyou@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div
            className={`border rounded-lg flex flex-col bg-gray-200 p-4 cursor-pointer ${
              expanded1 ? "bg-primaryColor text-black border-none" : ""
            }`}
            onClick={toggleExpand1}
          >
            <div className="flex items-center justify-between">
              <p>How do I access the NEET test papers?</p>
              {expanded1 ? <CloseIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </div>
            {expanded1 && (
              <div className="mt-4">
                <p>
                  Once you've enrolled in RH Sir's NEET Test Series, you'll gain access to our online platform where
                  you can download the test papers. For offline access, you can also request physical copies to be
                  provided.
                </p>
              </div>
            )}
          </div>
          <div
            className={`border rounded-lg flex flex-col bg-gray-200 p-4 cursor-pointer ${
              expanded2 ? "bg-primaryColor text-black border-none" : ""
            }`}
            onClick={toggleExpand2}
          >
            <div className="flex items-center justify-between">
              <p>Are the explanations provided in Kannada only?</p>
              {expanded2 ? <CloseIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </div>
            {expanded2 && (
              <div className="mt-4">
                <p>The explanations are provided in both English and Kannada languages.</p>
              </div>
            )}
          </div>
          <div
            className={`border rounded-lg flex flex-col bg-gray-200 p-4 cursor-pointer ${
              expanded3 ? "bg-primaryColor text-black border-none" : ""
            }`}
            onClick={toggleExpand3}
          >
            <div className="flex items-center justify-between">
              <p>How often are the test papers updated?</p>
              {expanded3 ? <CloseIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </div>
            {expanded3 && (
              <div className="mt-4">
                <p>The test papers are updated on a regular basis to ensure relevance and accuracy.</p>
              </div>
            )}
          </div>
          <div
            className={`border rounded-lg flex flex-col bg-gray-200 p-4 cursor-pointer ${
              expanded4 ? "bg-primaryColor text-black border-none" : ""
            }`}
            onClick={toggleExpand4}
          >
            <div className="flex items-center justify-between">
              <p>Can I discuss doubts with other students?</p>
              {expanded4 ? <CloseIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </div>
            {expanded4 && (
              <div className="mt-4">
                <p>Yes, you can participate in discussion forums to interact with other students and clarify doubts.</p>
              </div>
            )}
          </div>
          <div
            className={`border rounded-lg flex flex-col bg-gray-200 p-4 cursor-pointer ${
              expanded5 ? "bg-primaryColor text-black border-none" : ""
            }`}
            onClick={toggleExpand5}
          >
            <div className="flex items-center justify-between">
              <p>Will I receive feedback on my performance?</p>
              {expanded5 ? <CloseIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </div>
            {expanded5 && (
              <div className="mt-4">
                <p>Yes, you will receive feedback on your performance to help you improve.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
