import chalk from 'chalk';
import mongoose from 'mongoose';
import express from 'express';
import router from './router';

const PORT = 3000;
const app = express();

app.use('/', router)

const connectDB = () => {
  mongoose.connect('mongodb+srv://vladimir:14235678Asdf@sadbatya.se480p9.mongodb.net/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log(chalk.green('Connected to MongoDB'));
  })
  .catch((error) => {
    console.error(chalk.red('Error connecting to MongoDB:', error.message)); 
  });
};

app.use(express.json());

app.listen(PORT, () => {
  console.log(chalk.green(`Server running on ${PORT}`));
});

module.exports = {
  connectDB
}
