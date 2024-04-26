import React from "react";
import { IoIosCloudy } from "react-icons/io";

const ProcessingWidget = ({ text }) => {
  return (
    <div className="flex items-center w-full md:w-[99%]  h-14 mb-1 mt-4  flex-shrink-0 rounded-[16px] bg-[#F1F3F9]">
      <IoIosCloudy size="20px" className="ml-4 mr-4" />
      <span>{text}</span>
    </div>
  );
};

export default ProcessingWidget;
