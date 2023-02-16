const asyncHandler = require("express-async-handler");
const Post = require('../models/postModel')
const User = require('../models/userModel')

// Gets All The Posts with GET /api/posts (PRIVATE)
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({user : req.user.id})
  res.status(200).json(posts);
});

// Create All The Posts with POST /api/posts (PRIVATE)
const createPosts = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const posts = Post.create({
    text : req.body.text,
    user : req.user.id
  })

  res.status(200).json(posts);
});

// Updates All The Posts with PUT /api/posts (PRIVATE)
const updatePosts = asyncHandler(async (req, res) => {
  const posts = await Post.findById(req.params.id)

  if(!posts){
    res.status(400)
    throw new Error('Post not found')
  }

  const user = await User.findById(req.user.id)

  // Checking for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  // Making sure that logged in user matches the post user
  if(posts.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }


  const updatedPosts = await Post.findByIdAndUpdate(req.params.id , req.body , {new : true})
  res.status(200).json(updatedPosts);
});

// Delete All The Posts with DELETE /api/posts (PRIVATE)
const deletePosts = asyncHandler(async (req, res) => {
  const posts = await Post.findById(req.params.id)

  if(!posts){
    res.status(400)
    throw new Error('Post not found')
  }

  const user = await User.findById(req.user.id)

  // Checking for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  // Making sure that logged in user matches the post user
  if(posts.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized')
  }


  const deletedPosts = await Post.findByIdAndRemove(req.params.id , req.body)

  res.status(200).json(deletedPosts);
});

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
};
