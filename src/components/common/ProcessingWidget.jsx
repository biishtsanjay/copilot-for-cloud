"use client";
import React, { useState } from "react";
import { IoIosCloudy } from "react-icons/io";

const ProcessingWidget = ({ text, delay = 2000, nextLoad = () => {} }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
    nextLoad(false);
  }, delay);

  return (
    <div className="flex justify-between  items-center w-full h-14 mb-4 mt-4  flex-shrink-0 rounded-[16px] bg-[#F1F3F9] text-[14px]">
      <div className="flex items-center">
        <IoIosCloudy size="20px" className="ml-4 mr-4" />
        <span className="w-[90%]">{text}</span>
      </div>
      {loading && <div className="loader"></div>}
    </div>
  );
};

export default ProcessingWidget;
