"use client";
import React, { useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import IFrame from "./common/IFrame";
import { IFRAME_SOURCE } from "@/app/constants/text";
import { useWidgetToggle } from "@/app/utils/useWidgetToggle";
import WidgetFooter from "./common/WidgetFooter";

const QueryWidget = ({ header, body, title, footer, height = "22rem" }) => {
  const [isOpen, toggleWidget] = useWidgetToggle(false);

  // useEffect(() => {
  //   const timerOpen = setTimeout(() => {
  //     toggleWidget(true);
  //   }, 3000);
  //   const timerClose = setTimeout(() => {
  //     toggleWidget(false);
  //   }, 6000);
  //   return () => {
  //     clearTimeout(timerOpen);
  //     clearTimeout(timerClose);
  //   };
  // }, []);

  return (
    // ${isOpen && "h-[22rem]"}
    <div
      className={`items-center w-full md:w-[99%]  h-14 mb-1 mt-4  flex-shrink-0 rounded-xl bg-[#F8F9FC] 
      `}
      style={{ height: isOpen && height }}
    >
      {header}
      {body && (
        <>
          <div
            className={`flex justify-between bg-[#F1F3F9]  rounded-t-xl  ${
              !isOpen && "rounded-b-xl"
            }`}
            onClick={toggleWidget}
          >
            <span className="m-4 whitespace-nowrap">{title}</span>
            <div className="h-[1px] w-[100%] bg-[#bcc1c8] mx-[8px] mt-[1.5rem]"></div>
            {isOpen ? (
              <IoIosArrowUp className="m-4" />
            ) : (
              <IoIosArrowDown className="m-4" />
            )}
          </div>
          {isOpen && (
            <div className="bg-[#F1F3F9]">
              <div className="mx-4 ">{body}</div>
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QueryWidget;
