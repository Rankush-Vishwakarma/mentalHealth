const mongoose = require('mongoose');

const partnersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: true
  },
  websiteUrl: {
    type: String,
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

const Partners = mongoose.model('Partners', partnersSchema);

module.exports = Partners;