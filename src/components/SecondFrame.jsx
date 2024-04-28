"use client";
import React, { useEffect, useRef, useState } from "react";
import QuestionWidget from "./common/QuestionWidget";
import ProcessingWidget from "./common/ProcessingWidget";
import QueryWidget from "./QueryWidget";

import IFrame from "./common/IFrame";
import {
  AccumulatedCostText,
  FirstFrameQ,
  IFRAME_SOURCE,
  ProductionAccountText,
  SQLData,
  SecondFrameQ,
  ThirdFrameQ,
} from "@/app/constants/text";
import WidgetFooter from "./common/WidgetFooter";
import PieC from "./common/PieChart";
import Satisfied from "./common/Satisfied";
import SavingAreas from "./SavingAreas";
import SankeyChart from "./common/SankeyChart";

const SQLBody = (
  <div className="flex flex-col h-[12rem] text-[#E2E9F3] text-sm p-4 rounded-[8px] bg-[#182330]">
    {SQLData.map((query) => {
      return <span className="text-sm font-normal leading-5">{query}</span>;
    })}
  </div>
);

const SecondFrame = () => {
  const [isSQLProcessing, setIsSQLProcessing] = useState(true);
  const [isPieProcessing, setIsPieProcessing] = useState(true);
  const [isEC2Processing, setEC2Processing] = useState(true);
  const [reduceEC2, setReduceEC2] = useState(false);
  const [whyIncreasing, setWhyIncreasing] = useState(false);
  // const [iframeReady, setIframeReady] = useState(false);

  setTimeout(() => {
    setIsSQLProcessing(false);
  }, 1000);

  return (
    <div className="flex flex-col w-full mb-16">
      <QuestionWidget text={FirstFrameQ[0].text} />
      {isSQLProcessing ? (
        <ProcessingWidget
          text="Generating SQL Query..."
          delay={2000}
          nextLoad={setIsPieProcessing}
        />
      ) : (
        // SQL Query Widget
        <QueryWidget
          keepOpen={false}
          title="Query"
          header={false}
          body={SQLBody}
          footer={<WidgetFooter copy rerun />}
        />
      )}

      {/* Pie Chart */}
      {!isPieProcessing && (
        <QueryWidget
          keepOpen={true}
          title="Pie Chart"
          header={<ProcessingWidget text={ProductionAccountText} />}
          body={<PieC />}
          footer={
            <WidgetFooter
              addToDashBoard
              exportFile
              mightWant
              questions={SecondFrameQ}
              onClickButton={setReduceEC2}
            />
          }
        />
      )}
      {reduceEC2 && isEC2Processing && (
        <ProcessingWidget
          text="Retrieving Data..."
          delay={2000}
          nextLoad={setEC2Processing}
        />
      )}
      {reduceEC2 && (
        <>
          <QuestionWidget text={SecondFrameQ[3].text} />
          <QueryWidget
            keepOpen={true}
            title="Top 2 saving areas"
            header={<ProcessingWidget text={SavingAreas} />}
            body={<SavingAreas />}
            footer={
              <WidgetFooter
                mightWant
                questions={ThirdFrameQ}
                onClickButton={setWhyIncreasing}
              />
            }
          />
        </>
      )}
      {whyIncreasing && (
        <>
          <QuestionWidget text={ThirdFrameQ[3].text} />
          <QueryWidget
            keepOpen={true}
            title="Dashboard"
            header={<ProcessingWidget text={AccumulatedCostText} />}
            body={<SankeyChart />}
            footer={<WidgetFooter addToDashBoard endPrototype mightWant />}
          />
        </>
      )}

      {/* SATISFIED */}
      <Satisfied />
    </div>
  );
};

export default SecondFrame;
