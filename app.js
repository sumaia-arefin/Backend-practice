require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Myself Sumaia')
})

app.post('/', (req, res) => {
    const data=req.body
    console.log(data)
    res.send('Super Woman')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
