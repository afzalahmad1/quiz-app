
import express from "express"
const router = express();

import {addQuestion,deleteQuestion,getAllQuestions}  from "../controllers/question.js"

router.post("/add", addQuestion);
router.get("/getAll", getAllQuestions);
router.delete("/delete/:id", deleteQuestion);

export default router;