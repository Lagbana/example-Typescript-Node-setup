import { Transactions } from '../models/transactions'
import { ITransactionDocument } from '../typings'

/**
 * @returns {Promise<[ITransactionDocument]>} - returns an array transaction objects
 * retrieves all transactions and sorts by descending order
 */
async function getTransactions (): Promise<Array<ITransactionDocument>> {
  const transactions = Transactions.find({}).sort({ date: -1 })
  return transactions
}

/**
 * @param {Object} - context
 * @returns {Promise<ITransactionDocument>} - creates a new transaction in the database and returns a transaction object
 */
async function createTransaction (context: any): Promise<ITransactionDocument> {
  const transaction = Transactions.create(context)
  return transaction
}

export {
    getTransactions,
    createTransaction
}