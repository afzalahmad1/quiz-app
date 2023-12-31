import  {Question}  from "../models/Question.js";
const addQuestion = async (req, res) => {
  const questionBody = req.body;
  // console.log(questionBody);
  try {
    if (
      !questionBody.question ||
      !questionBody.answer
    ) {
      res.send({
        message: "Question and Answer are required",
      });
      return;
    }
    const questionObj = new Question({
      question: questionBody.question,
      optionA: questionBody.optionA,
      optionB: questionBody.optionB,
      optionC: questionBody.optionC,
      optionD: questionBody.optionD,
      answer: questionBody.answer,
      type: questionBody.type,
    });
  
    await questionObj.save();
  
    res.send({
      status: 201,
      message: "Question has been created!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllQuestions = async (req,res)=>{
    try {
        const allQuestion = await Question.find({})
        res.send(allQuestion)
    } catch (error) {
        res.send(error)
    }
}
const deleteQuestion = async(req,res)=>{
  try {
    const id = req.params.id;
    console.log(id);
    await Question.findByIdAndDelete({_id:id})
    res.send({message:"Question is deleted"})
  } catch (error) {
    console.log(error);
    res.send({message:"server error",
  error:error})
  }
}
export {addQuestion,getAllQuestions,deleteQuestion};