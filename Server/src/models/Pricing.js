const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;