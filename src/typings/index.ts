import { Document } from 'mongoose'

/**
 * -------------------------------------------------
 *  Interface definition for the transaction object
 * -------------------------------------------------
 */
export interface ITransactionDocument extends Document {
  name: string
  value: number
  date: Date
}
