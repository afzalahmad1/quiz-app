
import express from "express"
const router = express();

import {addQuestion,getAllQuestions}  from "../controllers/question.js"

router.post("/add", addQuestion);
router.get("/getAll", getAllQuestions);

export default router;