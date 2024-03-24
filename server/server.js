//пришлось все сложить в один файл потому что была какая-то проблема с импортами модулей:C
//хотя в json я прописал type: module
import chalk from 'chalk';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'


const PORT = process.env.PORT;
const app = express();
const { Schema } = mongoose;

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

const Question = mongoose.model('Question', questionSchema);

app.use(cors());
app.use(express.json());

app.get('/question', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(chalk.red('res error:', error.message));
  }
});

const connectDB = () => {
  mongoose
    .connect(
      process.env.DB
    )
    .then(() => {
      console.log(chalk.green('Connected to MongoDB'));
    })
    .catch((error) => {
      console.error(chalk.red('Error connecting to MongoDB:', error.message));
    });
};

connectDB();

app.listen(PORT, () => {
  console.log(chalk.green(`Server running on ${PORT}`));
});
