import express, { Application, Request, Response } from 'express' // import express and the express types

const app: Application = express() // app is an Application interface type

const port = Number(process.env.PORT) || 3000 // port is a number type

/**
 * @param {Object} - req object with interface type Request
 * @param {Object} - res object with interface type Response
 * @returns void - nothing to return
 */
app.get('/', (req: Request, res: Response): void => {
  res.send('The fat cat sat on a mat')
})

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.log(`App running on port ${port}!`)
})
