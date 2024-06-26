"use client";
import React from "react";
import QuestionsFrame from "./common/QuestionsFrame";
import { FirstFrameQ } from "@/app/constants/text";
const FirstFrame = ({ showSecondStep }) => {
  return (
    <div>
      <QuestionsFrame questions={FirstFrameQ} onClickButton={showSecondStep} />
    </div>
  );
};

export default FirstFrame;
