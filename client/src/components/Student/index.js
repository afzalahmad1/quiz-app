import React, { useEffect, useState } from "react";
import "./styles.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import { useNavigate } from "react-router-dom";



const Student = ({setMinute,setSecond}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const min = JSON.parse(localStorage.getItem("min"));
  const sec = JSON.parse(localStorage.getItem("sec"));
  useEffect(()=>{
    if(min){
      console.log("local Min");
      setMinute(()=>min)
    }else{
      console.log("global sec");
      setMinute(()=>9)
    }
    if(sec){
      console.log("local sec");
      setSecond(()=>sec)
    }else{
      console.log("global sec");
      setSecond(()=>60)
    }
  },[])

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const handleQuiz = () => {
    if(user.email !== "" && user.password !== ""){
      localStorage.setItem("student",JSON.stringify(user))
      navigate("/quiz")
    }else{
      alert("Please Enter correct details")
    }
  };
  return (
    <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">Student Details</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user-icon" />
            <input
              type="text"
              placeholder="Name"
              onChange={handleUser}
              name="name"
              required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email-icon" />
            <input
              type="email"
              placeholder="Email"
              onChange={handleUser}
              name="email"
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit"  onClick={handleQuiz}>
            Take Quiz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;