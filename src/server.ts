import { app } from './app'

const port = Number(process.env.PORT) || 3000 // port is a number type

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.log(`App running on port ${port}!`)
})
