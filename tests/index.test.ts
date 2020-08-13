import { createTransaction } from '../src/controllers/transactions'
import { Transactions } from '../src/models/transactions'
import request from 'supertest'
import { app } from '../src/app'


// Mock mongoose create method
Transactions.create = jest.fn()

// testing controllers
describe(`Transactions controllers testing`, () => {

  it('should have createTranction function', () => {
    expect(typeof createTransaction).toBe('function')
  })

  it('should internally call Transactions.create', () => {
    createTransaction({})
    expect(Transactions.create).toBeCalled()
  })
})

// testing routes
describe('POST /transactions', () => {
  it('should return 200 OK', async done => {
    const response = await request(app).post('/transactions')
    expect(response.status).toBe(200)
    done()
  })
})

describe('GET /transactions', () => {
  it('should return 200 OK', async done => {
    const response = await request(app).get('/transactions')
    expect(response.status).toBe(200)
    done()
  })
})

