require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('RaviKumar_001')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at insta</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})