import { useEffect, useState } from "react";
import "./styles.css";
import Timer from "../components/Quiz/Timer";
import Single from "../components/Quiz/PaperType/Single";
import MultipleQuestion from "../components/Quiz/PaperType/Multiple";
import Free from "../components/Quiz/PaperType/Free";
import Sorting from "../components/Quiz/PaperType/Sorting";
import Blank from "../components/Quiz/PaperType/Blank";
import { useNavigate } from "react-router-dom";
const Quiz = ({ allQuestions, minute, second, setSecond, setMinute }) => {
  const [marks, setMarks] = useState(0);
  const [solvedQuestionStatus, setSolvedQuestionStatus] = useState([]);

  const [studentAnswer, setStudentAnswer] = useState();
  const [studentMultipleAnswer, setStudentMultipleAnswer] = useState([]);
  const [freeAnswer, setFreeAnswer] = useState("");
  const [sortingAnswer, setSortingAnswer] = useState([]);
  const [blankAnswer, setBlankAnswer] = useState("");
  const [flag, setFlag] = useState(false);
  const [paper, setPaper] = useState({});
  const [quesNo, setQuesNo] = useState(0);
  const navigate = useNavigate()

  const student = JSON.parse(localStorage.getItem("student"));

  var questionElement;

  const handleFinalSubmit =()=>{
    console.log(marks);
    localStorage.setItem("marks",marks);
    localStorage.removeItem("min")
    localStorage.removeItem("sec")
    navigate("/result")
  }

  function clearCheckedRadio() {
    let arr = document.querySelectorAll(".radio-btn");
    // console.log(arr);
    arr.forEach((value) => (value.checked = false));
  }
  const handleTimer = () => {
    // setPaper(()=>allQuestions[quesNo]);

    
    // console.log(time);
    let secCount = second;
    let minCount = minute;
    if (minCount > 0 && secCount > 0) {
      localStorage.setItem("min", minCount);
      localStorage.setItem("sec", secCount);
    }

    let timer = setInterval(() => {
      // setTime((prev) => prev - 1);

      setSecond((prev) => prev - 1);
      secCount--;
      if (secCount <= 0) {
        if (minCount >= 0) {
          setSecond(() => 60);
        }
        secCount = 60;
        if (minCount <= 0) {
          // alert("hii")
          setSecond(() => 0);
          localStorage.removeItem("min");
          localStorage.removeItem("sec");
          clearInterval(timer);
          handleFinalSubmit()
        } else {
          minCount--;
          setMinute((prev) => prev - 1);
        }
      }
      
      return () => {
        clearInterval(timer);
      };
    }, 1000);
  };

  useEffect(() => {
    setQuesNo(quesNo);
    // setPaper(() => allQuestions[quesNo]);
    console.log("min", minute);
    console.log("min", second);
    handleTimer();
  }, []);

  useEffect(() => {
    setPaper(() => allQuestions[quesNo]);

    clearCheckedRadio();
    setStudentAnswer("");
    setStudentMultipleAnswer([]);
    setFreeAnswer("");
    setBlankAnswer("");
    setSortingAnswer("");

    let checkBtn = document.getElementById("check");
    console.log(checkBtn);
    for (let val = 0; val < solvedQuestionStatus.length; val++) {
      if (
        checkBtn &&
        solvedQuestionStatus[val].question === allQuestions[quesNo].question
      ) {
        console.log("valllll", val.question);
        return setFlag(true);
      }
    }
    setFlag(false);
  }, [quesNo]);

  const handleNext = () => {
    console.log(solvedQuestionStatus);
    setQuesNo((prev) => prev + 1);
  };

  const handlePrev = () => {
    setQuesNo((prev) => prev - 1);
  };
  function handleFlag() {
    // console.log("questNo",quesNo);
    document.getElementById(`${quesNo}`).style.backgroundColor = "grey";

    setQuesNo((prev) => prev + 1);
  }

  const handleSubmitAnswer = () => {
    setFlag(true);

    questionElement = document.getElementById(`${quesNo}`);

    console.log("elementIn QUESSSS", questionElement);

    if (paper.type === "single") {
      if (studentAnswer && studentAnswer === paper.answer) {
        setMarks(marks + 1);
        questionElement.style.backgroundColor = "green";
      } else if (studentAnswer && studentAnswer !== paper.answer) {
        questionElement.style.backgroundColor = "red";
      }
      setStudentAnswer("");
    } else if (paper.type === "multiple") {
      let arr = studentMultipleAnswer.sort((a, b) => b - a);
      // console.log(paper.answer === String(arr))
      if (studentMultipleAnswer && String(arr) === paper.answer) {
        setMarks(marks + 1);
        // console.log("true");
        questionElement.style.backgroundColor = "green";
      } else if (studentMultipleAnswer && String(arr) !== paper.answer) {
        questionElement.style.backgroundColor = "red";
      }
      setStudentMultipleAnswer([]);
    } else if (paper.type === "free") {
      console.log(freeAnswer);
      if (freeAnswer) {
        questionElement.style.backgroundColor = "white";
        setMarks(marks + 1);
      } else {
        questionElement.style.backgroundColor = "black";
      }
      setFreeAnswer("");
    } else if (paper.type === "blank") {
      console.log(blankAnswer);
      if (blankAnswer && blankAnswer.toLowerCase() === paper.answer) {
        questionElement.style.backgroundColor = "green";
        setMarks(marks + 1);
      } else {
        questionElement.style.backgroundColor = "red";
      }
      setBlankAnswer("");
    } else if (paper.type === "sorting") {
      console.log(paper.answer === String(sortingAnswer))
      console.log("Stanswer", String(sortingAnswer))
      console.log("Answer", paper.answer)
      if (sortingAnswer && String(sortingAnswer) === paper.answer) {
        setMarks(marks + 1);
        console.log("true");
        questionElement.style.backgroundColor = "green";
      } else if (sortingAnswer && String(sortingAnswer) !== paper.answer) {
        questionElement.style.backgroundColor = "red";
      }
      setSortingAnswer([]);
    }
    setSolvedQuestionStatus([...solvedQuestionStatus, allQuestions[quesNo]]);
  };

  function handleCheckBoxChange(e) {
    // console.log(paper.type);
    if (paper.type === "multiple") {
      let arr = [...studentMultipleAnswer];
      if (studentMultipleAnswer.includes(e.target.value)) {
        console.log("present");
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === e.target.value) {
            arr.splice(i, 1);
          }
        }
        setStudentMultipleAnswer(arr);
      } else {
        console.log("not present");
        arr.push(e.target.value + "");
        setStudentMultipleAnswer(arr);
      }
    } else if (paper.type === "sorting") {
      let arr = [...sortingAnswer];
      if (sortingAnswer.includes(e.target.value)) {
        console.log("present in sorting");
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === e.target.value) {
            arr.splice(i, 1);
          }
        }
        setSortingAnswer(arr);
      } else {
        console.log("not present in sorting");
        arr.push(e.target.value + "");
        setSortingAnswer(arr);
      }
    }
  }

 

  if (!student) {
    return (
      <h1 style={{ textAlign: "center" }}>Please Enter Student Details!!</h1>
    );
  }

  if (!allQuestions || !paper) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Please Add Questions from Admin Section!!
      </h1>
    );
  }

  return (
    <div>
      <div className="main-container">
        <div className="sidebar">
          <div className="student-details">
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Total Question: {allQuestions.length}</p>
            <p>Marks: {marks} </p>
          </div>
          <div className="status">
            {allQuestions.map((val, idx) => (
              <div
                onClick={() => setQuesNo(idx)}
                className="status-items"
                id={idx}
                // style={{backgroundColor: color}}
                key={idx}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="right-container">
          <div className="upper-right">
            <Timer minute={minute} second={second} />
            <button className="btns paper-submit" onClick={handleFinalSubmit}>Submit</button>
          </div>

          <div className="main">
            {/* {flag ? (
              <div id="start" onClick={handleTimer}>
                Start Test
              </div>
            ) : ( */}

            <div className="quiz-container">
              {/* {console.log("paper",paper)} */}
              {paper.type === "single" && (
                // Paper Type
                <Single
                  allQuestions={allQuestions}
                  paper={paper}
                  flag={flag}
                  handleFlag={handleFlag}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  handleSubmitAnswer={handleSubmitAnswer}
                  quesNo={quesNo}
                  setStudentAnswer={setStudentAnswer}
                />
              )}
              {paper.type === "multiple" && (
                // Paper Type
                <MultipleQuestion
                  allQuestions={allQuestions}
                  paper={paper}
                  flag={flag}
                  handleFlag={handleFlag}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  handleSubmitAnswer={handleSubmitAnswer}
                  handleCheckBoxChange={handleCheckBoxChange}
                  quesNo={quesNo}
                />
              )}
              {paper.type === "free" && (
                // Paper Type
                <Free
                  allQuestions={allQuestions}
                  paper={paper}
                  flag={flag}
                  handleFlag={handleFlag}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  handleSubmitAnswer={handleSubmitAnswer}
                  handleCheckBoxChange={handleCheckBoxChange}
                  quesNo={quesNo}
                  freeAnswer={freeAnswer}
                  setFreeAnswer={setFreeAnswer}
                />
              )}
              {paper.type === "sorting" && (
                // Paper Type
                <Sorting
                  allQuestions={allQuestions}
                  paper={paper}
                  flag={flag}
                  handleFlag={handleFlag}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  sortingAnswer={sortingAnswer}
                  handleSubmitAnswer={handleSubmitAnswer}
                  handleCheckBoxChange={handleCheckBoxChange}
                  quesNo={quesNo}
                />
              )}

              {paper.type === "blank" && (
                // Paper Type
                <Blank
                  allQuestions={allQuestions}
                  paper={paper}
                  flag={flag}
                  handleFlag={handleFlag}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  handleSubmitAnswer={handleSubmitAnswer}
                  handleCheckBoxChange={handleCheckBoxChange}
                  quesNo={quesNo}
                  blankAnswer={blankAnswer}
                  setBlankAnswer={setBlankAnswer}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
