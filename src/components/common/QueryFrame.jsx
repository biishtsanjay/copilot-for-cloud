"use client";

import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { IoCodeSlashOutline } from "react-icons/io5";

const QueryFrame = ({ query }) => {
  const [ques, setQues] = useState(query);
  return (
    <div className="flex items-center w-full md:w-[99%]  h-14 mb-1 mt-4  flex-shrink-0 rounded-[16px]  bg-[var(--White-Astuto-White,_#F8F9FC)] [box-shadow:0px_0px_24px_0px_rgba(5,_5,_5,_0.15)]">
      <input
        placeholder="Start typing your query here..."
        className="w-full h-14 pl-6 outline-[none] rounded-2xl bg-[var(--White-Astuto-White,_#F8F9FC)] outline-0 "
        type="text"
        onChange={(e) => setQues(e.target.value)}
        value={ques}
        disabled={false}
      />
      <IoCodeSlashOutline size="20" className="mr-4" />
      <LuSendHorizonal size="20" className="mr-4" />
    </div>
  );
};

export default QueryFrame;
