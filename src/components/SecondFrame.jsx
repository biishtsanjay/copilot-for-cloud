"use client";
import React, { useEffect, useState } from "react";
import QuestionWidget from "./common/QuestionWidget";
import ProcessingWidget from "./common/ProcessingWidget";
import QueryWidget from "./QueryWidget";
import PieChartFrame from "./PieChartFrame";
const SecondFrame = () => {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full">
      <QuestionWidget />
      {isProcessing ? (
        <ProcessingWidget text="Generating SQL Query..." />
      ) : (
        <QueryWidget header={true} body={true} footer={true} />
      )}
      <PieChartFrame />
    </div>
  );
};

export default SecondFrame;
