const SuccessStory = require('../models/SuccessStories');

// Create a new success story
const createSuccessStory = async (data) => {
  try {
    const successStory = new SuccessStory(data);
    await successStory.save();
    return successStory;
  } catch (error) {
    throw new Error('Error creating success story: ' + error.message);
  }
};

// Get all success stories
const getAllSuccessStories = async () => {
  try {
    const successStories = await SuccessStory.find();
    return successStories;
  } catch (error) {
    throw new Error('Error fetching success stories: ' + error.message);
  }
};

// Get a single success story by ID
const getSuccessStoryById = async (id) => {
  try {
    const successStory = await SuccessStory.findById(id);
    if (!successStory) {
      throw new Error('Success story not found');
    }
    return successStory;
  } catch (error) {
    throw new Error('Error fetching success story: ' + error.message);
  }
};

// Update a success story by ID
const updateSuccessStoryById = async (id, data) => {
  try {
    const successStory = await SuccessStory.findByIdAndUpdate(id, data, { new: true });
    if (!successStory) {
      throw new Error('Success story not found');
    }
    return successStory;
  } catch (error) {
    throw new Error('Error updating success story: ' + error.message);
  }
};

// Delete a success story by ID
const deleteSuccessStoryById = async (id) => {
  try {
    const successStory = await SuccessStory.findByIdAndDelete(id);
    if (!successStory) {
      throw new Error('Success story not found');
    }
    return successStory;
  } catch (error) {
    throw new Error('Error deleting success story: ' + error.message);
  }
};

module.exports = {
  createSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStoryById,
  deleteSuccessStoryById
};