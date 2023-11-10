import React from "react";
import "./styles.css";
const Result = () => {
    let student = JSON.parse(localStorage.getItem("student"))
    localStorage.removeItem("min")
    localStorage.removeItem("sec")
    console.log(student);
  let marks = localStorage.getItem("marks");
  return (
    <div className="result-flex">
      <div className="result-container">
        <div className="result-items">Name: {student.name}</div>
        <div className="result-items">Email:{student.email}</div>
        <div className="result-items">Marks:  {marks}</div>
        {marks > 8 ? (
          <div style={{width: "90%", color: "green", textAlign:"center"}}>PASS</div>
        ) : (
          <div style={{width: "90%", color: "red", textAlign:"center" }}>FAIL</div>
        )}
      </div>
    </div>
  );
};

export default Result;
