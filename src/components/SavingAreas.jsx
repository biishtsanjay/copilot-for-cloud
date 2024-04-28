import React from "react";
import { savingDetail } from "@/app/constants/text";

const SavingAreas = () => {
  return (
    <div className="w-full bg-[#F8F9FC]">
      {savingDetail.map((item) => {
        return (
          <>
            <p className="text-[14px] font-bold">{item.title}</p>
            <p className="text-[14px]">{item.desc}</p>
          </>
        );
      })}
      <div></div>
    </div>
  );
};

export default SavingAreas;
