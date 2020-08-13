import express, { Application } from 'express' // import express and the express types
import logger from 'morgan'
import mongoose from 'mongoose'
import { router as transactionRoutes } from './routes/transactionRoutes'

const app: Application = express() // app is an Application interface type

// set up middleware
app.use(logger('dev'))

// Connect to mongoDB database
// Specify mongoDB connection option booleans
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myBudget', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use('/', transactionRoutes)

export { app }
