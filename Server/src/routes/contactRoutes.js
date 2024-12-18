const express = require('express');
const router = express.Router();
const contactService = require('../services/contactService');

// Create a new contact message
router.post('/', async (req, res) => {
  try {
    const contactMessage = await contactService.createContactMessage(req.body);
    res.status(201).json(contactMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all contact messages
router.get('/', async (req, res) => {
  try {
    const contactMessages = await contactService.getAllContactMessages();
    res.status(200).json(contactMessages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single contact message by ID
router.get('/:id', async (req, res) => {
  try {
    const contactMessage = await contactService.getContactMessageById(req.params.id);
    if (!contactMessage) {
      return res.status(404).json({ error: 'Contact message not found' });
    }
    res.status(200).json(contactMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a contact message by ID
router.delete('/:id', async (req, res) => {
  try {
    const contactMessage = await contactService.deleteContactMessageById(req.params.id);
    if (!contactMessage) {
      return res.status(404).json({ error: 'Contact message not found' });
    }
    res.status(200).json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;