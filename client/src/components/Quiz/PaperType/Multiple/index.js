import React, { useEffect, useState } from 'react'

const MultipleQuestion = ({allQuestions,flag,handleFlag,handleNext,handleCheckBoxChange,handlePrev,handleSubmitAnswer,quesNo,paper}) => {
    

      


    return (
    <div>
        {/* {console.log(studentMultipleAnswer)} */}
      <div className="question-paper">
        <h2 style={{ textAlign: "center" }}>Question No: {quesNo + 1}: (Question Type:{paper.type})</h2>
        <div>
          <p>{paper.question}</p>
        </div>
        <ol>
          <li>
            <input
              type="checkbox"
              id="a"
            //   name="option"
              className="radio-btn"
              value={paper.optionA}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="a">{paper.optionA}</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="b"
            //   name="option"
              className="radio-btn"
              value={paper.optionB}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="b">{paper.optionB}</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="c"
            //   name="option"
              className="radio-btn"
              value={paper.optionC}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="c">{paper.optionC}</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="d"
            //   name="option"
              value={paper.optionD}
              className="radio-btn"
              onChange={handleCheckBoxChange}
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
  )
}

export default MultipleQuestion
