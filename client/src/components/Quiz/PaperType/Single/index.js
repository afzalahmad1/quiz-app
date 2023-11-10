import React, { useEffect, useState } from "react";

const Single = ({allQuestions,flag,handleFlag,handleNext,handlePrev,handleSubmitAnswer,quesNo,paper,setStudentAnswer}) => {
    
    
  return (
    <div>
      <div className="question-paper">
        <h2 style={{ textAlign: "center" }}>Question No: {quesNo + 1}: (Question Type:{paper.type})</h2>
        <div>
          <p>{paper.question}</p>
        </div>
        <ol>
          <li>
            <input
              type="radio"
              id="a"
              name="option"
              className="radio-btn"
              value={paper.optionA}
              onChange={(e) => setStudentAnswer(e.target.value)}
            />
            <label htmlFor="a">{paper.optionA}</label>
          </li>
          <li>
            <input
              type="radio"
              id="b"
              name="option"
              className="radio-btn"
              value={paper.optionB}
              onChange={(e) => setStudentAnswer(e.target.value)}
            />
            <label htmlFor="b">{paper.optionB}</label>
          </li>
          <li>
            <input
              type="radio"
              id="c"
              name="option"
              className="radio-btn"
              value={paper.optionC}
              onChange={(e) => setStudentAnswer(e.target.value)}
            />
            <label htmlFor="c">{paper.optionC}</label>
          </li>
          <li>
            <input
              type="radio"
              id="d"
              name="option"
              value={paper.optionD}
              className="radio-btn"
              onChange={(e) => setStudentAnswer(e.target.value)}
            />
            <label htmlFor="d">{paper.optionD}</label>
          </li>
        </ol>

        <div className="paper-footer">
          {quesNo !== 0 && (
            <button className="btns" onClick={handlePrev}>
              Prev
            </button>
          )}
          {quesNo !== allQuestions.length - 1 && <button className="btns" disabled={flag} onClick={handleFlag}>
            Flag
          </button>}
          <button
            className="btns"
            id="check"
            disabled={flag}
            onClick={handleSubmitAnswer}
          >
            Check
          </button>
          {quesNo !== allQuestions.length - 1 && (
            <button className="btns" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
