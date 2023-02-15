const express = require('express');
const router = express.Router();
const {getPosts, updatePosts, createPosts, deletePosts} = require('../controllers/postControllers')

router.get('/' , getPosts)

router.post('/' , createPosts)

router.put('/:id' , updatePosts)

router.delete('/:id' , deletePosts)
module.exports = router;