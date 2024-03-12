import Question from './question.js'
import connectDB from './db.js'
import mongoose from 'mongoose'
import chalk from 'chalk'

connectDB();

const getQuestions = async () => {
  try {
    const questions = await Question.find();
    console.log(chalk.green('questions', questions));
  } catch (error) {
    console.error('Error getting questions', error.message);
  } finally {
    mongoose.connection.close();
  }
};

getQuestions();
