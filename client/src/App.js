import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Navigators";
import Login from "./components/Login";
import Student from "./components/Student";
import AdminPage from "./components/AdminPage";
import { QuestionType } from "./components/Navigators";
import Single from "./components/QuestionType/Single";
import Multiple from "./components/QuestionType/Multiple";
import Sorting from "./components/QuestionType/Sorting";
import FillBlank from "./components/QuestionType/FillBlank";
import FreeChoice from "./components/QuestionType/FreeChoise";
import { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./pages/Quiz";
import Result from "./components/Result";

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const [reload, setReload] = useState(true);
  const [questionDetails, setQuestionDetails] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  });
  const [type, setType] = useState("single");

  useEffect(() => {
    fetchData();
  }, [reload]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://quiz-app-6q5s.onrender.com/question/getAll`);
      console.log(res);
      setAllQuestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setQuestionDetails({
      ...questionDetails,
      [e.target.name]: e.target.value,
    });
    // console.log(questionDetails);
  };

  const addNewQuestion = async () => {
    try {
      questionDetails.type = type;
      console.log(questionDetails);
      const res = await axios.post(
        `https://quiz-app-6q5s.onrender.com/question/add`,
        questionDetails
      );
      alert(res.data.message);
      setReload(!reload);
      setQuestionDetails({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Student setMinute={setMinute} setSecond={setSecond} />}
        />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/dashboard"
          element={<AdminPage allQuestions={allQuestions} />}
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              allQuestions={allQuestions}
              minute={minute}
              second={second}
              setSecond={setSecond}
              setMinute={setMinute}
            />
          }
        />
        <Route path="/addquestion" element={<QuestionType setType={setType} />}>
          <Route
            index
            element={
              <Single
                questionDetails={questionDetails}
                handleInputChange={handleInputChange}
                addNewQuestion={addNewQuestion}
              />
            }
          />
          <Route
            path="multichoice"
            element={
              <Multiple
                questionDetails={questionDetails}
                handleInputChange={handleInputChange}
                addNewQuestion={addNewQuestion}
              />
            }
          />
          <Route
            path="sorting"
            element={
              <Sorting
                questionDetails={questionDetails}
                handleInputChange={handleInputChange}
                addNewQuestion={addNewQuestion}
              />
            }
          />
          <Route
            path="fillinblank"
            element={
              <FillBlank
                questionDetails={questionDetails}
                handleInputChange={handleInputChange}
                addNewQuestion={addNewQuestion}
              />
            }
          />
          <Route
            path="freechoice"
            element={
              <FreeChoice
                questionDetails={questionDetails}
                handleInputChange={handleInputChange}
                addNewQuestion={addNewQuestion}
              />
            }
          />
        </Route>

        <Route
          path="/result"
          element={
            <Result />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
