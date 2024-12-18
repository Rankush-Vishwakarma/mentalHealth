const express = require('express');
const router = express.Router();
const partnersService = require('../services/partnersService');

// Create a new partner
router.post('/', async (req, res) => {
  try {
    const partner = await partnersService.createPartner(req.body);
    res.status(201).json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all partners
router.get('/', async (req, res) => {
  try {
    const partners = await partnersService.getAllPartners();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single partner by ID
router.get('/:id', async (req, res) => {
  try {
    const partner = await partnersService.getPartnerById(req.params.id);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a partner by ID
router.put('/:id', async (req, res) => {
  try {
    const partner = await partnersService.updatePartnerById(req.params.id, req.body);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a partner by ID
router.delete('/:id', async (req, res) => {
  try {
    const partner = await partnersService.deletePartnerById(req.params.id);
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }
    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;