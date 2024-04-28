import React from "react";
import { savingDetail } from "@/app/constants/text";

const SavingAreas = () => {
  return (
    <div className="w-full bg-[#F8F9FC]">
      {savingDetail.map((item) => {
        return (
          <div className="border-[2px] p-4 rounded-[8px] border-green-400 m-4">
            <p className="text-[14px] font-bold">{item.title}</p>
            <p className="text-[14px]">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SavingAreas;
