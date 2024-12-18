const express = require('express');
const router = express.Router();
const blogService = require('../services/blogService');

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const blogPost = await blogService.createBlogPost(req.body);
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await blogService.getAllBlogPosts();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await blogService.getBlogPostById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog post by ID
router.put('/:id', async (req, res) => {
  try {
    const blogPost = await blogService.updateBlogPostById(req.params.id, req.body);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    const blogPost = await blogService.deleteBlogPostById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;