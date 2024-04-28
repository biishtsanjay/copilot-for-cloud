"use client";
import React, { useEffect, useState } from "react";
import QuestionWidget from "./common/QuestionWidget";
import ProcessingWidget from "./common/ProcessingWidget";
import QueryWidget from "./QueryWidget";

import IFrame from "./common/IFrame";
import { FirstFrameQ, IFRAME_SOURCE, SecondFrameQ } from "@/app/constants/text";
import WidgetFooter from "./common/WidgetFooter";
import PieC from "./common/PieChart";
import Satisfied from "./common/Satisfied";

const SecondFrame = () => {
  const [isSQLProcessing, setIsSQLProcessing] = useState(true);
  const [isPieProcessing, setIsPieProcessing] = useState(true);
  const [isEC2Processing, setEC2Processing] = useState(true);
  const [reduceEC2, setReduceEC2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSQLProcessing(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full mb-16">
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
          height="22rem"
          title="Query"
          header={false}
          // body={<IFrame src={IFRAME_SOURCE} />}
          body={
            <div style={{ backgroundColor: "grey", height: "15rem" }}>
              'HELLOOOOO'
            </div>
          }
          footer={<WidgetFooter copy rerun />}
        />
      )}

      {/* Pie Chart */}
      {!isPieProcessing && (
        <QueryWidget
          height="40rem"
          title="Pie Chart"
          header={
            <ProcessingWidget text="Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services;" />
          }
          body={<PieC />}
          footer={
            <WidgetFooter
              addToDashBoard
              exportFile
              mightWant
              questions={SecondFrameQ}
              onClickButton={() => setReduceEC2((prev) => !prev)}
            />
          }
        />
      )}
      {isEC2Processing && (
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
            height="40rem"
            title="Top 2 saving areas"
            header={
              <ProcessingWidget
                text={`You can save $2500 per month overall in EC2 costs. Click here to access a detailed report.<br/> Here are your top 2 saving areas:`}
              />
            }
            body={<SavingAreas />}
            footer={
              <WidgetFooter
                addToDashBoard
                exportFile
                mightWant
                questions={SecondFrameQ}
                onClickButton={() => setReduceEC2((prev) => !prev)}
              />
            }
            mightWant
          />
        </>
      )}
      {/* SATISFIED */}
      <Satisfied />
    </div>
  );
};

export default SecondFrame;
