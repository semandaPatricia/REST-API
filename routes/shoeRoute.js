
const express = require ('express')
const shoe =require ('./models/shoeModel')
const {getShoes, getShoe} = require('../controllers/shoeController')

const router =express .Router();

router.get('/:id',async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoes = await shoes.find({})
      res.status (200).json(shoes)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   })


   router.get('/shoes/:id',async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoes = await shoes. findbyId(id)
      res.status (200).json(shoes)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   })


   router.post('/:id',async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoes = await shoes.create(req.body)
      res.status (200).json(shoes)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   })


   //DELETE A PRODUCT

   router.get('/shoes/:id',async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoe = await shoe.findByIdAndDelete(id)
      if (!shoe){
        return res.status (404).json({message:`cant find any product with with ID ${id}` })
      }
      res.status (200).json(shoe)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   })

//UPDATING THE PRODUCTS
    
 


  module. exports = router