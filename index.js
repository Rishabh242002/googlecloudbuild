const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/elvishbhai", (req,res)=>{
  res.send('Elvish Bhai!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
