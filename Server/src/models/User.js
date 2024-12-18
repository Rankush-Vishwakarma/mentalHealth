const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId && !this.phone;
    }
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  phone: {
    type: String,
    unique: true,
    sparse: true
  },
  otp: {
    type: String,
    sparse: true
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

// Pre-save hook to hash password if it is modified or new
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const bcrypt = require('bcrypt');
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;