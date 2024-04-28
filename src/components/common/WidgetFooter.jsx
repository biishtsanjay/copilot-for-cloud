import React, { useEffect, useState } from "react";

import { TfiReload } from "react-icons/tfi";
import { IoCopyOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { MIGHT_KNOW_TEXT } from "@/app/constants/text";
import { useWidgetToggle } from "@/app/customHooks/useWidgetToggle";
import { IoIosArrowUp } from "react-icons/io";
import QuestionsFrame from "./QuestionsFrame";

const WidgetFooter = ({
  copy = false,
  rerun = false,
  addToDashBoard = false,
  exportFile = false,
  endPrototype = false,
  mightWant = false,
  questions,
  onClickButton,
}) => {
  const [isOpen, toggleWidget] = useWidgetToggle(false);
  const [afterDelay, setAfterDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAfterDelay(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-xs bg-[#F1F3F9] rounded-b-xl">
      <div className={`flex justify-between cursor-pointer`}>
        <span className="m-4 flex text-green-400">
          {copy && (
            <>
              <IoCopyOutline className="mr-1" />
              <p>Copy Query</p>
            </>
          )}
          {addToDashBoard && (
            <>
              <IoCopyOutline className="mr-1" />
              <p>Add To Dashboard</p>
            </>
          )}
        </span>
        <span className="m-4 flex">
          {rerun && (
            <>
              <p>Last run on 27 Apr, 2023</p>
              <span className="flex ml-4 text-green-400">
                <TfiReload className="mr-1" />
                <p>Re-run Query</p>
              </span>
            </>
          )}
          {exportFile && (
            <span className="flex ml-4 text-green-400">
              <CiExport size="16px" className="mr-1" />
              <p>Export</p>
            </span>
          )}
          {endPrototype && (
            <span className="flex ml-4 text-red-400 underline">
              <p>End Prototype</p>
            </span>
          )}
        </span>
      </div>
      {mightWant && afterDelay && (
        <>
          <div
            className="flex justify-between bg-[#F1F3F9] rounded-t-xl"
            onClick={toggleWidget}
          >
            <span className="m-4 whitespace-nowrap">{MIGHT_KNOW_TEXT}</span>
            <div className="h-[1px] w-[100%] bg-[#bcc1c8] mx-[8px] mt-[1.5rem]"></div>
            <IoIosArrowUp className="m-4" />
          </div>

          <div className="w-full ml-[2rem]">
            <QuestionsFrame
              questions={questions}
              onClickButton={onClickButton}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WidgetFooter;
