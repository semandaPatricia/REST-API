const express = require ('express')
const app = express()
const cors =require('cors')
const mongoose = require ('mongoose')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})
app.use(cors())

const PORT =  process.env.PORT || 8000;

connectDB()

/*middleware*/
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 


/*routes basic*/
app.get('/', (req, res) => {
    res.send('hello world ')

 })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
 
 app.get('/shoes',async(req,res) =>{
  try {
    const shoes = await shoes.find({})
    res.status (200).json(shoes)
    
  } catch (error) {
    console.log(error.message);
    res.status (500).json ({message:error.message})
    
  }
 })

 /*port*/
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}!`);
  });