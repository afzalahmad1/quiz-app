import React from 'react'
import { useNavigate } from 'react-router-dom'

const FillBlank = ({questionDetails,handleInputChange,addNewQuestion}) => {
  const navigate = useNavigate();
  return (
    <div className="question-form">
    <div className="question-container">
      <div className="question-header">
        <div className="question-text">Fill In The Blank</div>
        <div className="question-underline"></div>
      </div>
      <div className="question-inputs">
        <div className="question-textarea">
          <textarea
            value={questionDetails.question}
            onChange={handleInputChange}
            name="question"
            id="question"
            cols="52"
            placeholder="Enter Question"
            rows="3"
          ></textarea>
        </div>
      
        <div className="question-input">
          <input
          value={questionDetails.answer}
            type="text"
            name="answer"
            id="answer"
            onChange={handleInputChange}
            placeholder="Enter Answer"
          />
        </div>
      </div>
      <div className="question-submit-container">
        <div className="question-submit" onClick={addNewQuestion}>Add Question</div>
        <div className="question-submit" onClick={()=> navigate("/dashboard")}>All Questions</div>
      </div>
    </div>
  </div>
  )
}

export default FillBlank
