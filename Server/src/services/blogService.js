const Blog = require('../models/Blog');

// Create a new blog post
const createBlogPost = async (data) => {
  try {
    const blogPost = new Blog(data);
    await blogPost.save();
    return blogPost;
  } catch (error) {
    throw new Error('Error creating blog post: ' + error.message);
  }
};

// Get all blog posts
const getAllBlogPosts = async () => {
  try {
    const blogPosts = await Blog.find();
    return blogPosts;
  } catch (error) {
    throw new Error('Error fetching blog posts: ' + error.message);
  }
};

// Get a single blog post by ID
const getBlogPostById = async (id) => {
  try {
    const blogPost = await Blog.findById(id);
    if (!blogPost) {
      throw new Error('Blog post not found');
    }
    return blogPost;
  } catch (error) {
    throw new Error('Error fetching blog post: ' + error.message);
  }
};

// Update a blog post by ID
const updateBlogPostById = async (id, data) => {
  try {
    const blogPost = await Blog.findByIdAndUpdate(id, data, { new: true });
    if (!blogPost) {
      throw new Error('Blog post not found');
    }
    return blogPost;
  } catch (error) {
    throw new Error('Error updating blog post: ' + error.message);
  }
};

// Delete a blog post by ID
const deleteBlogPostById = async (id) => {
  try {
    const blogPost = await Blog.findByIdAndDelete(id);
    if (!blogPost) {
      throw new Error('Blog post not found');
    }
    return blogPost;
  } catch (error) {
    throw new Error('Error deleting blog post: ' + error.message);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPostById,
  deleteBlogPostById
};