import { Schema, Model, model } from 'mongoose'
import { ITransactionDocument } from '../typings'

const transactionSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Enter a name for transaction'
    },
    value: {
      type: Number,
      required: 'Enter an amount'
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

export const Transactions: Model<ITransactionDocument> = model<ITransactionDocument>('Transactions', transactionSchema)
