
const Shoe = require('../model/shoesModel.js');

//Get all products
const getShoes = async(req,res) =>{
    try {
      const shoeList = await Shoe.find({})
      res.status (200).json(shoeList)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   }

   //get a single product
    const getShoe = async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoeList = await Shoe. findbyId(id)
      res.status (200).json(shoeList)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message});
      
    }
   }

   //Create a product
   const createShoe = async(req,res) =>{
    try {
        
      const shoeList = await Shoe.create(req.body)
      res.status (200).json(shoeList)
      
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
      
    }
   }

   //update a product
   const updateShoe = async(req, res) => {
    try {
        const {id} = req.params;
        const shoeList = await Shoe.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!shoeList){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedShoe = await Shoe.findById(id);
        res.status(200).json(updatedShoe);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

//delete a product
const deleteShoe = async(req, res) =>{
    try {
        const {id} = req.params;
        const shoeList = await Shoe.findByIdAndDelete(id);
        if(!shoeList){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(shoeList);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}




   module.exports = { 
      getShoes,
      getShoe,
      createShoe,
      updateShoe,
      deleteShoe
    }