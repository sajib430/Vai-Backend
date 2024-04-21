const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('sajib das is very good person')
})

app.get('/login',(req,res)=>{
    res.send('<h3>pl code</h3>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

