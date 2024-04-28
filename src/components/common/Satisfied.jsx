"use client";
import React, { useState } from "react";
import { LiaThumbsDown, LiaThumbsUp } from "react-icons/lia";
const Satisfied = () => {
  const [rated, setRated] = useState(false);
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mb-[10rem] relative top-[30%]">
        {!rated ? (
          <>
            <p className="text-[#8F97A3] text-[12px] font-medium leading-[normal]s">
              Have the answers been satisfactory so far?
            </p>
            <LiaThumbsUp onClick={() => setRated((prev) => !prev)} />
            <LiaThumbsDown onClick={() => setRated((prev) => !prev)} />
          </>
        ) : (
          <p className="text-[#8F97A3] text-[12px] font-medium leading-[normal]s">
            Thanks for your feedback!
          </p>
        )}
      </div>
    </div>
  );
};

export default Satisfied;
