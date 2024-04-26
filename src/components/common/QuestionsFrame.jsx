import React from "react";
import QuestionsButton from "./QuestionsButton";

const QuestionsFrame = ({ questions, onClick }) => {
  return (
    <div className="grid grid-cols-2 gap-3 ">
      {questions?.map((question, index) => {
        return (
          <QuestionsButton key={index} onClick={onClick} question={question} />
        );
      })}
    </div>
  );
};

export default QuestionsFrame;
