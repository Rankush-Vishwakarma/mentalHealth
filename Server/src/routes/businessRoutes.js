const express = require('express');
const router = express.Router();
const businessService = require('../services/businessService');

// Create a new business request
router.post('/', async (req, res) => {
  try {
    const businessRequest = await businessService.createBusinessRequest(req.body);
    res.status(201).json(businessRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all business requests
router.get('/', async (req, res) => {
  try {
    const businessRequests = await businessService.getAllBusinessRequests();
    res.status(200).json(businessRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single business request by ID
router.get('/:id', async (req, res) => {
  try {
    const businessRequest = await businessService.getBusinessRequestById(req.params.id);
    if (!businessRequest) {
      return res.status(404).json({ error: 'Business request not found' });
    }
    res.status(200).json(businessRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a business request by ID
router.put('/:id', async (req, res) => {
  try {
    const businessRequest = await businessService.updateBusinessRequestById(req.params.id, req.body);
    if (!businessRequest) {
      return res.status(404).json({ error: 'Business request not found' });
    }
    res.status(200).json(businessRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a business request by ID
router.delete('/:id', async (req, res) => {
  try {
    const businessRequest = await businessService.deleteBusinessRequestById(req.params.id);
    if (!businessRequest) {
      return res.status(404).json({ error: 'Business request not found' });
    }
    res.status(200).json({ message: 'Business request deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;