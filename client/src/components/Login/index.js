import React, {  useState } from "react";
import "./styles.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
//   const [message,setMessage] = useState("Email is: admin@gmail.com and password is: admin")

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/upload")
  //   }
  // }, []);

  const handleInputChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
    // console.log(loginObj);
  };

  const handleSubmit = (e) => {
        if(loginObj.email === "admin@gmail.com" && loginObj.password === "admin"){
            
            navigate("/dashboard")
          }else{
            alert("Incorrect Email or Password")
          }
  };
  return (
    <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="email-icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginObj.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password-icon" />
            <input
              type="password"
              placeholder="Password"
              value={loginObj.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <p style={{color:"green"}}>Email is: admin@gmail.com and password is: admin</p>
        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
