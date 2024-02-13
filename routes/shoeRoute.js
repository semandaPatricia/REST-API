
const express = require ('express')
const Shoe =require ('../model/shoesModel.js')
const {
  getShoes,
  getShoe,
  createShoe,
  updateShoe,
  deleteShoe,
} = require("../controllers/shoeController");

const router =express .Router();

router.get('/', getShoes);

router.get('/:id', getShoe);


router.post('/', createShoe);

// update a product
router.put('/:id', updateShoe);

// delete a product

router.delete('/:id', deleteShoe);
    
 


  module. exports = router