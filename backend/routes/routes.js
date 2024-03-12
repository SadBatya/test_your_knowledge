import express from 'express'
const router = express.Router()
import getQuestions from '../controller'

router.get('/questions', getQuestions)


export default router