import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = ({allQuestions,reload,setReload}) => {
  const navigate = useNavigate();
  const handleDelete = async (id)=>{
    try {
      const res = await axios.delete(`https://quiz-app-dkw1.onrender.com/question/delete/${id}`)
      console.log(res);
      alert(res.data.message)
      setReload(!reload)
    } catch (error) {
      console.log("error",error);
    }

  }
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
            <th>Delete</th>
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
                  <td onClick={()=>handleDelete(question._id)}>delete</td>

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
