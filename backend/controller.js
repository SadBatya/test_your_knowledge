import chalk from 'chalk'
import Question from './models/question'


const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (error) {
    console.error(chalk.red('res error:', error.message))
  }
}


export default {
  getQuestions
}