const Resources = require('../models/Resources');

// Create a new resource
const createResource = async (data) => {
  try {
    const resource = new Resources(data);
    await resource.save();
    return resource;
  } catch (error) {
    throw new Error('Error creating resource: ' + error.message);
  }
};

// Get all resources
const getAllResources = async () => {
  try {
    const resources = await Resources.find();
    return resources;
  } catch (error) {
    throw new Error('Error fetching resources: ' + error.message);
  }
};

// Get a single resource by ID
const getResourceById = async (id) => {
  try {
    const resource = await Resources.findById(id);
    if (!resource) {
      throw new Error('Resource not found');
    }
    return resource;
  } catch (error) {
    throw new Error('Error fetching resource: ' + error.message);
  }
};

// Update a resource by ID
const updateResourceById = async (id, data) => {
  try {
    const resource = await Resources.findByIdAndUpdate(id, data, { new: true });
    if (!resource) {
      throw new Error('Resource not found');
    }
    return resource;
  } catch (error) {
    throw new Error('Error updating resource: ' + error.message);
  }
};

// Delete a resource by ID
const deleteResourceById = async (id) => {
  try {
    const resource = await Resources.findByIdAndDelete(id);
    if (!resource) {
      throw new Error('Resource not found');
    }
    return resource;
  } catch (error) {
    throw new Error('Error deleting resource: ' + error.message);
  }
};

module.exports = {
  createResource,
  getAllResources,
  getResourceById,
  updateResourceById,
  deleteResourceById
};