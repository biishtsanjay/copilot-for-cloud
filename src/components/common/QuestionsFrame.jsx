import React from "react";
import QuestionsButton from "./QuestionsButton";

const QuestionsFrame = ({ questions, onClickButton }) => {
  const handleClick = () => {
    setTimeout(() => {
      onClickButton(true);
    }, 1000);
    window.scrollTo({ top: window.scrollY + 300, behavior: "smooth" });
  };
  return (
    <div className="grid grid-cols-2 gap-3 ">
      {questions?.map((question, index) => {
        return (
          <QuestionsButton
            key={index}
            onClick={handleClick}
            question={question}
          />
        );
      })}
    </div>
  );
};

export default QuestionsFrame;
