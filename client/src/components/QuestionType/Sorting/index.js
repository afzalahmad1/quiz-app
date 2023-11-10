import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sorting = ({questionDetails,handleInputChange,addNewQuestion}) => {
  const navigate = useNavigate()
  return (
    <div className="question-form">
    <div className="question-container">
      <div className="question-header">
        <div className="question-text">Sorting Question</div>
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
          value={questionDetails.optionA}
            type="text"
            name="optionA"
            id="A"
            onChange={handleInputChange}
            placeholder="Enter Option A"
          />
        </div>
        <div className="question-input">
          <input
          value={questionDetails.optionB}
            type="text"
            name="optionB"
            id="B"
            onChange={handleInputChange}
            placeholder="Enter Option B"
          />
        </div>

        <div className="question-input">
          <input
          value={questionDetails.optionC}
            type="text"
            name="optionC"
            id="C"
            onChange={handleInputChange}
            placeholder="Enter Option C"
          />
        </div>
        <div className="question-input">
          <input
          value={questionDetails.optionD}
            type="text"
            name="optionD"
            id="D"
            onChange={handleInputChange}
            placeholder="Enter Option D"
          />
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

export default Sorting
