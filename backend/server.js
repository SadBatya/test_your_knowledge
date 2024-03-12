import mongoose from 'mongoose'
import chalk from 'chalk'
import express from 'express'

const app = express()
const PORT = 5000;


const connectDB = () => {
  mongoose.connect('mongodb+srv://vladimir:14235678Asdf@sadbatya.se480p9.mongodb.net/', {
})
  .then(() => {
    console.log(chalk.green('Connected to MongoDB'));
  })
  .catch((error) => {
    chalk.red(console.error('Error connecting to MongoDB:', error.message)); 
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())

export default connectDB

