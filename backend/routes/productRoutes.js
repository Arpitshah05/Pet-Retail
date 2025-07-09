const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct
} = require('../controllers/productController');

// GET all products
router.get('/', getProducts);

// GET single product
router.get('/:id', getProductById);

// POST create new product
router.post('/', createProduct);

module.exports = router; 