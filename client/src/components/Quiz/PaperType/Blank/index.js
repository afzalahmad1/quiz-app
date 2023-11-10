import React from 'react'

const Blank = ({allQuestions,flag,handleFlag,handleNext,blankAnswer,setBlankAnswer,handlePrev,handleSubmitAnswer,quesNo,paper}) => {
  return (
    <div>
      <div className="question-paper">
        <h2 style={{ textAlign: "center" }}>Question No: {quesNo + 1} : (Question Type:{paper.type})</h2>
        <div>
          <p>{paper.question}</p>
        </div>
        <input type="text" placeholder='Your Answer' id='blank-answer' value={blankAnswer} onChange={(e)=>setBlankAnswer(e.target.value)} />

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

export default Blank
