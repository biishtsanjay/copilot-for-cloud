import React from "react";
import QuestionsButton from "./QuestionsButton";

const QuestionsFrame = ({ questions, onClickButton }) => {
  return (
    <div className="grid grid-cols-2 gap-3 ">
      {questions?.map((question, index) => {
        return (
          <QuestionsButton
            key={index}
            onClick={onClickButton}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default QuestionsFrame;
