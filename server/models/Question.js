// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const questionScheema = new Schema({
  question: {
    type: String,
  },
  optionA: {
    type: String,
  },
  optionB: {
    type: String,
  },
  optionC: {
    type: String,
  },
  optionD: {
    type: String,
  },
  answer: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Question = Mongoose.model("questions",questionScheema)
export  {Question};