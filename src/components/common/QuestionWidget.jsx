import React from "react";
import { RxAvatar } from "react-icons/rx";

const QuestionWidget = ({ text }) => {
  return (
    <div className="flex items-center w-full md:w-[99%] h-14 mb-1 mt-4 rounded-[16px] bg-[#E3E9F3] ">
      <RxAvatar size="18px" className="ml-2 mr-2" />
      <span className="text-[14px]">{text}</span>
    </div>
  );
};

export default QuestionWidget;
