import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FirstFrameQ } from "@/app/constants/text";

const QuestionWidget = () => {
  return (
    <div className="flex items-center w-full md:w-[99%] h-14 mb-1 mt-4 rounded-[16px] bg-[var(--White-Astuto-White,_#F8F9FC)] ">
      <RxAvatar size="18px" className="ml-2 mr-2" />
      <span className="text-[14px]">{FirstFrameQ[0].text}</span>
    </div>
  );
};

export default QuestionWidget;
