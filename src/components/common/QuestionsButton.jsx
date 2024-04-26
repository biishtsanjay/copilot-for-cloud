import React from "react";

const QuestionsButton = ({ onClick, question }) => {
  return (
    <button
      className={`flex w-[392px] h-[46px] mr-[10px] mb-[10px]  px-[18px] py-[10px] items-center  border-black rounded-[16px] border-[1px] border-[solid] border-[var(--Grey-G4,#BCC1C8)] ${
        question.disabled ? "bg-[#F1F3F9]" : "bg-[rgba(255,_255,_255,_0.80)]"
      }`}
      onClick={onClick}
      disabled={question.disabled}
    >
      <span className="text-[12px] text-[#373C43] font-normal text-[#777]">
        {question.text}
      </span>
    </button>
  );
};

export default QuestionsButton;
