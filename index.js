const express = require('express')

require('dotenv').config()
const app = express()
const PORT = process.env.PORT

app.get('/', (req,res) => {
  res.send("Server is running")
})



app.listen(PORT, ()=> {
  console.log("Server is running on Port " + PORT)
})