import mongoose from 'mongoose'
import chalk from 'chalk'

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


export default connectDB

