const Contact = require('../models/Contact');

// Create a new contact message
const createContactMessage = async (data) => {
  try {
    const contactMessage = new Contact(data);
    await contactMessage.save();
    return contactMessage;
  } catch (error) {
    throw new Error('Error creating contact message: ' + error.message);
  }
};

// Get all contact messages
const getAllContactMessages = async () => {
  try {
    const contactMessages = await Contact.find();
    return contactMessages;
  } catch (error) {
    throw new Error('Error fetching contact messages: ' + error.message);
  }
};

// Get a single contact message by ID
const getContactMessageById = async (id) => {
  try {
    const contactMessage = await Contact.findById(id);
    if (!contactMessage) {
      throw new Error('Contact message not found');
    }
    return contactMessage;
  } catch (error) {
    throw new Error('Error fetching contact message: ' + error.message);
  }
};

// Delete a contact message by ID
const deleteContactMessageById = async (id) => {
  try {
    const contactMessage = await Contact.findByIdAndDelete(id);
    if (!contactMessage) {
      throw new Error('Contact message not found');
    }
    return contactMessage;
  } catch (error) {
    throw new Error('Error deleting contact message: ' + error.message);
  }
};

module.exports = {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  deleteContactMessageById
};