const Business = require('../models/Business');

// Create a new business request
const createBusinessRequest = async (data) => {
  try {
    const businessRequest = new Business(data);
    await businessRequest.save();
    return businessRequest;
  } catch (error) {
    throw new Error('Error creating business request: ' + error.message);
  }
};

// Get all business requests
const getAllBusinessRequests = async () => {
  try {
    const businessRequests = await Business.find();
    return businessRequests;
  } catch (error) {
    throw new Error('Error fetching business requests: ' + error.message);
  }
};

// Get a single business request by ID
const getBusinessRequestById = async (id) => {
  try {
    const businessRequest = await Business.findById(id);
    if (!businessRequest) {
      throw new Error('Business request not found');
    }
    return businessRequest;
  } catch (error) {
    throw new Error('Error fetching business request: ' + error.message);
  }
};

// Update a business request by ID
const updateBusinessRequestById = async (id, data) => {
  try {
    const businessRequest = await Business.findByIdAndUpdate(id, data, { new: true });
    if (!businessRequest) {
      throw new Error('Business request not found');
    }
    return businessRequest;
  } catch (error) {
    throw new Error('Error updating business request: ' + error.message);
  }
};

// Delete a business request by ID
const deleteBusinessRequestById = async (id) => {
  try {
    const businessRequest = await Business.findByIdAndDelete(id);
    if (!businessRequest) {
      throw new Error('Business request not found');
    }
    return businessRequest;
  } catch (error) {
    throw new Error('Error deleting business request: ' + error.message);
  }
};

module.exports = {
  createBusinessRequest,
  getAllBusinessRequests,
  getBusinessRequestById,
  updateBusinessRequestById,
  deleteBusinessRequestById
};