// getQuestion.js
import chalk from 'chalk';
import Question from './models/Question';

const getQuestion = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
    console.log('response', res.json(questions));
  } catch (error) {
    console.error(chalk.red('res error:', error.message));
  }
};

export { getQuestion };
