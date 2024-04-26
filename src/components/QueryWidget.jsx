"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import IFrame from "./common/IFrame";
import { IFRAME_SOURCE } from "@/app/constants/text";
import { TfiReload } from "react-icons/tfi";
import { useWidgetToggle } from "@/app/utils/useWidgetToggle";
import { IoCopyOutline } from "react-icons/io5";

const QueryWidget = ({ header, body, footer }) => {
  const [isOpen, toggleWidget] = useWidgetToggle(false);

  useEffect(() => {
    const timerOpen = setTimeout(() => {
      toggleWidget(true);
    }, 3000);
    const timerClose = setTimeout(() => {
      toggleWidget(false);
    }, 6000);
    return () => {
      clearTimeout(timerOpen);
      clearTimeout(timerClose);
    };
  }, []);

  return (
    <div className=" items-center w-full md:w-[99%]  h-14 mb-1 mt-4  flex-shrink-0 rounded-xl bg-[#F1F3F9]">
      <div
        className={`flex justify-between bg-[#F1F3F9]  rounded-t-xl  ${
          !isOpen && "rounded-b-xl"
        }`}
        onClick={toggleWidget}
      >
        <span className="m-4">Query</span>
        {isOpen ? (
          <IoIosArrowUp className="m-4" />
        ) : (
          <IoIosArrowDown className="m-4" />
        )}
      </div>
      {isOpen && (
        <div className="bg-[#F1F3F9]">
          <div className="mx-4 ">
            <IFrame src={IFRAME_SOURCE} />
          </div>
          <div
            className={`flex justify-between text-xs bg-[#F1F3F9] rounded-b-xl`}
          >
            <span className="m-4 flex">
              <IoCopyOutline className="mr-1" />
              <p>Copy Query</p>
            </span>
            <span className="m-4 flex">
              <p>Last run on 27 Apr, 2023</p>
              <span className="flex ml-4 text-green-400">
                <TfiReload className="mr-1" />
                <p>Re-run Query</p>
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryWidget;
