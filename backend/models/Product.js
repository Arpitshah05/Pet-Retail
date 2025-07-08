const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required']
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0.01, 'Price must be greater than 0']
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be negative']
  },
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Toys', 'Grooming', 'Health', 'Accessories']
  },
  petType: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat', 'Bird', 'Fish', 'Small Animal']
  },
  imageUrl: {
    type: String,
    default: '/default-product.png'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema); 