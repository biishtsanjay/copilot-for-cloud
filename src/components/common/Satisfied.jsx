import React from "react";
import { LiaThumbsDown, LiaThumbsUp } from "react-icons/lia";

const Satisfied = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mb-4 relative top-[30%]">
        <p className="text-[#8F97A3] text-[12px] font-medium leading-[normal]s">
          Have the answers been satisfactory so far?
        </p>
        <LiaThumbsUp />
        <LiaThumbsDown />
      </div>
    </div>
  );
};

export default Satisfied;
