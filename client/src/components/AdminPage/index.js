import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const AdminPage = ({allQuestions}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-container-flex">
        <div className="item" onClick={() => navigate("/addquestion")}>
          Add New Question
        </div>
      </div>
      <table id="questions">
        <thead>
          <tr>
            <th>Q.No</th>
            <th>Question</th>
            <th>Option A</th>
            <th>Option B</th>
            <th>Option C</th>
            <th>Option D</th>
            <th>Answer</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
            allQuestions && allQuestions.map((question,idx)=>{
              return(
                <tr key={idx}>
                  <td>{idx+1}</td>
                  <td>{question.question}</td>
                  <td>{question.optionA}</td>
                  <td>{question.optionB}</td>
                  <td>{question.optionC}</td>
                  <td>{question.optionD}</td>
                  <td>{question.answer}</td>
                  <td>{question.type}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
