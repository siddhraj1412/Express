const express = require('express')
const app = express()
const port = 3000

app.use (express.static("public"))// to modify the css and see the changes!!

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home', (req, res) => {
  res.sendFile(__dirname+"/home.html")
})

app.get('/About', (req, res) => {
  res.sendFile(__dirname+"/about.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
