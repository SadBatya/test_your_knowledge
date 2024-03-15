const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  variants: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
});


const Question = mongoose.model('Question', questionSchema)


export default Question
