const shoe = require ('./models/shoeModel')

//Get all shoes
const getShoes = async(req,res) =>{
    try {
      const shoes = await shoes.find({})
      res.status (200).json(shoes)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   }

   //get a single shoe


   router.getShoe('/shoes/:id',async(req,res) =>{
    try {
        const { id } = req.params ;
      const shoes = await shoes. findbyId(id)
      res.status (200).json(shoes)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   })
   

   module.exports = { getShoes ,getShoe}