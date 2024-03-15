// router.js
import express from 'express';
import { getQuestion } from './getQuestion';

const router = express.Router();

router.get('/question', getQuestion);

export default router;
